import ItemCard from "../ItemCard/ItemCard";
import { StyledUnorderedList, Box } from "./ItemList.styled";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ItemList() {
  const { data: items, isLoading } = useSWR(`/api/items`, fetcher);

  if (!items || isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <StyledUnorderedList>
      {items.map((item) => (
        <ItemCard key={item._id} {...item} />
      ))}
      <Box />
    </StyledUnorderedList>
  );
}
