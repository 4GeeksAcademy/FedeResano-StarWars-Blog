import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const StarshipCard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex">
            <div className="scrolling-container">
                {store.starships.map((element) => {
                    return (
                        <div className="card" key={element.url}>
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${element.uid}.jpg`} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{element.name}</h5>
                                <p>Manufacturer: {element.manufacturer}</p>
                                <p>Model: {element.model}</p>
                                <p>Class: {element.starship_class}</p>
                            </div>

                            <div className="d-flex justify-content-center">
                                <Link to={`/vehicles/${element.uid}`}> Learn more</Link>
                                <button className="btn btn-warning" onClick={() => actions.addFavorite(`/starships/${element.uid}`, element.name)}>Add to favorites</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default StarshipCard;