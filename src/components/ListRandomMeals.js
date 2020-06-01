import React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';

const ListRandomMeals = ({ showResultMeal }) => {
    const meal = showResultMeal;

    // get all ingredients clustered in one array
    const parsedIngredients = Object.entries(meal).reduce(
        (ingredients, [key, value]) => {
            if (key.includes("Measure") && value !== "" && value !== null) {
                const keyReference = key.match(/\d+/)[0];
                const ingredient = meal[`strIngredient${keyReference}`];
                ingredients.push(`${value} ${ingredient}`);
            }
            return ingredients;
        },
        []
    );
    const YoutubeID = Object.entries(meal).reduce(
        (currentYoutubeId, [key, value]) => {
            if(key.includes("strYoutube") && value !== "") {
                console.log(value.split('=').pop())
                const getYoutTubeId = value.split('=').pop();
                currentYoutubeId.push(`${getYoutTubeId}`);
            }
            return currentYoutubeId
        },
        []
    );

    const menu = {
        name: meal.strArea,
        image: meal.strMealThumb,
        instruction: meal.strInstructions
    };
      
    const MenuInfo = {
        menuName: menu.name,
        menuImage: menu.image,
        menuVideo: YoutubeID,
        menuInstruction: menu.instruction,
        ingredients: parsedIngredients
    };  

    console.log(MenuInfo.menuVideo)

    return (
        <div className="ingredient-container">
            <p className="title">{MenuInfo.menuName}</p>
            <img className="image" alt={MenuInfo.menuName} src={MenuInfo.menuImage}/>
            {MenuInfo.menuVideo.length == 0 ? '' : <YouTube videoId={MenuInfo.menuVideo} className="video"/>}
            {MenuInfo.ingredients.map((ingredients, i) => {
                return (
                    <p className="ingredient-list" key={i}>{ingredients}</p>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        showResultMeal: state.getData.toggleResults === false ? (state.getData.randomMeals[0] || {}) : (state.getData.currentIngredient || {})        
    }
}

export default connect(mapStateToProps, null)(ListRandomMeals);
