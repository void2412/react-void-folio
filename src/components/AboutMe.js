import React from "react";
import avatar from '../images/avatar.jpg'

const styles ={
	img: {
		width: '120px',
		height: '120px',
	}
}

function AboutMe(){
	return(
			<section className="container">
				<div id="avatar">
                    <a href="./index.html" title="Chi Hieu Nguyen">
                        <img src={avatar} alt="Chi Hieu Nguyen avatar" style={styles.img} />
                    </a>
                </div>
				<p>My name is Chi Hieu Nguyen. I'm currently live in Adelaide. My favourites is playing video games and programming. In fact, video games lead me to programming since I was trying to hack in-game currency when I was a kid.</p>
                <p>I started learning programming since I was in year 8. Then I meet OOP and got stuck there because of the concept. After a while, I get used to it and cannot live without it. Later on, I got exposed to machine learning and algorithms, and I love them, especially algorithms about graphs.</p>
                <p>My skills include: </p>
                <ul>
                    <li>Python</li>
                    <li>OOP</li>
                    <li>Data Structure</li>
                    <li>Graph algorithms</li>
                    <li>MongoDB</li>
                </ul>
			</section>
	)
}

export default AboutMe