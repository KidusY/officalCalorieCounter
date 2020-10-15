import React from 'react';
import {Link} from 'react-router-dom'
import headingPic from '../../assets/Group 3@2x.png';
import Nav from '../../component/nav/navBar'
import './landingPage.css';
export const LandingPage = (props) => {
   
	return (
		<div>
			
		<Nav/>
			<div className="heading">
				<div className="headingText">
					<h1>Lose weight <br/> while having fun <br/> with your friends </h1>
					<h2>Do you need help losing that extra weight or just have fun</h2>

					<Link to="/signup"><button>Sign Up</button></Link>
				</div>

				<img src={headingPic} alt="working_out" />
			</div>
		</div>
	);
};

export default LandingPage;
