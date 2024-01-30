import React from "react";
import "../../styles/home.css";

export const Browse = () => {

    return (
        <div>
            <div>
                <h3>Characters</h3>
                <CharacterCard />
            </div>
            <div>
                <h3>Films</h3>
                <FilmCard />
            </div>
            <div>
                <h3>Planets</h3>
                <PlanetCard />
            </div>
            <div>
                <h3>Species</h3>
                <SpeciesCard />
            </div>
            <div>
                <h3>Vehicles</h3>
                <VehicleCard />
            </div>
            <div>
                <h3>Starships</h3>
                <StarshipCard />
            </div>
        </div>
    )
}
