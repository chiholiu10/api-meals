import React from 'react';
// import { useDispatch } from 'react-redux';
import { openIngredient } from '../actions/index';
import { connect } from 'react-redux';

const SearchResult = ({ ingredientButtons }) => {
    const buttons = ingredientButtons;
    if(buttons == undefined) return;

    const allButtons = buttons.map((ingredientBtn, i) => {
        if(ingredientBtn == null)  return
        return (
            <div key={i}>
                <button onClick={() => openIngredient(ingredientBtn.strMeal)}>{ingredientBtn.strMeal}</button>
            </div>
        )
    })

    return (
        <div>
            SearchResult
            {allButtons}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ingredientButtons: state.getData.allSearchButtons || undefined
    }
}

export default connect(mapStateToProps, null)(SearchResult);