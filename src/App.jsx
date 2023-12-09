import "./App.css";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import foodsJson from "./foods.json";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  return (
    <div>
      <h2>IronNutrition</h2>
      {foods.map(foodItem => {
        return <FoodBox key={foodItem._id} food={foodItem} />;
      })}
    </div>
  );
}

export default App;
