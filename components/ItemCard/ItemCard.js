import {
  StyledListItem,
  StyledImage,
  ImageContainer,
  Wrapper,
} from "./ItemCard.styled";
import Link from "next/link";

export default function ItemCard({ name, price, img }) {
  console.log(price);
  return (
    <>
      <StyledListItem>
        <Link href={"fakeurl"}>
          <ImageContainer>
            <StyledImage src={img} alt={"dummy pic"} fill={true} />
          </ImageContainer>
          <Wrapper>
            <h2>{name}</h2>
          </Wrapper>
          <h3>{price}</h3>
        </Link>
      </StyledListItem>
    </>
  );
}
