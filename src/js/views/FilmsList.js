import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const FilmsList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await actions.loadCharacterList();
                console.log("store.people:", store.people)
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="grid-container">
            {store.films.map((element) => (
                <div className="card" key={element.uid}>
                    <img src={`https://starwars-visualguide.com/assets/img/films/${element.uid}.jpg`} className="card-img-top" alt={element.properties.title} />
                    <div className="card-body">
                        <h5 className="card-title"> {element.properties.title} </h5>
                        <p>Directed by: {element.properties.director} </p>
                        <p>Produced by: {element.properties.producer} </p>
                        <p>Release Date: {element.properties.release_date} </p>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Link to={`/films/${element.uid}`}> Learn more</Link>
                        <button className="btn btn-warning" onClick={() => actions.addFavorite(`/films/${element.uid}`, element.properties.title)}>Add to favorites</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FilmsList;