import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const VehicleCard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex">
            {store.vehicles.map((element) => {
                return (
                    <div className="container">
                        <div className="card" key={element.uid}>
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${element.uid}.jpg`} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{element.properties.name}</h5>
                                <p>Manufacturer: {element.properties.manufacturer}</p>
                                <p>Model: {element.properties.model}</p>
                                <p>Crew: {element.properties.crew}</p>
                            </div>

                            <div className="d-flex justify-content-center">
                                <Link to={`/vehicles/${element.uid}`}> Learn more</Link>
                                <button className="btn btn-warning" onClick={() => actions.addFavorite(`/vehicles/${element.uid}`, element.properties.name)}>Add to favorites</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );


}

export default VehicleCard;