import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './component/nav/navBar';
import SignUp from './routes/signup/signup';
import LandingPage from './routes/landingPage/landingPage';
class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<Route exact path="/" component={(props) => <LandingPage {...props} />} />
				<Route path="/signup" component={(props) => <SignUp {...props}/>} />
			</div>
		);
	}
}

export default App;
