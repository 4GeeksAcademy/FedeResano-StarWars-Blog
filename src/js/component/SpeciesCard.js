import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const SpeciesCard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex">
            {store.species.map((element) => {
                return (
                    <div className="container" >
                        <div className="card" key={element.uid}>
                            <img src={`https://starwars-visualguide.com/assets/img/species/${element.uid}.jpg`} className="card-img-top" />
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
                    </div>
                );
            })}
        </div>
    );
}

export default SpeciesCard;