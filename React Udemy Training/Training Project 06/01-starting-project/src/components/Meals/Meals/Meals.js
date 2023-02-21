import { Fragment } from "react";
import AvailableMeals from "../AvailableMeals/AvailableMeals";
import MealsSummary from "../MealsSummary/MealsSummary";
const Meal = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meal;
