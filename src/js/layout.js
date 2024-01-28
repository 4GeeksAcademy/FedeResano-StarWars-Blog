import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
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
						<Route path="/browse" element={<Browse />} />
						<Route path="/people" element={<CharacterList />} />
						<Route path="/people/:theid" element={<Character />} />
						<Route path="/films" element={<FilmsList />} />
						<Route path="/films/:theid" element={<Film />} />
						<Route path="/planets" element={<PlanetsList />} />
						<Route path="/planets/:theid" element={<Planet />} />
						<Route path="/species" element={<SpeciesList />} />
						<Route path="/species/:theid" element={<Species />} />
						<Route path="/vehicles" element={<VehiclesList />} />
						<Route path="/vehicles/:theid" element={<Vehicle />} />
						<Route path="/starships" element={<StarshipsList />} />
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
