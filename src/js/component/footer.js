import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export const Footer = () => (
	<footer className="footer fixed-bottom text-center text-warning bg-dark">
		<p>
			Made by Fede:
			<a href="https://github.com/fede1525" style={{ marginLeft: "8px" }}>
				<FontAwesomeIcon icon={faGithub} size="lg" />
			</a>
		</p>
	</footer>
);
