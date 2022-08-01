import React from "react";


function Contact(){

	function validateInput(input) {
		if(String(input).trim() =='' || typeof input == 'undefined'){
			return false
		}
		return true
	}

	function emailValidation(input){
		return String(input).toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/)
	}
	
	function handleSubmit(e) {
		e.preventDefault();
		let nameInput = document.querySelector('#nameInput')
		let emailInput = document.querySelector('#emailInput')
		let messageInput = document.querySelector('#messageInput')
		let errorMsg = document.querySelector('#errorMsg')
		let inputList = [nameInput, emailInput, messageInput]
		for (const item of inputList){
			if(String(item.value).trim()==''){
				errorMsg.innerHTML = `${item.getAttribute('data-type')} must be filled in!`
				return false
			}
			if(item.type == 'email'){
				if(!emailValidation(String(item.value))){
					errorMsg.innerHTML = "Please enter a valid email address!"
					return false
				}
			}
		}
		// remove notification if data is entered correctly
		errorMsg.innerHTML=''
		// TODO:add method to send email to personal email below

	}
	const styles ={
		textarea:{
			minHeight: "200px"
		}
	}
	
	return (
		<section className="container">
			<h1>Contact Me</h1>
			<form>
				<div className="mb-2">
					<label htmlFor="nameInput" className="form-label">Name:</label>
					<input type="text" className='form-control' id='nameInput' data-type="Name"/>
				</div>
				<div className="mb-2">
					<label htmlFor="emailInput" className="form-label">Email Address:</label>
					<input type="email" className='form-control emailValidation' id='emailInput' data-type="Email"/>
				</div>
				<div className="mb-2">
					<label htmlFor="messageInput" className="form-label">Message:</label>
					<textarea id="messageInput" className='form-control' style={styles.textarea} data-type="Message"></textarea>
				</div>
				<button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
				<br />
				<label id="errorMsg"></label>
			</form>

		</section>
	)
}

export default Contact