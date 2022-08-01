import React from "react";
import myResume from "../resume.pdf"
function Resume(){
	return (
			<div className="container">
				<h1>Resume</h1>
				<a className="btn btn-info" href={myResume} target="_blank" rel="noreferrer noopener">Download My Resume</a>
				<div>

				</div>
				<div></div>
			</div>
		)
}

export default Resume