import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const CharacterCard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex">
            <div className="scrolling-container" >
                {store.people.map((element) => {
                    return (
                        <div className="card" key={element.url}>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${element.uid}.jpg`} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title"> {element.name} </h5>
                                <p>Gender: {element.gender} </p>
                                <p>Hair color: {element.hair_color} </p>
                                <p>Eye-color: {element.eye_color} </p>
                            </div>

                            <div className="d-flex justify-content-center">
                                <Link to={`/people/${element.uid}`}> Learn more</Link>
                                <button className="btn btn-warning" onClick={() => actions.addFavorite(`/people/${element.uid}`, element.name)}>Add to favorites</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CharacterCard;