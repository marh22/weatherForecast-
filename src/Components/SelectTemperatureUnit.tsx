import React from "react";
import styled from "styled-components";

interface Props {
  value: string;
  selected: boolean;
  handleOnClickTempUnit: any;
}

const Btn = styled.div`
  border-radius: 100%;
  padding: 15px;
  font-weight: 700;
  font-size: 14px;
  margin-right: 15px;
  color: #110e3c;
  text-align: center;
  background: #585676;
  cursor: pointer;
`;

export const SelectTemperatureUnit: React.FC<Props> = ({
  value,
  selected,
  handleOnClickTempUnit,
}) => {
  return (
    <Btn
      onClick={handleOnClickTempUnit}
      style={{ backgroundColor: selected ? "#FFF" : "#585676" }}
    >
      <span>{value}</span>
    </Btn>
  );
};
