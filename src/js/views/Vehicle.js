import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Vehicle = ({ vehicle }) => {

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
        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} alt={vehicle.properties.name} />
        <h2>{vehicle.properties.name}</h2>
        <p>Model: {vehicle.properties.model}</p>
        <p>Manufacturer: {vehicle.properties.manufacturer}</p>
        <p>Number of crewmembers: {vehicle.properties.crew}</p>
        <p>Cargo capacity: {vehicle.properties.cargo_capacity}</p>
        <p>Number of passangers: {vehicle.properties.passangeres}</p>
        <p>Cost (in credits): {vehicle.properties.cost_in_credits}</p>
        <p>Lenght: {vehicle.properties.length}</p>
        <p>Max atmosphering speed: {vehicle.properties.max_atmosphering_speed}</p>
        <p>Consumables: {vehicle.properties.consumables}</p>
        {links(vehicle.properties.films, "Films")}

    </div>
}
