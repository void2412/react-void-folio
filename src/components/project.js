import React from "react"
import "../css/project.css"

function Project(props){
	// image, title, link to deployed, link to github
	return(
		<div className="card col-md-12 col-lg-6 border-0">
			<img className="card-img-top" src={props.data.imagePath} alt="" ></img>
			<div className="card-body">
				<h5 className="card-title">{props.data.title}</h5>
				<div className>
					<a className="btn btn-primary me-2" href={props.data.deployedUrl} target="_blank" rel="noreferrer noopener">Deployed</a>
					<a className="btn btn-primary" href={props.data.githubUrl} target="_blank" rel="noreferrer noopener">Github</a>
				</div>
			</div>
		</div>
	)
}

export default Project