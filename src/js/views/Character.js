import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Character = ({ character }) => {

    const links = (items, category) => {
        if (!items || items.length === 0) {
            return <p>No {category} available</p>
        }

        return (
            <div>
                <p>{category}:</p>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link to={item}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    <div className="d-flex">
        <img src={`https://starwars-visualguide.com/assets/img/people/${character.uid}.jpg`} alt={character.properties.name} />
        <h2>{character.properties.name}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Homeworld: {character.properties.homeworld}</p>
        <p>Species: {character.properties.species}</p>
        <p>Birth: {character.properties.birth_year}</p>
        <p>Gender: {character.properties.gender}</p>
        <p>Mass: {character.properties.mass}</p>
        <p>Height: {character.properties.height}</p>
        <p>Hair color: {character.properties.hair_color}</p>
        <p>Eye color: {character.properties.eye_color}</p>
        <p>Skin color: {character.properties.skin_color}</p>
        {links(character.properties.films, "Films")}
        {links(character.properties.vehicles, "Vehicles")}
        {links(character.properties.starships, "Starships")}

    </div>
}
