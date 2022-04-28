import React from 'react'
import { Card, Col } from 'antd';

function FoodBox(props) {
    const {name, image, calories, servings} = props.food
  return ( 
    <Col> 
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Food Calories: {calories}</p>
        <p>Food Servings: {servings} </p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <button onClick={() => {props.handleDeleteFood(name)}} type="primary"> Delete </button>
      </Card>
    </Col>
  )
}

export default FoodBox