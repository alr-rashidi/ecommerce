import mongoose from "mongoose";
import { z } from "zod";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
  },
  price: {
    type: Number,
    required: true,
    min: 0.0001, //Price must be greater than zero.
  },
  Category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
    default: null,
    min: 0,
  },
  images: {
    type: [String],
    required: true,
    validate: {
      validator: (v: string[]) => {
        return v.every(img => z.string().url().safeParse(img).success);
      },
      message: "Images must be an array of valid URLs",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const ProductModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);
