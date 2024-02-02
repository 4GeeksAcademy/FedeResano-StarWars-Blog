import React from "react";
import "../../styles/home.css";
import SearchBar from "../component/SearchBar";

const Home = () => (
	<div className="container text-align-center">
		<h1>Star Wars Blog</h1>
		<h4>Search by name:</h4>
		<SearchBar />
	</div>
);

export default Home;