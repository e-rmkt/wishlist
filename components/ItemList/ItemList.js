import ItemCard from "../ItemCard/ItemCard";
import { StyledUnorderedList } from "./ItemList.styled";

export default function ItemList() {
  return (
    <StyledUnorderedList>
      <ItemCard />
    </StyledUnorderedList>
  );
}
