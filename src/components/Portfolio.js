import React from "react";
import Project from "./Project"
import passwordGen from "../images/passwordGen.gif"
import myButcher from "../images/myButcher.jpg"
import noteTaker from "../images/noteTaker.png"
import taskPlanner from "../images/TaskPlanner.png"
import techBlog from "../images/techBlog.gif"
import textEditor from "../images/Text Editor.png"
function Portfolio(){
	const projects = [
		{
			key:"1",
			imagePath: passwordGen,
			githubUrl: "https://github.com/void2412/passwordGenerator",
			deployedUrl: "https://void2412.github.io/passwordGenerator/",
			title:"Password Generator"
		},
		{
			key:"2",
			imagePath: myButcher,
			githubUrl: "https://github.com/void2412/MyButcher",
			deployedUrl: "https://ordering-system-team4.herokuapp.com/",
			title:"My Butcher"
		},
		{
			key:"3",
			imagePath: noteTaker,
			githubUrl: "https://github.com/void2412/noteTaker",
			deployedUrl: "https://note-taker-2412.herokuapp.com/",
			title:"Note Taker"
		},
		{
			key:"4",
			imagePath: taskPlanner,
			githubUrl: "https://github.com/void2412/Task-planner",
			deployedUrl: "https://void2412.github.io/Task-planner/",
			title:"Task Planner"
		},
		{
			key:"5",
			imagePath: techBlog,
			githubUrl: "https://github.com/void2412/techBlog",
			deployedUrl: "https://tech-blog-2412.herokuapp.com/",
			title:"Tech Blog"
		},
		{
			key:"6",
			imagePath: textEditor,
			githubUrl: "https://github.com/void2412/Text-Editor",
			deployedUrl: "https://jate-void.herokuapp.com/",
			title:"Text Editor"
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