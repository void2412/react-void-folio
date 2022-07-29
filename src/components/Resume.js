import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
function Resume(props){
	return (
		<div>
			<Navigation {...props} />
			<section className="container">
				<ul>
					<li>test4</li>
				</ul>
			</section>
			<Footer />
		</div>
		)
}

export default Resume