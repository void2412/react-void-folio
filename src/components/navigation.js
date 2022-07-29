import React from "react";

function Navigation(props){

	function handleClick(e){
		let val = e.target.innerHTML;
		props.setCurrentPage(val)
	}
	return(
		<nav className= "navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<p className="navbar-brand">Chi Hieu Nguyen</p>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      				<span className="navbar-toggler-icon"></span>
    			</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item nav-link hover-cursor d-block" onClick={handleClick}>About Me</li>
						<li className="nav-item nav-link hover-cursor d-block" onClick={handleClick}>Portfolio</li>
						<li className="nav-item nav-link hover-cursor d-block" onClick={handleClick}>Contact</li>
						<li className="nav-item nav-link hover-cursor d-block" onClick={handleClick}>Resume</li>
					</ul>
				</div>
				
			</div>
		</nav>
	)
}

export default Navigation