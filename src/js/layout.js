import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
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
						<Route path="/characterslist" element={<CharacterList />} />
						<Route path="/character/:theid" element={<Character />} />
						<Route path="/filmslist" element={<FilmsList />} />
						<Route path="/film/:theid" element={<Film />} />
						<Route path="/planetslist" element={<PlanetsList />} />
						<Route path="/planet/:theid" element={<Planet />} />
						<Route path="/specieslist" element={<SpeciesList />} />
						<Route path="/species/:theid" element={<Species />} />
						<Route path="/vehicleslist" element={<VehiclesList />} />
						<Route path="/vehicles/:theid" element={<Vehicle />} />
						<Route path="/starshipslist" element={<StarshipsList />} />
						<Route path="/starships/:theid" element={<Starship />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
