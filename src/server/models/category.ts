import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    min: 1,
    max: 50,
    required: true,
    unique: true,
  },
});

export const CategoryModel =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
