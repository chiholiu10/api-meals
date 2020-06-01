import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import YouTube from "react-youtube";
import { isEmpty } from "lodash";

const StyledListRandomMeals = styled.p`
  color: red;
`;

export const ListRandomMeals = ({ showResultMeal }) => {
  const meal = showResultMeal;

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
  const YoutubeID = Object.entries(meal).reduce(
    (currentYoutubeId, [key, value]) => {
      if (key.includes("strYoutube") && value !== "") {
        console.log(value.split("=").pop());
        const getYoutTubeId = value.split("=").pop();
        currentYoutubeId.push(`${getYoutTubeId}`);
      }
      return currentYoutubeId;
    },
    []
  );

  const menu = {
    name: meal.strArea,
    image: meal.strMealThumb,
    instruction: meal.strInstructions,
  };

  const MenuInfo = {
    menuName: menu.name,
    menuImage: menu.image,
    menuVideo: YoutubeID,
    menuInstruction: menu.instruction,
    ingredients: parsedIngredients,
  };

  if (isEmpty(showResultMeal)) {
    return (
      <div data-testid="list-random-meals-empty">
        Please click on Random Button of find an ingredient
      </div>
    );
  } else {
    return (
      <div data-testid="list-random-meals" className="ingredient-container">
        <p className="title">{MenuInfo.menuName}</p>
        <br className="border-bottom" />
        <img
          className="image border-bottom"
          alt={MenuInfo.menuName}
          src={MenuInfo.menuImage}
        />
        <br className="border-bottom" />
        <br className="border-bottom" />
        <p className="instruction">{MenuInfo.menuInstruction}</p>
        {MenuInfo.menuVideo.length == 0 ? (
          ""
        ) : (
          <YouTube
            videoId={MenuInfo.menuVideo}
            className="video border-bottom"
          />
        )}
        {MenuInfo.ingredients.map((ingredients, i) => {
          return (
            <p className="ingredient-list" key={i}>
              {ingredients}
            </p>
          );
        })}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    showResultMeal:
      state.getData.toggleResults === false
        ? state.getData.randomMeals[0] || []
        : state.getData.currentIngredient || [],
  };
};

export default connect(mapStateToProps, null)(ListRandomMeals);
