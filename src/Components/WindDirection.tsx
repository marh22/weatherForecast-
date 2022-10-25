import React from "react";
import styled from "styled-components";

interface Props {
  wind_dir: string;
}

const WindDir = styled.div`
  color: #e7e7eb;
  border-radius: 100%;
  padding: 5px;
  background: hsla(0, 0%, 100%, 0.3);
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  transform: rotate(276deg);
  font-family: "Material Icons";
  font-size: 24px;
`;

const WindDirection: React.FC<Props> = ({ wind_dir }) => {
  return (
    <>
      <WindDir>navigation</WindDir>
      <span>{wind_dir}</span>
    </>
  );
};

export default WindDirection;
