import React from "react";

function Navigation(props){

	function handleClick(e){
		let val = e.target.innerHTML;
		props.setCurrentPage(val)
	}
	function handleHighlight(title){
		if(title === props.currentPage){
			return true
		}
		return false
	}
	return(
		<nav className= "navbar navbar-expand-lg bg-light mb-3">
			<div className="container-fluid">
				<a href="/" className="navbar-brand">Chi Hieu Nguyen</a>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      				<span className="navbar-toggler-icon"></span>
    			</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="navbar-nav ms-auto btn-group">
						{handleHighlight("About Me") ? 
						(<button className="nav-item nav-link hover-cursor btn btn-success" onClick={handleClick}>About Me</button>
						) : 
						(<button className="nav-item nav-link hover-cursor btn" onClick={handleClick}>About Me</button>)}

						{handleHighlight("Portfolio") ? 
						(<button className="nav-item nav-link hover-cursor btn btn-success" onClick={handleClick}>Portfolio</button>
						) : 
						(<button className="nav-item nav-link hover-cursor btn" onClick={handleClick}>Portfolio</button>)}
						
						{handleHighlight("Contact") ? 
						(<button className="nav-item nav-link hover-cursor btn btn-success" onClick={handleClick}>Contact</button>
						) : 
						(<button className="nav-item nav-link hover-cursor btn" onClick={handleClick}>Contact</button>)}

						{handleHighlight("Resume") ? 
						(<button className="nav-item nav-link hover-cursor btn btn-success" onClick={handleClick}>Resume</button>
						) : 
						(<button className="nav-item nav-link hover-cursor btn" onClick={handleClick}>Resume</button>)}
					</div>
				</div>
				
			</div>
		</nav>
	)
}

export default Navigation