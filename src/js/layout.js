import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import Browse from "./views/Browse";
import CharacterList from "./views/CharacterList";
import Character from "./views/Character";
import FilmsList from "./views/FilmsList";
import Film from "./views/Film";
import PlanetsList from "./views/PlanetsList";
import Planet from "./views/Planet";
import SpeciesList from "./views/SpeciesList";
import Species from "./views/Species";
import VehiclesList from "./views/VehiclesList";
import Vehicle from "./views/Vehicle";
import StarshipsList from "./views/StarshipsList";
import Starship from "./views/Starship";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/browse/" element={<Browse />} />
						<Route path="/people/" element={<CharacterList />} />
						<Route path="/people/:id/" element={<Character />} />
						<Route path="/films/" element={<FilmsList />} />
						<Route path="/films/:id/" element={<Film />} />
						<Route path="/planets/" element={<PlanetsList />} />
						<Route path="/planets/:id/" element={<Planet />} />
						<Route path="/species/" element={<SpeciesList />} />
						<Route path="/species/:id/" element={<Species />} />
						<Route path="/vehicles/" element={<VehiclesList />} />
						<Route path="/vehicles/:id/" element={<Vehicle />} />
						<Route path="/starships/" element={<StarshipsList />} />
						<Route path="/starships/:id/" element={<Starship />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
