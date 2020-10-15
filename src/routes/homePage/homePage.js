import React, { Component } from 'react';
import Nav from '../../component/nav/navBar';
import { ProgressBar } from 'react-bootstrap';

import './homePage.css';
export default class homePage extends Component {
	state = {};

	render() {
		const now = 60;
		return (
			<div className="calorieCouterPage">
				<Nav color={'white'} />
				<div className="calorieCounterHeader">
					<h1>Calorie Counter </h1>

					<h2> Hello Person x </h2>
				</div>

				<div className="calenderSection">
					<i class="fa fa-calendar" aria-hidden="true" /> <h2>{new Date().toDateString()} </h2>
				</div>

				<br />

				<div className="calorieCounterInfoContainer">
					<div className="blockOneContainer">
						<div className="blockOne">
							<h2> Calories Consumed </h2>
							<h2> 1000 Cal </h2>
						</div>
                        <ProgressBar now={now} variant="info" label={`${now}%`} />
                        <h5> Recommended Daily consumption : 2000 cal </h5>
					</div>
					<div className="blockTwoContainer">
						<div className="blockTwo">
							<h3> Nutrition Summary </h3>
							<div className="nutritionInfo">
								Calories
								<span> 100 /200 </span>
							</div>
							<ProgressBar now={now} variant="info" label={`${now}%`} />
							<div className="nutritionInfo">
								Protein
								<span> 100 /200 </span>
							</div>
							<ProgressBar now={now} variant="info" label={`${now}%`} />
							<div className="nutritionInfo">
								Fat
								<span> 100 / 200 </span>
							</div>
							<ProgressBar now={now} variant="info" label={`${now}%`} />

							<div className="nutritionInfo">
								Carbs
								<span> 100 / 200</span>
							</div>
							<ProgressBar now={now} variant="info" label={`${now}%`} />
							<div className="nutritionInfo">
								Fiber
								<span> 100 / 200 </span>
							</div>
							<ProgressBar now={now} variant="info" label={`${now}%`} />
						</div>
					</div>
				</div>

				<div className="mealInfoContainer">
					<div className="breakFastInfo mealInfo">
						<div className="mealHeader">
							<h3>BREAKFAST </h3>
							<div>
								<h4>Change Meal </h4>
								<h4>Delete Meal</h4>
							</div>
						</div>
						<div className="meals">
							<h4>
								Pancakes <span> Delete</span>
							</h4>
							<hr />
							<h4>
								Coffee <span> Delete</span>
							</h4>
						</div>
					</div>
					<div className="lunchInfo mealInfo">
						<div className="mealHeader">
							<h3>LUNCH</h3>
							<div>
								<h4>Change Meal </h4>
								<h4>Delete Meal</h4>
							</div>
						</div>

						<div className="meals">
							<h4>
								Pancakes <span> Delete</span>
							</h4>
							<hr />
							<h4>
								Coffee <span> Delete</span>
							</h4>
						</div>
					</div>
					<div className="dinnerInfo mealInfo">
						<div className="mealHeader">
							<h3>DINNER </h3>
							<div>
								<h4>Change Meal </h4>
								<h4>Delete Meal</h4>
							</div>
						</div>

						<div className="meals">
							<h4>
								Pancakes <span> Delete</span>
							</h4>
							<hr />
							<h4>
								Coffee <span> Delete</span>
							</h4>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
