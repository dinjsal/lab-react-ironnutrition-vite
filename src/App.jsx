import "./App.css";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import foodsJson from "./foods.json";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
} } 
/>
    </div>
  );
}

export default App;
