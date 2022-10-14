import React from "react";
import { ForecastEachDay } from "../Types/weather";
import styled from 'styled-components';
import { useSelector } from 'react-redux';

interface Props {
    todaysForecast?: ForecastEachDay;
    setIsTempC: (isTempC: boolean) => void;
    isTempC: boolean;
}

const Container = styled.div`
position: absolute;
width: 70%;
right: 0;
top: 0;
background: #100e1d;
min-height: 100vh;
color: white;
`;

const TopBtns = styled.div`
margin-top: 22px;
text-align: right;
margin-left: 87%;
display: flex;
`;

const Btn = styled.div`
border-radius: 100%;
padding: 15px;
font-family: Raleway,sans-serif;
font-style: normal;
font-weight: 700;
font-size: 14px;
margin-right: 38px;
color: #110e3c;
text-align: center;
background: #585676;
cursor: pointer;
`;

const HightlightsTitle = styled.div`
font-family: Raleway,sans-serif;
font-style: normal;
font-weight: 600;
font-size: 21px;
color: #e7e7eb;
margin: 25px 670px 0px 0px;
`;

const HightlightsDetails = styled.div`
width: 80%;
text-align: left;
margin: 25px auto;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`;

const HightlightsCard = styled.div`
min-width: 350px;
background: #1e213a;
text-align: center;
margin: 15px 0;
`;

const StatusTitel = styled.h3`
font-weight: 500;
font-size: 16px;
text-align: center;
padding-top: 20px;
font-family: Raleway,sans-serif;
color: #e7e7eb;
`;

const Data = styled.div`
font-weight: 700;
font-size: 45px;
font-family: Raleway,sans-serif;
color: #e7e7eb;
`;

const Description = styled.span`
font-size: 25px;
font-weight: 400;
font-family: Raleway,sans-serif;
color: #e7e7eb;
`;

const ProgresBar = styled.div`
width: 80%;
height: 7px;
background: #fff;
border-radius: 50px;
overflow: hidden;
margin: auto;
margin-bottom: 20px;
`;

const BarFill = styled.div`
height: 8px;
background: #ffec65;
width: 81%;
`;

const DaysContent = styled.div`
width: 80%;
margin: 30px auto;
min-height: 177px;
justify-content: space-between;
display: grid;
grid-template-columns: repeat(auto-fit,150px);
gap: 12px;
`;

const Minicard = styled.div`
min-width: 140px;
min-height: 170px;
background: #1e213a;
text-align: center;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-content: center;
justify-content: space-between;
align-items: center;
`;

const Date = styled.div`
font-family: Raleway,sans-serif;
font-weight: 500;
font-size: 16px;
text-align: center;
color: #e7e7eb;
padding-top: 18px;
`;

const Temp = styled.div`
padding: 7px;
font-size: 14px;
`;

const Content: React.FunctionComponent<Props> = ({setIsTempC, isTempC}) => {

    const [weatherData, setWeatherData] = React.useState<any>(null);
    const weatherDataList = useSelector<any>(state => state.weatherData);

    React.useEffect(() => {
        if(weatherDataList != null) {
            setWeatherData(weatherDataList);
        }
    }, [weatherDataList])

    const todaysHightlights = weatherData?.forecast.forecastday[0].hour[0];
    const NewForecastDay = weatherData?.forecast.forecastday.slice(1, 6);

    return (
        <Container>
            <TopBtns>
                <Btn onClick={() => setIsTempC(false)}>°C</Btn>
                <Btn onClick={() => setIsTempC(true)}>°F</Btn>
            </TopBtns>
            <DaysContent>
                {weatherData != null && NewForecastDay.map((item: ForecastEachDay, index:number) =>
                    <Minicard>
                        <div key={index}>
                            <Date>{item.date} </Date>
                            <img src={item.day.condition.icon} />
                            {isTempC ? <Temp> {item.day.maxtemp_f}<span>°</span>{item.day.mintemp_f}<span>°</span></Temp>:
                            <Temp>{item.day.maxtemp_c}<span>°</span>{item.day.mintemp_c}<span>°</span></Temp> }
                            <div>{item.day.condition.text}</div> 
                        </div>
                    </Minicard>
                )}
            </DaysContent>

            <HightlightsTitle>Today's Hightlights </HightlightsTitle>
            <HightlightsDetails>
                <HightlightsCard>
                    <StatusTitel> Wind status </StatusTitel>
                    <Data>{todaysHightlights?.wind_mph}<Description>mph</Description></Data>
                </HightlightsCard>

                <HightlightsCard>
                    <StatusTitel>Humidity</StatusTitel>
                    <Data>{todaysHightlights?.humidity}<Description>%</Description>
                    <ProgresBar>
                    <BarFill></BarFill>
                    </ProgresBar>
                    </Data>
                </HightlightsCard>

                <HightlightsCard>
                    <StatusTitel>Visibility</StatusTitel> 
                    <Data>{todaysHightlights?.vis_miles}<Description>miles</Description>
                    </Data>
                </HightlightsCard>

                <HightlightsCard>
                    <StatusTitel>Air Pressure </StatusTitel>
                    <Data>{todaysHightlights?.pressure_mb}<Description>hPa</Description>
                    </Data>
                </HightlightsCard>
            </HightlightsDetails>
        </Container>
        )
}

export default Content;