import React, {useEffect, useState} from "react";
import Navigation from "./components/Navigation";	

function App(){
	let [currentPage, setCurrentPage] = useState('')
	// function getData(state){
	// 	switch (state){
	// 		case "About Me": return <AboutMe setPage={setCurrentPage} />; break;
	// 		case "Portfolio": return <Portfolio setPage={setCurrentPage} />; break;
	// 		case "Contact": return <Contact setPage={setCurrentPage} />; break;
	// 		case "Resume": return <Resume setPage={setCurrentPage} />; break;
	// 		default: throw new Error("Unknown page")
	// 	}
	// }
	setCurrentPage('About Me')

	useEffect(()=>{
		try{
			console.log(currentPage)
		}
		catch(e){
			console.log(e)
		}
	}, [currentPage])

	// try {
	// 	return getData(currentPage)
	// } catch (error) {
	// 	console.log(error)
	// }

	return <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
}

export default App