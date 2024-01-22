import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Character from "../component/Character";

export const Home = () => (
	<div className="container">
		<div className="text-left mt-5">
			<h2>Characers</h2>
		</div>
		<div className={"scroll"} style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto' }}>
			<Character />
		</div>

		<div>
			<h2>Planets</h2>
		</div>

		<div className={"scroll"} style={{display: 'flex', flexDirection: 'row', overflowX: 'auto'}}>
			<Planet />
		</div>
	</div>
);
