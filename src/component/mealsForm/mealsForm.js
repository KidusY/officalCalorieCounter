import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import './mealsForm.css';
const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: 200
		}
	}
}));

export default function TextFieldSizes(props) {
	const classes = useStyles();

	return (
		<form className={classes.root} Validate autoComplete="off" id="mealsForm" onSubmit={props.getMealInfo}>
			<i className="material-icons" onClick={() => props.activeMealsFormModula()}>
				close
			</i>
			<div>
				<TextField label="What Did You Eat" id="outlined-size-small" variant="outlined" size="small" name="MealName" />
			</div>
			{props.nutritionInputShow ? (
				<div>
					<TextField
						label="Size"
						id="outlined-size-small"
						defaultValue="Small"
						variant="outlined"
						size="small"
					/>
					<TextField label="Size" id="outlined-size-normal" defaultValue="Normal" variant="outlined" />
				</div>
			) : (
				<div />
			)}
			<div>
				<TextField select label="Meal Type" helperText="Please select your Meal" variant="outlined" name="MealType">
					<option value="breakfast">Breakfast</option>
					<option value="lunch">Lunch</option>
					<option value="dinner">Dinner</option>
				</TextField>
				<label htmlFor="checkBoxForNutrition">Manually Enter Nutrition</label>
				<input id="checkBoxForNutrition" type="checkbox" onChange={() => props.showMoreInputForNutrition()} />
				<button type="submit">Add</button>
			</div>
		</form>
	);
}
