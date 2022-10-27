import React, { useCallback } from "react";
import styled from "styled-components";
import { SelectTemperatureUnit } from "./SelectTemperatureUnit";

interface Props {
  setIsTempC: (isTempC: boolean) => void;
  isTempC: boolean;
}

const TopBtns = styled.div`
  margin-top: 20px;
  margin-right: 100px;
  display: flex;
  flex-direction: row-reverse;
`;

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

export const TemperatureUnit: React.FC<Props> = ({ setIsTempC, isTempC }) => {
  const [unit, setUnit] = React.useState<"C" | "F">("C");
  const [selected, setSelected] = React.useState(false);

  const handleOnClickUnitC = useCallback(() => {
    setUnit("C");
    setIsTempC(true);
    setSelected(!selected);
  }, []);

  const handleOnClickUnitF = useCallback(() => {
    setUnit("F");
    setIsTempC(false);
    setSelected(!selected);
  }, []);

  return (
    <TopBtns>
      <SelectTemperatureUnit
        value={"F"}
        selected={unit === "F"}
        handleOnClickTempUnit={handleOnClickUnitF}
      />
      <SelectTemperatureUnit
        value={"C"}
        selected={unit === "C"}
        handleOnClickTempUnit={handleOnClickUnitC}
      />
    </TopBtns>
  );
};
