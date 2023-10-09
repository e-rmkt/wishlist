import mongoose from "mongoose";

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String },
  article_number: { type: String },
  price: { type: Number },
});

const Item = mongoose.models?.Item || mongoose.model("Item", itemSchema);

export default Item;
