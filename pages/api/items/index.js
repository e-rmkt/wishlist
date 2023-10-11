import connect from "@/db/connect";
import Item from "@/db/models/Item";

export default async function handler(request, response) {
  await connect();

  if (request.method === "GET") {
    const items = await Item.find();
    return response.status(200).json(items);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
