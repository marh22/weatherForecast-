import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  data: number;
  unit: string;
  customElement?: React.ReactNode;
}

const HightlightsCard = styled.div`
  min-width: 390px;
  background: #1e213a;
  text-align: center;
  margin: 10px 0;
  padding-bottom: 10px;
  h3 {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: #e7e7eb;
  }
  strong {
    font-weight: 700;
    font-size: 45px;
    color: #e7e7eb;
    margin-bottom: 15px;
  }
`;

const Data = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    padding-left: 4px;
    font-size: 17px;
    color: #e7e7eb;
  }
`;

export const HightlightsList: React.FC<Props> = ({
  title,
  data,
  unit,
  customElement,
}) => {
  return (
    <HightlightsCard>
      <h3>{title}</h3>
      <Data>
        <strong>{data}</strong>
        <span>{unit}</span>
      </Data>
      <div>{customElement}</div>
    </HightlightsCard>
  );
};
