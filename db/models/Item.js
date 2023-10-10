import mongoose from "mongoose";

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String },
  product_id: { type: String },
  price: { type: String, required: true },
  link: { type: String },
  collections: [{ type: String }],
});

const Item = mongoose.models?.Item || mongoose.model("Item", itemSchema);

export default Item;
