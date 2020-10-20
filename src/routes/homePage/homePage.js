import React, { Component } from 'react';
import Nav from '../../component/nav/navBar';
import MealForm from '../../component/mealsForm/mealsForm';
import $ from 'jquery';
import Meal from '../../component/meals/meals';
import { ProgressBar } from 'react-bootstrap';

import './homePage.css';
export default class homePage extends Component {
	state = {
		showMealsForm: false,
		nutritionInputShow: false,
		Meals: [],
		MealsByType: {
			Breakfast: [],
			Lunch: [],
			Dinner: []
		}
	};

	activeMealsFormModula = () => {
		
		if (!this.state.showMealsForm)
			$('.calorieCouterPage div:not(#mealsForm)').css({ filter: 'brightness(0.5) grayscale(3) blur(2px)' });
		else $('.calorieCouterPage div:not(#mealsForm)').css({ filter: 'none' });
		this.setState({ showMealsForm: !this.state.showMealsForm });
	};
	showMoreInputForNutrition = () => {
		this.setState({ nutritionInputShow: !this.state.nutritionInputShow });
	};

	getMealInfo = (ev) => {
		ev.preventDefault();
		const { MealName, MealType } = ev.target;
		const MealInfo = {
			MealName: MealName.value,
			MealType: MealType.value
		};

		const currentMeals = this.state.Meals;
		currentMeals.push(MealInfo);
		this.setState({ Meals: currentMeals });

		this.activeMealsFormModula();
		this.sortMealsByType();
	};

	deleteMeal = (mealName, mealType) => {
		let mealByType={
			Breakfast: [],
			Lunch: [],
			Dinner: []
		};
		if(mealType === 'breakfast')
		mealByType.Breakfast = this.state.MealsByType.Breakfast.filter((meal) => mealName !== meal.MealName);
		else if(mealType === 'lunch')
		mealByType.Lunch =  this.state.MealsByType.Lunch.filter((meal) => mealName !== meal.MealName);
		else
		mealByType.Dinner = this.state.MealsByType.Lunch.filter((meal) => mealName !== meal.MealName);

		console.log(mealByType);

		this.setState({MealsByType:mealByType })
		
		
	};

	sortMealsByType = () => {
		const MealType = {
			Breakfast: [],
			Lunch: [],
			Dinner: []
		};

		this.state.Meals.map((meal) => {
			if (meal.MealType === 'breakfast') MealType.Breakfast.push(meal);
			else if (meal.MealType === 'lunch') MealType.Lunch.push(meal);
			else MealType.Dinner.push(meal);
		});

		this.setState({ MealsByType: MealType });
	};

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
							<div className="nutritionInfoContainer">
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
				</div>

				<div className="mealInfoContainer">
				<i className="material-icons" onClick={() => this.activeMealsFormModula()}>
								playlist_add
							</i>
							<br/>
					<div className="breakFastInfo mealInfo">
						<div className="mealHeader">
							<h3>BREAKFAST </h3>
							<div>
								<h4>Change Meal </h4>
								<h4>Delete Meal</h4>
							</div>
						</div>
						<div className="meals">
							

							{this.state.MealsByType.Breakfast.length ? (
								this.state.MealsByType.Breakfast.map((meal) => (
									<Meal mealInfo={meal} deleteMeal={this.deleteMeal} />
								))
							) : (
								<div />
							)}
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
							{this.state.MealsByType.Lunch.length ? (
								this.state.MealsByType.Lunch.map((meal) => (
									<Meal mealInfo={meal} deleteMeal={this.deleteMeal} />
								))
							) : (
								<div />
							)}
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
							
							{this.state.MealsByType.Dinner.length ? (
								this.state.MealsByType.Dinner.map((meal) => (
									<Meal mealInfo={meal} deleteMeal={this.deleteMeal} />
								))
							) : (
								<div />
							)}
						</div>
					</div>
				</div>

				{this.state.showMealsForm ? (
					<MealForm
						activeMealsFormModula={this.activeMealsFormModula}
						showMoreInputForNutrition={this.showMoreInputForNutrition}
						nutritionInputShow={this.state.nutritionInputShow}
						getMealInfo={this.getMealInfo}
					/>
				) : (
					<div />
				)}
			</div>
		);
	}
}
