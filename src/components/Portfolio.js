import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
function Portfolio(props){
	return (
		<div>
			<Navigation {...props} />
			<section className="container">
				<ul>
					<li>test1</li>
				</ul>
			</section>
			<Footer />
		</div>
		)
}

export default Portfolio