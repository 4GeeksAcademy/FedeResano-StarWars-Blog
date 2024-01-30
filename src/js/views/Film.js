import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Film = ({ film }) => {

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
        <img src={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`} alt={film.properties.name}></img>
        <h2>{film.properties.title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Directed by: {film.properties.director}</p>
        <p>Produced by: {film.properties.producer}</p>
        <p>Release date: {film.properties.release_date}</p>
        {links(film.properties.characters, "Characters")}
        <p>Opening crawl: {film.properties.opening_crawl}</p>
    </div>

}
