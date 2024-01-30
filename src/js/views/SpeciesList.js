import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const SpeciesList = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="grid-container">
            {store.species.map((element) => (
                <div className="card" key={element.uid}>
                    <img src={`https://starwars-visualguide.com/assets/img/species/${element.uid}.jpg`} className="card-img-top" alt={element.properties.name} />
                    <div className="card-body">
                        <h5 className="card-title"> {element.properties.name} </h5>
                        <p>Homeworld: {element.properties.homeworld}</p>
                        <p>Language: {element.properties.language}</p>
                        <p>Classification: {element.properties.classification}</p>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Link to={`/species/${element.uid}`}> Learn more</Link>
                        <button className="btn btn-warning" onClick={() => actions.addFavorite(`/species/${element.uid}`, element.properties.name)}>Add to favorites</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
