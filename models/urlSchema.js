import mongoose from "mongoose";

const urlSchema = mongoose.Schema(
  {
    shortId: { type: String, required: true, unique: true },
    redirectURL: { type: String, required: true },
  },
  { timeStamps: true },
);

export const urlModel = mongoose.model("shortendurl", urlSchema);
