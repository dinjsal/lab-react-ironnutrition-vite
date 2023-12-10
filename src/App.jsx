import "./App.css";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import foodsJson from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  // 1st, declare the function deleteItem here
  const deleteItem = (id) => {
    setFoods([...foods].filter((food) => {
      return food.id !== id;
    }))
  }

  const addNewItem = (item) => {
    setFoods([item, ...foods]);
  }

  return (
    <div>
      <h2>IronNutrition</h2>
      <AddFoodForm addNewItem={addNewItem}/>
      {foods.map(foodItem => {
        // 2nd, declare deleteItem here + pass deleteItem as a prop + copy that to Foodbox component
        return <FoodBox key={foodItem._id} food={foodItem} deleteItem={deleteItem} />;
      })}      
    </div>
  );
}

export default App;
