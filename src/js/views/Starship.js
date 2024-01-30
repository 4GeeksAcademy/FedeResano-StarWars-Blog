import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Starship = ({ starship }) => {

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
        <img src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`} alt={starship.properties.name} />
        <h2>{starship.properties.name}</h2>
        <p>Model: {starship.properties.model}</p>
        <p>Manufacturer: {starship.properties.manufacturer}</p>
        <p>Number of crewmembers: {starship.properties.crew}</p>
        <p>Cargo capacity: {starship.properties.cargo_capacity}</p>
        <p>Number of passangers: {starship.properties.passangers}</p>
        <p>Cost (in credits): {starship.properties.cost_in_credits}</p>
        <p>Lenght: {starship.properties.length}</p>
        <p>Hyperdrive rating: {starship.properties.hyperdrive_rating}</p>
        <p>Max atmosphering speed: {starship.properties.max_atmosphering_speed}</p>
        <p>Consumables: {starship.properties.consumables}</p>
        {links(species.properties.films, "Films")}

    </div>

}
