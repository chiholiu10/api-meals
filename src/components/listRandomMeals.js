import React from 'react';
import { connect } from 'react-redux';

const ListRandomMeals = ({ allRandomMeals }) => {
    const parsedIngredients = Object.entries(allRandomMeals).reduce(
        (ingredients, [key, value]) => {
            console.log(value, ingredients)
          if (key.includes("Measure") && value !== '') {
            const keyReference = key.match(/\d+/)[0];
            const ingredient = allRandomMeals[`strIngredient${keyReference}`]
            ingredients.push(`${value} ${ingredient}`);
          }
          return ingredients;
        },
        []
      );

    console.log(parsedIngredients)

    // console.log(obj)

    // const obj = {
    //     id: 3,
    //     area: "American",
    //     category: "pizza",
    //     ingredient1: "a",
    //     ingredient2: "b",
    //     ingredient3: "c",
    //   };
      
    // const parsedObject = {
    //     // id: obj.id,
    //     // area: obj.area,
    //     // category: obj.category,
    //     ingredients: parsedIngredients,
    // };

    // console.log(parsedObject.ingredients)
    
    return (
        <div>
            {/* {outputRandomMeals} */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
       allRandomMeals: state.getData.randomMeals
    }
}

export default connect(mapStateToProps, null)(ListRandomMeals);