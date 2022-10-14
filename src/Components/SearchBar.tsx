import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { getWeather } from '../Api';

interface Props {
    setIsSearchOpen: (isOpen: boolean) => void;
}

const SearchMenu = styled.div`
width: 30%;
height: 100vh;
background: #1e213a;
position: absolute;
top: 0;
left: 0;
`;

const CloseBtn = styled.div`
margin-top: 20px;
margin-right: 53px;
color: white;
font-size: 24px;
cursor: pointer;
text-align: right;
`;

const SearchForm = styled.div`
width: 90%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
align-content: space-between;
margin: auto;
position: relative;
`;

const SearchInput = styled.input`
width: 60%;
margin: 45px -2px;
height: 48px;
background: transparent;
border: 1px solid #e7e7eb;
color: #fff;
padding-left: 50px;
font-family: Raleway,sans-serif;
font-weight: 500;
font-size: 16px;
`;

const SearchBtn = styled.div`
font-family: Raleway,sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #e7e7eb;
padding: 18px 20px;
background: #3c47e9;
margin-left: 10px;
cursor: pointer;
border: none;
`;

const CitiesList = styled.div`
display: flex;
justify-content: space-between;
font-family: Raleway,sans-serif;
font-style: normal;
font-weight: 500;
font-size: 18px;
padding: 30px;
color: #e7e7eb;

`;

const Remove = styled.div`
cursor: pointer;
`;

const cities: string[] = [];

const SearchBar: React.FunctionComponent<Props> = ({ setIsSearchOpen }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [citiesList, setCitiesList] = useState<string[]>([]);
    const dispatch = useDispatch();

    const handleOnClick = async () => {
        const weatherData = await getWeather(inputValue);
        const action = {
            type: 'SET_WEATHER',
            payload: weatherData,
        }
        dispatch(action);
        cities.push(inputValue);
        setCitiesList([...cities]);
        setInputValue('');
    }

    const handleOnChange = (searchtext: string) => {
        setInputValue(searchtext);
    }

    const deleteItemFromCitiesList = (index: number) => {
        const newCitiesList = [...citiesList];
        if (index > -1)
            newCitiesList.splice(index, 1);
          setCitiesList(newCitiesList);
    }

    return (
        <SearchMenu>
            <CloseBtn onClick={() => setIsSearchOpen(false)}> x </CloseBtn>
            <SearchForm>
                <SearchInput 
                    placeholder="search for places" 
                    onChange={(event) => handleOnChange(event?.target.value)} 
                    value={inputValue}
                />
                <SearchBtn onClick={handleOnClick}>search</SearchBtn>
            </SearchForm>
            {citiesList != null && citiesList.length !== 0 && citiesList.map((item, index) =>
                <CitiesList key={index}>
                    <div>{item}</div>
                    <Remove><FaTrash onClick={() => deleteItemFromCitiesList(index)}></FaTrash></Remove>
                </CitiesList>
            )}
        </SearchMenu>
    )
}

export default SearchBar;