import { connectToDB } from "@/server/connectToDB";
import { CategoryModel } from "@/server/models/category";
import { ProductModel } from "@/server/models/product";
import { productSchema } from "@/server/validations/product";
import { HydratedDocument } from "mongoose";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await connectToDB();
    console.log("ProductModel:", ProductModel);
    const searchParams = new URL(req.url).searchParams;
    const limit = parseInt(searchParams.get("limit") || "10"); // Default limit is 10
    const categoryId = searchParams.get("category");
    console.log(categoryId);

    type QueryType = {
      category?: string;
    };
    const query: QueryType = {};
    if (categoryId) {
      query.category = categoryId;
    }

    const data = await ProductModel.find(query).limit(limit).populate({
      path: "category",
      model: CategoryModel,
    });

    return Response.json(data);
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
