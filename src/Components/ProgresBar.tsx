import styled from "styled-components";

interface Props {
  humidity: number;
}

export const ProgresBar = styled.div<Props>`
  height: 8px;
  border-radius: 50px;
  height: 8px;
  width: ${(props) => props.humidity}%;
  background-color: #ffec65;
  border-radius: 50px;
`;
