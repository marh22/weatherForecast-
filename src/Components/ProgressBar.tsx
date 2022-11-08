import styled from "styled-components";

interface Props {
  value: number;
}

export const ProgressBar = styled.div<Props>`
  height: 8px;
  border-radius: 50px;
  width: ${(props) => props.value}%;
  background-color: #ffec65;
  border-radius: 50px;
`;
