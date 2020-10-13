import React from 'react';
import {Link} from 'react-router-dom'
import headingPic from '../../assets/Group 3@2x.png';
import $ from 'jquery';
import './landingPage.css';
export const LandingPage = (props) => {
    const navBarAnimation = ()=>{
        const navBarItems = document.querySelector('.landingPageNavBarMobile ul')
        $('.landingPageNavBarMobile ul').toggle("slow");
        if($('.landingPageNavBarMobile i').first().text() === "close"){
            $('.landingPageNavBarMobile').css("color","black")
            $('.navBarItemContainer').css("background-color","transparent")
            $('.landingPageNavBarMobile i').first().html("menu");
        }
       
        else{
            $('.landingPageNavBarMobile').css("color","white")
            $('.navBarItemContainer').css("background-color","#16161790")
        $('.landingPageNavBarMobile i').first().html("close")
    }
    }
	return (
		<div>
			<nav className="landingPageNavBar">
				<ul>
					<li>Logo</li>
					<li>Home</li>
					<li>Calender</li>
					<li>Challenges</li>
				</ul>

				<button>Login</button>
			</nav>
			<nav className="landingPageNavBarMobile">

           <div className="navBarItemContainer">
           <i className="material-icons" onClick={()=>navBarAnimation()}>menu</i>
				<ul>
					<li>Logo</li>
					<li>Home</li>
					<li>Calender</li>
					<li>Challenges</li>
				</ul>
           </div>

				<button>Login</button>
			</nav>

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
