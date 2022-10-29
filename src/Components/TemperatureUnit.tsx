import React, { useCallback } from "react";
import styled from "styled-components";
import { Unit } from "../Components/TemperatureUnitSelector";

interface Props {
  value: Unit;
  selected: boolean;
  onClick(unit: Unit): void;
}

const TempUnitBtn = styled.div<Props>`
  border-radius: 100%;
  padding: 15px;
  font-weight: 700;
  font-size: 14px;
  margin-right: 15px;
  color: #110e3c;
  text-align: center;
  background-color: ${(props) => (props.selected ? `#FFF` : `#585676`)};
  cursor: pointer;
`;

export const TemperatureUnit: React.FC<Props> = ({
  value,
  onClick,
  selected,
}) => {
  const handleOnClick = useCallback(() => {
    onClick(value);
  }, [value, onClick]);

  return (
    <TempUnitBtn selected={selected} onClick={handleOnClick} value={value}>
      <span>{value}</span>
    </TempUnitBtn>
  );
};
