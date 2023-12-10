import React from 'react'
import { useState } from 'react'

function AddFoodForm({addNewItem}) {

    const [name, setName] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name: name,
            calories: calories,
            servings: servings,
        };
        addNewItem(newItem);
        
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label htmlFor="calories">Calories
        <input type="number" id="calories" value={calories} onChange={(e) => setCalories(e.target.value)}/>
        </label>
        <label htmlFor="servings">Servings
        <input type="number" id="servings" value={servings} onChange={(e) => setServings(e.target.value)}/>
        </label>
        <button onClick={() => addNewItem(newItem)}type="submit">Create Item</button>
    </form>
  )
}

export default AddFoodForm