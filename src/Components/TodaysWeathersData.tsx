import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { useSelector } from "react-redux";

interface Props {
  text: string;
  date: string;
  locName: string;
  icon: string;
  temp: number;
}

const TodaysWeather = styled.div`
  background: linear-gradient(
      rgba(30, 33, 58, 0.95) 100%,
      rgba(30, 33, 58, 0.95) 0
    ),
    url(/img/Cloud-background.343e2b41.png);
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: 150%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a09fb1;
  img {
    width: 190px;
    margin-top: 10px;
  }
  span {
    font-size: 22px;
    margin: 40px 0;
  }
`;

const Weather = styled.div`
  color: #e7e7eb;
  font-size: 65px;
  margin-top: 10px;
  span{
    font-size: 55px;
  }
`;

const CurrentLoc = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-top: 40px;
  color: #88869d;
`;

export const TodaysWeathersData: React.FC<Props> = ({
  text,
  date,
  locName,
  icon,
  temp,
}) => {
  const unitTemp = useSelector<any>((state) => state.unit);

  return (
    <TodaysWeather>
      <img src={icon} />
      <Weather>
        {temp}
        <span>{unitTemp === "C" ? "°C" : "°F"}</span>
      </Weather>
      <span>{text}</span>
      <div>
        <span>Today • </span>
        {date}
      </div>
      <CurrentLoc>
        <GoLocation /> {locName}
      </CurrentLoc>
    </TodaysWeather>
  );
};
