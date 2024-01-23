import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CharacterCard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex">
            {store.characters.map((element) => {
                return (
                    <div className="container" >
                        <div className="card" key={element.uid}>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${element.uid}.jpg`} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title"> {element.properties.name} </h5>
                                <p>Gender: {element.properties.gender} </p>
                                <p>Hair color: {element.properties.hair_color} </p>
                                <p>Eye-color: {element.properties.eye_color} </p>
                                <p className="card-text"> {element.properties.description} </p>
                            </div>

                            <div className="d-flex justify-content-center">
                                <Link to={`/characters/${element.uid}`}> Learn more</Link>
                                <button className="btn btn-warning" onClick={() => actions.addFavorite(`/characters/${element.uid}`, element.properties.name)}>Add to favorites</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CharacterCard;