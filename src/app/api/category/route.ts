import { connectToDB } from "@/server/connectToDB";
import { CategoryModel } from "@/server/models/category";
import { categorySchema } from "@/server/validations/category";
import { HydratedDocument } from "mongoose";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    await connectToDB();
    const categories = await CategoryModel.find({});
    return Response.json(
      categories,
      { status: 200 }
    );
  } catch (err) {
    console.log("Failed to fetch categories:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connectToDB();
    const data = await req.json();
    const validationResult = categorySchema.safeParse(data);
    if (!validationResult.success) {
      console.error("Invalid category data:", validationResult);
      return new Response("Invalid category data", { status: 400 });
    }

    const validatedData = validationResult.data;
    const newCategory: HydratedDocument<typeof CategoryModel> =
      new CategoryModel({
        name: validatedData.name,
      });
    await newCategory.save();
    return Response.json(
      { message: "Category added successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Failed to add category:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
