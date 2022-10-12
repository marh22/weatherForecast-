import styled from 'styled-components';

interface Props {
    setIsSearchOpen: (isOpen: boolean) => void;
}

const SearchBar: React.FunctionComponent<Props> = ({setIsSearchOpen}) => {

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

    const SearchBtn = styled.button`
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

    return (
        <SearchMenu>
            <CloseBtn onClick={() => setIsSearchOpen(false)}> x </CloseBtn>
            <SearchForm>
              <SearchInput placeholder="search for places" />
              <SearchBtn>search</SearchBtn>
            </SearchForm>
        </SearchMenu>
    )
}

export default SearchBar;