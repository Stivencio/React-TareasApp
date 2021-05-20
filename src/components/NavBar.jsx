import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="_blank">
				Navbar w/ text
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="_blank">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="_blank">
							Features
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="_blank">
							Pricing
						</a>
					</li>
				</ul>
				<span className="navbar-text">Navbar text with an inline element</span>
			</div>
		</nav>
	);
};

export default NavBar;
