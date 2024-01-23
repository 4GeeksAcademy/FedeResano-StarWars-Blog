import React from "react";
import "../../styles/home.css";
import Character from "../component/CharactersList";
import SearchBar from "../component/SearchBar";

export const Home = () => (
	<div className="container">
		<h1>Star Wars Blog</h1>
		<h4>Search by name:</h4>
		<SearchBar />
	</div>
);
