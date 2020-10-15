import React, { Component } from 'react';
import $ from 'jquery';
import './navBar.css'
export default class navBar extends Component {
	state = {};
	navBarAnimation = () => {
		$('.landingPageNavBarMobile ul').toggle('slow');
		if ($('.landingPageNavBarMobile i').first().text() === 'close') {
			$('.landingPageNavBarMobile').css('color', 'black');
			$('.navBarItemContainer').css('background-color', 'transparent');
			$('.landingPageNavBarMobile i').first().html('menu');
		} else {
			$('.landingPageNavBarMobile').css('color', 'white');
			$('.navBarItemContainer').css('background-color', '#16161790');
			$('.landingPageNavBarMobile i').first().html('close');
		}
	};
	render() {
    let color = "black";
      if(this.props.color){
          color=this.props.color
      }
   
		return (
			<div>
				<nav className="landingPageNavBar" style={{color:`${color}`}}>
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
						<i className="material-icons" onClick={() => this.navBarAnimation()}>
							menu
						</i>
						<ul>
							<li>Logo</li>
							<li>Home</li>
							<li>Calender</li>
							<li>Challenges</li>
						</ul>
					</div>

					<button>Login</button>
				</nav>
			</div>
		);
	}
}
