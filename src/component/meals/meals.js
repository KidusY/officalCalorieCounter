import React from 'react';

export const Meal = (props) => (
	<div>
		<h4>
			{props.mealInfo.MealName}
			<span>
				<i className="material-icons" onClick={() => props.deleteMeal(props.mealInfo.MealName,props.mealInfo.MealType)}>
					delete
				</i>
			</span>
		</h4>
		<hr />
	</div>
);

export default Meal;
