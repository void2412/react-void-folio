import React, {useEffect, useState} from "react";


function App(){
	let [currentPage, setCurrentPage] = useState('')
	function getData(state){
		switch (state){
			case "About Me": return <AboutMe setPage={setCurrentPage} />; break;
			case "Portfolio": return <Portfolio setPage={setCurrentPage} />; break;
			case "Contact": return <Contact setPage={setCurrentPage} />; break;
			case "Resume": return <Resume setPage={setCurrentPage} />; break;
			default: throw new Error("Unknown page")
		}
	}
	setCurrentPage('About Me')
	// handle state change
	useEffect(()=>{
		try{
			return getData(currentPage)
		}
		catch(e){
			console.log(e)
		}
	})

	try {
		return getData(currentPage)
	} catch (error) {
		console.log(error)
	}
}

export default App