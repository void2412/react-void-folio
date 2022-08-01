import React from "react";
import Project from "./Project"
import passwordGen from "../images/passwordGen.gif"
function Portfolio(){
	const projects = [
		{
			key:"1",
			imagePath: passwordGen,
			githubUrl: "",
			deployedUrl: "",
			title:"Password Generator"
		},
		{
			key:"2",
			imagePath: "",
			githubUrl: "",
			deployedUrl: "",
			title:""
		},
		{
			key:"3",
			imagePath: "",
			githubUrl: "",
			deployedUrl: "",
			title:""
		},
		{
			key:"4",
			imagePath: "",
			githubUrl: "",
			deployedUrl: "",
			title:""
		},
		{
			key:"5",
			imagePath: "",
			githubUrl: "",
			deployedUrl: "",
			title:""
		},
		{
			key:"6",
			imagePath: "",
			githubUrl: "",
			deployedUrl: "",
			title:""
		}
	]
	return (
				<div className="row g-5">
					<h1>My Project</h1>
					{projects.map((project) => (
						<Project key={project.key} data={project}/>
					))}
				</div>
		)
}

export default Portfolio