import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container">
			<nav className="navbar mb-2">
				<Link to="/">
					<button className="btn btn-warning">Home</button>
				</Link>
				<div className="ml-2">
					<Link to="/browse">
						<button className="btn btn-warning">Browse</button>
					</Link>
				</div>
				<div className="ml-2">
					<Link to="/characters">
						<button className="btn btn-warning">Characters</button>
					</Link>
				</div>
				<div className="ml-2">
					<Link to="/films">
						<button className="btn btn-warning">Films</button>
					</Link>
				</div>
				<div className="ml-2">
					<Link to="/planets">
						<button className="btn btn-warning">Planets</button>
					</Link>
				</div>
				<div className="ml-2">
					<Link to="/species">
						<button className="btn btn-warning">Species</button>
					</Link>
				</div>
				<div className="ml-2">
					<Link to="/vehicles">
						<button className="btn btn-warning">Vehicles</button>
					</Link>
				</div>
				<div className="ml-2">
					<Link to="/starships">
						<button className="btn btn-warning">Starships</button>
					</Link>
				</div>
				<div className="ml-2">
					<Link to="/favorites">
						<button className="btn btn-warning">Favorites</button>
					</Link>
				</div>
			</nav>
		</div>
	);
};
