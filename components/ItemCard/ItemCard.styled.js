import styled from "styled-components";
import Image from "next/image";

export const StyledListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid grey;
`;

export const StyledImage = styled(Image)`
  border-radius: 10px;
`;
