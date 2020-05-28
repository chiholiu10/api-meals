import React from 'react';
import { connect } from 'react-redux';

const ListRandomMeals = ({ allRandomMeals }) => {
    const meal = allRandomMeals;
    
    // get all ingredients clustered in one array
    const parsedIngredients = Object.entries(meal).reduce(
        (ingredients, [key, value]) => {
            if (key.includes("Measure") && value !== "") {
                const keyReference = key.match(/\d+/)[0];
                const ingredient = meal[`strIngredient${keyReference}`];
                ingredients.push(`${value} ${ingredient}`);
            }
            return ingredients;
        },
        []
    );

    const menu = {
        name: meal.strArea,
        image: meal.strMealThumb,
        video: meal.strYoutube,
        instruction: meal.strInstructions
      };
      
    const MenuInfo = {
        menuName: menu.name,
        menuImage: menu.image,
        menuVideo: menu.video,
        menuInstruction: menu.instruction,
        ingredients: parsedIngredients
    };    
    return (
        <div>
            <p>{MenuInfo.menuName}</p>
            <img src={MenuInfo.menuImage}/>
            <video><source src={MenuInfo.menuVideo}></source></video>
            {MenuInfo.ingredients.map((ingredients, i) => {
                return (
                    <p>{ingredients}</p>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        allRandomMeals: state.getData.randomMeals[0] || {}
    }
}

export default connect(mapStateToProps, null)(ListRandomMeals);