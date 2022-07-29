import React, {useEffect, useState} from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
function App(){
	let [currentPage, setCurrentPage] = useState('About Me');

	function getData(state){
		switch (state){
			case "About Me": return <AboutMe />; break;
			case "Portfolio": return <Portfolio />; break;
			case "Contact": return <Contact />; break;
			case "Resume": return <Resume />; break;
			default: throw new Error("Unknown page"); break;
		}
	}

	function getTemplate(state){
		return (
		<div>
			<Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
			<section className="container">
				{getData(state)}
			</section>
			<Footer />
		</div>
		)
	}
	useEffect(()=>{
		try{
			return getTemplate(currentPage)
		}
		catch(e){
			console.log(e)
		}
	})

	try {
		return getTemplate(currentPage)
	} catch (error) {
		console.log(error)
	}
}

export default App