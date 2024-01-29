import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<button className="btn btn-primary">Home</button>
			</Link>
			<div className="ml-auto">
				<Link to="/browse">
					<button className="btn btn-primary">Browse</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/characters">
					<button className="btn btn-primary">Characters</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/films">
					<button className="btn btn-primary">Films</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/planets">
					<button className="btn btn-primary">Planets</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/species">
					<button className="btn btn-primary">Species</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/vehicles">
					<button className="btn btn-primary">Vehicles</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/starships">
					<button className="btn btn-primary">Starships</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/favorites">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
