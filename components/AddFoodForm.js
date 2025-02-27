import React,  { useState } from 'react'

function AddFoodForm({handleAddNewFood}) {
    const [foodName, setFoodName] = useState("")
    const [foodImage, setfoodImage] = useState("")
    const [foodCalories, setfoodCalories] = useState(0)
    const [foodServings, setfoodServings] = useState(0)

    const newFoodToAdd = {
        name: foodName,
        image: foodImage,
        calories: foodCalories,
        servings:foodServings
    }

    const handleResetForm = () => {
        setFoodName("")
        setfoodImage("")
        setfoodCalories(0)
        setfoodServings(0)
    }

    const handleFoodName = (e) => {
        setFoodName(e.target.value)
    }
    const handleFoodImage = (e) => {
        setfoodImage(e.target.value)
    }
    const handleFoodCalories = (e) => {
        setfoodCalories(e.target.value)
    }

  return (
    
    <div className='addForm'>

        <form onSubmit={(e) => handleAddNewFood(e, newFoodToAdd, handleResetForm)} >
            <label>
                Food Name:
                <input name="name" value={foodName} type="text" onChange={handleFoodName} />
            </label>
            <label>
                imageURL:
                <input name="image" value={foodImage} type="text" onChange={handleFoodImage} />
            </label>
            <label>
                Food calories:
                <input name="calories" value={foodCalories} type="number" onChange={handleFoodCalories} />
            </label>
            <label>
                Food servings:

                <input name="servings" value={foodServings} type="number" onChange={(e) => {setfoodServings(e.target.value)}} />
            </label>
            <button type="submit" value="Submit">Submit</button>
        </form>

    </div>
  )
}

export default AddFoodForm