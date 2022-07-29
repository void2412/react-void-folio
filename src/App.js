import React, {useEffect, useState} from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
function App(){
	let [currentPage, setCurrentPage] = useState('About Me');


	useEffect(()=>{
		try{
			switch (currentPage){
				case "About Me": return <AboutMe currentPage={currentPage} setCurrentPage={setCurrentPage} />; break;
				case "Portfolio": return <Portfolio currentPage={currentPage} setCurrentPage={setCurrentPage} />; break;
				case "Contact": return <Contact currentPage={currentPage} setCurrentPage={setCurrentPage} />; break;
				case "Resume": return <Resume currentPage={currentPage} setCurrentPage={setCurrentPage} />; break;
				default: throw new Error("Unknown page"); break;
			}
		}
		catch(e){
			console.log(e)
		}
	})

	try {
		switch (currentPage){
			case "About Me": return <AboutMe currentPage={currentPage} setCurrentPage={setCurrentPage} />; break;
			case "Portfolio": return <Portfolio currentPage={currentPage} setCurrentPage={setCurrentPage} />; break;
			case "Contact": return <Contact currentPage={currentPage} setCurrentPage={setCurrentPage} />; break;
			case "Resume": return <Resume currentPage={currentPage} setCurrentPage={setCurrentPage} />; break;
			default: throw new Error("Unknown page"); break;
		}
	} catch (error) {
		console.log(error)
	}
}

export default App