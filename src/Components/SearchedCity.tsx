import React, { useCallback } from "react";
import styled from "styled-components";

interface Props {
  locationName: string;
  getCitiesData: (locationName: string) => void;
}

const CityName = styled.div`
  font-size: 18px;
  color: #e7e7eb;
  padding: 20px;
  &:hover {
    border: 1px solid #e7e7eb;
    width: 80%;
    cursor: pointer;
  }
`;

export const SearchedCity: React.FC<Props> = ({
  locationName,
  getCitiesData,
}) => {
  const onClick = useCallback(() => {
    getCitiesData(locationName);
  }, [locationName]);

  return <CityName onClick={onClick}>{locationName}</CityName>;
};
