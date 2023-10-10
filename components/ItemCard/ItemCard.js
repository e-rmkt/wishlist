import {
  StyledListItem,
  StyledImage,
  ImageContainer,
  Wrapper,
} from "./ItemCard.styled";
import Link from "next/link";

export default function ItemCard() {
  return (
    <>
      <StyledListItem>
        <Link href={"x"}>
          <ImageContainer>
            <StyledImage
              //   src={"https://picsum.photos/200/180?blur"}

              src={
                "https://assets.glamour.de/photos/65144854252b3738b202a7d7/2:3/w_3140,h_4710,c_limit/270923-Rhode-Launch-Aufmacher.jpg"
              }
              alt={"dummy pic"}
              fill={true}
            />
          </ImageContainer>
          <Wrapper>
            <h2>Rhode Peptide Lip Treatment</h2>
            <h3>$16.00</h3>
          </Wrapper>
        </Link>
      </StyledListItem>
      <StyledListItem>
        <Link href={"x"}>
          <ImageContainer>
            <StyledImage
              //   src={"https://picsum.photos/200/180?blur"}
              src={
                "https://assets.glamour.de/photos/64d0a92871a3b48568564844/16:9/w_2240,c_limit/STRAWBERRY%20GIRL%20SUMMER%20030823%20haileybieber_L.jpg"
              }
              alt={"dummy pic"}
              fill={true}
            />
          </ImageContainer>
          <Wrapper>
            <h2>Prada Re-Edition 2005 Mini Bag aus Re-Nylon</h2>
            <h3>1344 €</h3>
          </Wrapper>
          <p>1NE204_R064_F0002</p>
        </Link>
      </StyledListItem>
      <StyledListItem>
        <Link href={"x"}>
          <ImageContainer>
            <StyledImage
              //   src={"https://picsum.photos/200/180?blur"}
              src={
                "https://assets.glamour.de/photos/64d0a92871a3b48568564844/16:9/w_2240,c_limit/STRAWBERRY%20GIRL%20SUMMER%20030823%20haileybieber_L.jpg"
              }
              alt={"dummy pic"}
              fill={true}
            />
          </ImageContainer>
          <Wrapper>
            <h2>Prada Mini Bag </h2>
            <h3>1344 €</h3>
          </Wrapper>
          <p>1NE204_R064_F0002</p>
        </Link>
      </StyledListItem>
      <StyledListItem>
        <Link href={"x"}>
          <ImageContainer>
            <StyledImage
              //   src={"https://picsum.photos/200/180?blur"}
              src={
                "https://assets.glamour.de/photos/64d0a92871a3b48568564844/16:9/w_2240,c_limit/STRAWBERRY%20GIRL%20SUMMER%20030823%20haileybieber_L.jpg"
              }
              alt={"dummy pic"}
              fill={true}
            />
          </ImageContainer>
          <Wrapper>
            <h2>Prada Mini Bag </h2>
            <h3>1344 €</h3>
          </Wrapper>
          <p>1NE204_R064_F0002</p>
        </Link>
      </StyledListItem>
    </>
  );
}
