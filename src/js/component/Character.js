import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Character = () => {
    const { store, actions } = useContext(Context);

    let { uid } = useParams();

    return (
        <div className="d-flex">
            {store.characters.map((element, index) => {
                return (
                    <div className="container" key={element.uid}>
                        <div className="card">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${element.uid}.jpg`} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title"> {element.name} </h5>
                                <p>Gender: {element.uid} </p>
                                <p>Hair color: {element.hair_color} </p>
                                <p>Eye-color: {element.eye_color} </p>
                                <p className="card-text"> {element.description} </p>
                            </div>

                            <div className="d-flex justify-content-center">
                                <Link to={`/character/${element.uid}`}> Learn more</Link>
                                <button className="btn btn-warning" onClick={() => actions.addFavorite(`/character/${element.uid}`, element.name)}>Add to favorites</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Character;