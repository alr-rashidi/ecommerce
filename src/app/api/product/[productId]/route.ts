import { NextRequest } from "next/server";
import { ProductModel } from "@/server/models/product";
import { connectToDB } from "@/server/connectToDB";

export const GET = async (req: NextRequest) => {
  try {
    await connectToDB();
    const productId = req.nextUrl.searchParams.get("productId");
    const product = await ProductModel.findById(productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return Response.json(product);
  } catch (err) {
    console.log("Failed to fetch products:", err);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
