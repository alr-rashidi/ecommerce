import { connectToDB } from "@/server/connectToDB";
import { CategoryModel } from "@/server/models/category";
import { ProductModel } from "@/server/models/product";
import { productSchema } from "@/server/validations/product";
import { HydratedDocument, RootFilterQuery } from "mongoose";
import { NextRequest } from "next/server";
import { z } from "zod";

export type SortType = "newest" | "price-asc" | "price-desc" | "discount";
export type APIProductGetType = {
  products: z.infer<typeof productSchema>[];
  total: number;
  totalPages: number;
};
export const GET = async (req: NextRequest) => {
  try {
    await connectToDB();
    console.log("ProductModel:", ProductModel);
    const searchParams = new URL(req.url).searchParams;
    const limit = parseInt(searchParams.get("limit") || "10");
    const sort = (searchParams.get("sort") as SortType) || "newest";
    const page = parseInt(searchParams.get("page") || "1");
    const maxPrice = parseInt(searchParams.get("maxPrice") || "0");
    const minPrice = parseInt(searchParams.get("minPrice") || "0");
    const categoryId = searchParams.get("category");
    console.log(categoryId);

    const query: RootFilterQuery<z.infer<typeof productSchema>> = {};
    if (categoryId) {
      query.category = categoryId;
    }
    if (maxPrice | minPrice) {
      query.price = {
        $gte: minPrice,
        $lte: maxPrice == 0 ? Infinity : maxPrice,
      };
    }
    type SortMapType = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: { [key: string]: any };
    };
    const sortMap: SortMapType = {
      newest: { createdAt: -1 },
      "price-asc": { price: 1 },
      "price-desc": { price: -1 },
      discount: { discount: -1 },
    };

    const data = await ProductModel.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .populate({
        path: "category",
        model: CategoryModel,
      })
      .sort(sortMap[sort]);
    const dataCount = await ProductModel.countDocuments(query);

    return Response.json({
      total: dataCount,
      products: data,
      totalPages: Math.ceil(dataCount / limit),
    });
  } catch (err) {
    console.error("Failed to fetch product: ", err);
    return Response.json({ error: "Internal server Error" }, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connectToDB();
    const data = await req.json();
    const validatedData = productSchema.safeParse(data);
    if (!validatedData) throw "Invalid data";

    const newProduct: HydratedDocument<typeof ProductModel> = new ProductModel(
      validatedData
    );
    await newProduct.save();

    return Response.json(
      { message: "Product added successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Failed to add product: ", err);
    return Response.json({ error: "Internal server Error" }, { status: 500 });
  }
};
