import React from "react";
import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard"
import FilmCard from "../component/FilmCard"
import PlanetCard from "../component/PlanetCard"
import SpeciesCard from "../component/SpeciesCard"
import VehicleCard from "../component/VehicleCard"
import StarshipCard from "../component/StarshipCard"


const Browse = () => {

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

export default Browse;