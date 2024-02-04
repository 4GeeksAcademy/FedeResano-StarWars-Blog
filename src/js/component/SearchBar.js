import React, { useState, useContext } from 'react';
import { Context } from "../store/appContext";

const SearchBar = () => {

    const { store } = useContext(Context);
    const [searchInput, setSearchInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const characterNames = store.characters;
    const filmNames = store.films;
    const planetsNames = store.planets;
    const speciesNames = store.species;
    const vehiclesNames = store.vehicles;
    const starshipNames = store.starships;

    const allNames = [
        ...(characterNames || []),
        ...(filmNames || []),
        ...(planetsNames || []),
        ...(speciesNames || []),
        ...(vehiclesNames || []),
        ...(starshipNames || [])
    ];


    const inputChange = (e) => {
        const input = e.target.value;
        setSearchInput(input)

        const filteredSuggestions = allNames.filter((item) => item && item.results.name && item.results.name.toLowerCase().includes(input.toLowerCase() || item && item.result.properties.title && item.result.properties.title.toLowerCase().includes(input.toLowerCase())));
        setSuggestions(filteredSuggestions);

    };

    const selectSuggestions = (selectedItem) => {
        setSearchInput(selectedItem.name || selectedItem.title);
        setSuggestions([]);
    }

    return (
        <div>
            <input
                type="text"
                className="bg-dark"
                placeholder="Search here"
                onChange={inputChange}
                value={searchInput}
            />

            {suggestions.length > 0 && (
                <ul className="autocomplete-dropdown">
                    {suggestions.map((item) => (
                        <li key={item.url} onClick={() => selectSuggestions(item)}>
                            {item.name || item.title}
                        </li>
                    ))}
                </ul>
            )}

            <table className="bg-dark">
                <tbody>
                    {allNames.map((item) => (
                        <tr key={item.url}>
                            <td>{item.name || item.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchBar;