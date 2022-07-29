import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Contact(props){
	return (
	<div>
		<Navigation {...props} />
		<section className="container">
			<ul>
				<li>test</li>
			</ul>
		</section>
		<Footer />
	</div>
	)
}

export default Contact