import React from "react";
import myResume from "../resume.pdf"
function Resume(){
	return (
			<div className="container">
				<h1>Resume</h1>
				<a className="btn btn-info mb-3" href={myResume} target="_blank" rel="noreferrer noopener">Download My Resume</a>
				<div>
					<h3>Front-end</h3>
					<ul>
						<li>React</li>
						<li>Boostrap</li>
						<li>HTML/CSS/Javascript</li>
						<li>JQuery</li>
					</ul>
				</div>
				<div>
					<h3>Back-end</h3>
					<ul>
						<li>MySQL</li>
						<li>MERN Stack</li>
						<li>Handlebars</li>
						<li>Nodejs</li>
						<li>API</li>
					</ul>
				</div>
			</div>
		)
}

export default Resume