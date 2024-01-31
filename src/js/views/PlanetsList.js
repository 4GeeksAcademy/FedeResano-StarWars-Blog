import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const PlanetsList = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="grid-container">
            {store.planets.map((element) => (
                <div className="card" key={element.uid}>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${element.uid}.jpg`} className="card-img-top" alt={element.properties.name} />
                    <div className="card-body">
                        <h5 className="card-title"> {element.properties.name} </h5>
                        <p>Climate: {element.properties.climate} </p>
                        <p>Terrain: {element.properties.terrain} </p>
                        <p>Population: {element.properties.population} </p>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Link to={`/planets/${element.uid}`}> Learn more</Link>
                        <button className="btn btn-warning" onClick={() => actions.addFavorite(`/planets/${element.uid}`, element.properties.name)}>Add to favorites</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PlanetsList;