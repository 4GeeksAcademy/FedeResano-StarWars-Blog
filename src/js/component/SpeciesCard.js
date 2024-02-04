import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const SpeciesCard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex">
            <div className="scrolling-container" >
                {store.species.map((element) => {
                    return (
                        <div className="card" key={element.url}>
                            <img src={`https://starwars-visualguide.com/assets/img/species/${element.uid}.jpg`} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title"> {element.name} </h5>
                                <p>Homeworld: {element.homeworld}</p>
                                <p>Language: {element.language}</p>
                                <p>Classification: {element.classification}</p>
                            </div>

                            <Link to={`/species/${element.uid}`}> Learn more</Link>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-warning" onClick={() => actions.addFavorite(`/species/${element.uid}`, element.name)}>Add to favorites</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SpeciesCard;