import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const PlanetCard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex">
            {store.planets.map((element) => {
                return (
                    <div className="container" >
                        <div className="card" key={element.uid}>
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${element.uid}.jpg`} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title"> {element.properties.name} </h5>
                                <p>Climate: {element.properties.climate} </p>
                                <p>Terrain: {element.properties.terrain} </p>
                                <p>Population: {element.properties.population} </p>
                                <p className="card-text"> {element.properties.description} </p>
                            </div>

                            <div className="d-flex justify-content-center">
                                <Link to={`/planets/${element.uid}`}> Learn more</Link>
                                <button className="btn btn-warning" onClick={() => actions.addFavorite(`/planets/${element.uid}`, element.properties.name)}>Add to favorites</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default PlanetCard;