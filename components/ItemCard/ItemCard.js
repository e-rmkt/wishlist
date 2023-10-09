import { StyledListItem, StyledImage } from "./ItemCard.styled";
import Link from "next/link";

export default function ItemCard() {
  return (
    <StyledListItem>
      <Link href={"x"}>
        <StyledImage
          src={"https://picsum.photos/200/180?blur"}
          alt={"dummy pic"}
          width={200}
          height={180}
        />
        <h2>Item Title</h2>
        <h3>Item Price</h3>
        <p>Item Article Number</p>
      </Link>
    </StyledListItem>
  );
}
