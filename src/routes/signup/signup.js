import React from 'react';
import SignUpFrom from '../../component/signupForm/signupFrom';
import signUpImg from '../../assets/PinClipart.com_scotland-clip-art_1590304.png'
import './signup.css';
export const SignUp = (props) => {
	return (
		<div className="signUpPageContainer">
			<h1> Sign Up </h1>
			<div className="signupFormAndInfoContainer">            
				<SignUpFrom />
                <img src={signUpImg} alt="sign up"/>
			</div>
		</div>
	);
};

export default SignUp;
