import React, { useState, useContext } from 'react';
import { Context } from "../store/appContext";

const SearchBar = () => {

    const { store } = useContext(Context);
    const [searchInput, setSearchInput] = useState("");

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
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const filteredNames = allNames.filter((item) => item && item.name && item.name.includes(searchInput));

    return (
        <div>
            <input
                type="text"
                className="bg-dark"
                placeholder="Search here"
                onChange={inputChange}
                value={searchInput} />

            <table className="bg-dark">
                <thead>
                    <tr>
                        <th>Character</th>
                        <th>Film</th>
                        <th>Planet</th>
                        <th>Species</th>
                        <th>Vehicles</th>
                        <th>Starships</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredNames.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );

}

export default SearchBar;