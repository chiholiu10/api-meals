import React from 'react';
import { useDispatch } from 'react-redux';
import { openIngredient } from '../actions/index';
import { connect } from 'react-redux';

const SearchResult = ({ ingredientButtons }) => {
    const dispatch = useDispatch();

    const buttons = ingredientButtons;
    if(buttons === undefined) return;

    const allButtons = buttons.map((ingredientBtn, i) => {
        if(ingredientBtn == null) {
            return null;
        }
        return (
            <div key={i}>
                <button onClick={() => dispatch(openIngredient(ingredientBtn))}>{ingredientBtn.strMeal}</button>
            </div>
        )
    })

    return (
        <div>
            {allButtons == null ? <div data-testid="search-result-buttons"></div> : <div data-testid="search-result-buttons"></div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ingredientButtons: state.getData.allSearchButtons || undefined
    }
}

export default connect(mapStateToProps, null)(SearchResult);