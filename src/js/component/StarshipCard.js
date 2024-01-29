import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const StarshipCard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex">
            <div className="scrolling-container">
                {store.starships.map((element) => {
                    return (
                        <div className="card" key={element.uid}>
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${element.uid}.jpg`} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{element.properties.name}</h5>
                                <p>Manufacturer: {element.properties.manufacturer}</p>
                                <p>Model: {element.properties.model}</p>
                                <p>Class: {element.properties.starship_class}</p>
                            </div>

                            <div className="d-flex justify-content-center">
                                <Link to={`/vehicles/${element.uid}`}> Learn more</Link>
                                <button className="btn btn-warning" onClick={() => actions.addFavorite(`/starships/${element.uid}`, element.properties.name)}>Add to favorites</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default StarshipCard;