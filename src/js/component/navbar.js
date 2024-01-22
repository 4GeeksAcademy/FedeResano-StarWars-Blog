import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/characterlist">
					<button className="btn btn-primary">Characters</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/filmslist">
					<button className="btn btn-primary">Films</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/planetslist">
					<button className="btn btn-primary">Planets</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/specieslist">
					<button className="btn btn-primary">Species</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/vehicleslist">
					<button className="btn btn-primary">Vehicles</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/starshipslist">
					<button className="btn btn-primary">Starships</button>
				</Link>
			</div>
		</nav>
	);
};
