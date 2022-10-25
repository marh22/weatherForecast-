import React, { useCallback } from "react";
import styled from "styled-components";

interface Props {
    setIsTempC: (isTempC: boolean) => void;
}

const TopBtns = styled.div`
  margin-top: 42px;
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

const TemperatureUnit: React.FC<Props> = ({ setIsTempC }) => {
  const [isC, setIsC] = React.useState<boolean>(true);
  const [isF, setIsF] = React.useState<boolean>(false);

  const handleOnClickC = useCallback(() => {
    setIsC(true);
    setIsF(false);
    setIsTempC(false);
  }, []);

  const handleOnClickF = useCallback(() => {
    setIsC(false);
    setIsF(true);
    setIsTempC(true);
  }, []);

  return (
    <>
      <TopBtns>
        <Btn
          style={{ backgroundColor: isF ? "#FFF" : "#585676" }}
          onClick={handleOnClickF}
        >
          °F
        </Btn>
        <Btn
          style={{ backgroundColor: isC ? "#FFF" : "#585676" }}
          onClick={handleOnClickC}
        >
          °C
        </Btn>
      </TopBtns>
    </>
  );
};

export default TemperatureUnit;
