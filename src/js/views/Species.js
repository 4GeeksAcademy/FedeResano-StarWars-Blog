import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Species = ({ species }) => {

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
        <img src={`https://starwars-visualguide.com/assets/img/species/${species.uid}.jpg`} alt={species.properties.name} />
        <h2>{species.properties.name}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Homeworld: {species.properties.homeworld}</p>
        <p>Classification: {species.properties.classification}</p>
        <p>Designation: {species.properties.designation}</p>
        <p>Language: {species.properties.language}</p>
        <p>Avergage lifespan: {species.properties.average_lifespan}</p>
        <p>Average height: {species.properties.average_height}</p>
        <p>Skin colors: {species.properties.skin_colors}</p>
        <p>Eye colors: {species.properties.eye_colors}</p>
        <p>Hair colors: {species.properties.hair_colors}</p>
        {links(species.properties.people, "Notable characters")}
        {links(species.properties.films, "Films")}

    </div>
}
