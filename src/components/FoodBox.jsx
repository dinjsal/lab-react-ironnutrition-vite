import React from 'react'

// 3rd, add deleteItem as another prop here
function FoodBox({food, deleteItem}) {
  return (
    <div>
    <p>{food.name}</p>
  
    <img src={food.image} alt={food.name}/>
  
    <p>Calories: {food.calories}</p>
    <p>Servings: {food.servings}</p>
  
    <p>
      <b>Total Calories: {food.calories * food.servings} </b> kcal
    </p>

    {/* finally, define the anonymous function here */}
    <button onClick={() => {deleteItem(food.id)}}>Delete</button>
  </div>
  )
}

export default FoodBox