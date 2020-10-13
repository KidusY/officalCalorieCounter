import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import './signupForm.css';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '25ch'
		}
	}
}));

export default function FormPropsTextFields() {
	const classes = useStyles();

	const [ state, setState ] = React.useState({
		Gender: '',
		name: 'hai'
	});

	const handleChange = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value
		});
	};
	return (
		<form className={classes.root} id="signUpForm" noValidate autoComplete="off">
			<div>
				<TextField required id="outlined-required" label="Full Name" variant="outlined" helperText="Error" />
				<TextField required id="outlined-required" label="Email" variant="outlined" helperText="Error" />
				<TextField
					required
					id="outlined-required"
					id="outlined-password-input"
					label="Password"
					type="password"
					autoComplete="current-password"
					variant="outlined"
					helperText="Error"
				/>

				<TextField
					required
					id="outlined-required"
					id="outlined-number"
					label="Age"
					type="number"
					InputLabelProps={{
						shrink: true
					}}
					variant="outlined"
				/>
				<TextField
					required
					id="outlined-required"
					id="outlined-number"
					label="Weight"
					type="number"
					InputLabelProps={{
						shrink: true
					}}
					variant="outlined"
				/>

				<TextField
					id="outlined-helperText"
					label="Helper text"
					defaultValue="Default Value"
					helperText="Some important text"
					variant="outlined"
				/>

				<FormControl variant="outlined" className={classes.formControl} id="selectGender">
                <div className="selectContainer">

					<InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
					<Select
						native
						value={state.Gender}
						onChange={handleChange}
						label="Gender"
						inputProps={{
							name: 'Gender',
							id: 'outlined-age-native-simple'
						}}
					>
						<option value="Neither">Neither</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</Select>
                </div>
				</FormControl>
			</div>
            <button className="signupbtn">Sign Up <i className="material-icons">arrow_forward</i></button>
		</form>
	);
}
