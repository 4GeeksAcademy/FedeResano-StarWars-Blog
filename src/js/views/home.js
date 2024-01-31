import React from "react";
import "../../styles/home.css";
import SearchBar from "../component/SearchBar";

const Home = () => (
	<div className="container text-align-center bg-dark">
		<h1 className="text-warning">Star Wars Blog</h1>
		<h4 className="text-warning">Search by name:</h4>
		<SearchBar />
	</div>
);

export default Home;