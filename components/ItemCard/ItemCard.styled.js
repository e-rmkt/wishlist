import styled from "styled-components";
import Image from "next/image";

export const StyledListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex: 5;
  width: 13rem;
  min-width: 9rem;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid grey;
`;

export const StyledImage = styled(Image)`
  border-radius: 10px;
  object-fit: cover;
`;

export const ImageContainer = styled.div`
  height: 16rem;
  position: relative;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  flex-wrap: wrap;
`;
