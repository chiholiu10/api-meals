import React from "react";
import { connect } from "react-redux";
import YouTube from "react-youtube";
import { isEmpty } from "lodash";

export const ListMeals = ({ showResultMeal }) => {
    const meal = showResultMeal;

    const extractValues = (object, rules) => {
        return Object.entries(object).reduce((acc, [key, value]) => {
            for (let [ruleKey, func] of Object.entries(rules)) {
                const result = func(key, value);

                if(result) {
                    acc[ruleKey] = [...(acc[ruleKey] || []), result]
                }
            }

            return acc;
        }, {});
    }

    const rules = {
        parsedIngredients: (key, value) => {
          if (key.includes("Measure") && value !== "" && value !== null){
            const keyReference = key.match(/\d+/)[0];
            const ingredient = meal[`strIngredient${keyReference}`];

            return `${value} ${ingredient}`;
          }
        },
        youtubeId: (key, value) => {
          if (key.includes("strYoutube") && value !== "") {
            const getYoutTubeId = value.split("=").pop();

            return `${getYoutTubeId}`;
          }
        }
    }

    const {
        parsedIngredients,
        youtubeId
    } = extractValues(meal, rules);

    const menu = {
        name: meal.strArea,
        image: meal.strMealThumb,
        youtube: youtubeId,
        instruction: meal.strInstructions,
        ingredients: parsedIngredients
    };


      
    const MenuInfo = {
        menuName: menu.name,
        menuImage: menu.image,
        menuVideo: menu.youtube,
        menuInstruction: menu.instruction,
        ingredients: menu.ingredients
    };  

    if(isEmpty(meal)) {
        return (
            <div data-testid="list-random-meals-empty" className="empty-meal-error-message">Please click on button to see ingredients</div>
        )
    } else {
        return (
            <div className="ingredient-container" data-testid="list-random-meals">
                <p className="title">{MenuInfo.menuName}</p>
                <img className="image" alt={MenuInfo.menuName} src={MenuInfo.menuImage}/>
                <div className="ingredient-container-list content">
                    { MenuInfo.ingredients == undefined ? "" : MenuInfo.ingredients.map((ingredients, i) => {
                        return (
                            <p className="ingredient-list" key={i}>{ingredients}</p>
                        )
                    })}
                </div>
                <p className="instruction content">{MenuInfo.menuInstruction}</p>
                {MenuInfo.menuVideo == 0 ? "" : <YouTube videoId={MenuInfo.menuVideo} className="video"/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showResultMeal: state.getData.toggleResults === false ? (state.getData.randomMeals[0] || {}) : (state.getData.currentIngredient || {})        
    }
}

export default connect(mapStateToProps, null)(ListMeals);
