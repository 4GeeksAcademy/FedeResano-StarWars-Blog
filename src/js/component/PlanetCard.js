import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const PlanetCard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex">
            <div className="scrolling-container" >
                {store.planets.map((element) => {
                    return (
                        <div className="card" key={element.url}>
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${element.uid}.jpg`} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title"> {element.name} </h5>
                                <p>Climate: {element.climate} </p>
                                <p>Terrain: {element.terrain} </p>
                                <p>Population: {element.population} </p>
                            </div>

                            <div className="d-flex justify-content-center">
                                <Link to={`/planets/${element.uid}`}> Learn more</Link>
                                <button className="btn btn-warning" onClick={() => actions.addFavorite(`/planets/${element.uid}`, element.name)}>Add to favorites</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PlanetCard;