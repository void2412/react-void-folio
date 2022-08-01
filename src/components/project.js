import React from "react"


function Project(props){
	// image, title, link to deployed, link to github
	return(
		<div className="card col-md-12 col-lg-6 border-0">
			<img className="card-img-top" src={props.data.imagePath} alt=""></img>
			<div className="card-body text-center">
				<h5 className="card-title">{props.data.title}</h5>
				<div className="btn-group">
					<a className="btn btn-primary" href={props.data.deployedUrl}>Deployed</a>
					<a className="btn btn-primary" href={props.data.githubUrl}>Github</a>
				</div>
			</div>
		</div>
	)
}

export default Project