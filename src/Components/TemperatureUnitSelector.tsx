import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { TemperatureUnit } from "./TemperatureUnit";

export type Unit = "C" | "F";

interface Props {}

const UnitBtns = styled.div`
  margin-top: 20px;
  margin-right: 100px;
  display: flex;
  flex-direction: row-reverse;
`;

export const TemperatureUnitSelector: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [unit, setUnit] = React.useState<Unit>("C");

  const handleTemperatureClick = useCallback((unit: Unit) => {
    setUnit(unit);
    const action = {
      type: "CURRENT_UNIT",
      payload: unit,
    };
    dispatch(action);
  }, []);

  return (
    <UnitBtns>
      <TemperatureUnit
        value={"F"}
        selected={unit === "F"}
        onClick={handleTemperatureClick}
      />
      <TemperatureUnit
        value={"C"}
        selected={unit === "C"}
        onClick={handleTemperatureClick}
      />
    </UnitBtns>
  );
};
