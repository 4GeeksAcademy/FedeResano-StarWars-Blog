import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const FilmCard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex">
            <div className="scrolling-container" >
                {store.films.map((element) => {
                    return (
                        <div className="card" key={element.url}>
                            <img src={`https://starwars-visualguide.com/assets/img/films/${element.uid}.jpg`} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title"> {element.title} </h5>
                                <p>Directed by: {element.director} </p>
                                <p>Produced by: {element.producer} </p>
                                <p>Release Date: {element.release_date} </p>
                            </div>

                            <div className="d-flex justify-content-center">
                                <Link to={`/films/${element.uid}`}> Learn more</Link>
                                <button className="btn btn-warning" onClick={() => actions.addFavorite(`/films/${element.uid}`, element.title)}>Add to favorites</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FilmCard;