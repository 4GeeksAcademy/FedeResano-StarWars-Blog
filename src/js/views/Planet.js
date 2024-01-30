import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Planet = ({ planet }) => {

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
        <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} alt={planet.properties.name} />
        <h2>{planet.properties.name}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Climate: {planet.properties.climate}</p>
        <p>Terrain: {planet.properties.terrain}</p>
        <p>Population: {planet.properties.population}</p>
        <p>Orbital period: {planet.properties.orbital_period}</p>
        <p>Rotational period: {planet.properties.rotational_period}</p>
        <p>Gravity: {planet.properties.gravity}</p>
        <p>Surface water: {planet.properties.surface_water}</p>
        {links(planet.properties.residents, "Residents")}

    </div>

}
