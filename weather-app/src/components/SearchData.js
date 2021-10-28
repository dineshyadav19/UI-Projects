import styled from "styled-components";

const SearchImage = styled.img`
    width: 150px;
    height: 150px;
    margin: 2% auto;
`

const SearchLabel = styled.h2`
    color: black;
    font-weight: bold;
    font-size: 1.5em; 
` 

const SearchForm = styled.form`
    display: flex;
    flex-direction: row;

    & input {
        font-size: 1.4em;
        margin-right: 5px;
        padding: 0.75em 1.5em;
        color: black;
        border: 2px solid black;
        border-radius: 4px;
    }

    & input::placeholder {
        font-size: 1em;
    }

    & button {
        color: white;
        font-size: 1.5em;
        border: none;
        outline: none;
        padding: 0 14px;
        border: 2px solid black;
        background-color: #005A9C;
        border-radius: 4px;
    }
`

const SearchData = (props) => {
    const {setCity,  fetchWeatherInfo} = props;
    return (<>
        <SearchImage src="/icons/perfect-day.svg"></SearchImage>
        <SearchLabel>Search Here.....</SearchLabel>
        <SearchForm onSubmit={fetchWeatherInfo}>
            <input type={'text'} placeholder="Enter your city" onChange={(e) => setCity(e.target.value)}/>
            <button type="submit">Search</button>
        </SearchForm>
    </>)
}

export default SearchData;