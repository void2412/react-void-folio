import React from 'react'
import github from '../images/icon/github.png'
import linkedin from '../images/icon/linkedin.png'
import leetcode from '../images/icon/leetcode.png'
function Footer(){
	return(
	<div className='container'>
		<hr />
		<div className='text-center'>
			<a href='https://github.com/void2412' target="_blank" rel="noreferrer noopener"><img src={github}></img></a>
			<a href='https://www.linkedin.com/in/chi-hieu-nguyen-3b255a222/' className='mx-3' target="_blank" rel="noreferrer noopener"><img src={linkedin}></img></a>
			<a href='https://leetcode.com/void2412/' target="_blank" rel="noreferrer noopener"><img src={leetcode}></img></a>
		</div>
	</div>)
}

export default Footer