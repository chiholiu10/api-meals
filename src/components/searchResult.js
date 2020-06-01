import React from 'react';
import { useDispatch } from 'react-redux';
import { openIngredient } from '../actions/index';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height: 50px;
`

const SearchResult = ({ ingredientButtons }) => {
    const dispatch = useDispatch();

    const buttons = ingredientButtons;
    if(buttons === undefined) return;

    const allButtons = buttons.map((ingredientBtn, i) => {
        if(ingredientBtn == null) {
            return null;
        }
        return (
            <div key={i} className="button-search-parent">
                <Button className="button-background-color button-default" onClick={() => dispatch(openIngredient(ingredientBtn))}>{ingredientBtn.strMeal}</Button>
            </div>
        )
    })

    return (
        <div>
            {allButtons == null ? <div data-testid="search-result-buttons"></div> : <div data-testid="search-result-buttons" className="button-search-container">{allButtons}</div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ingredientButtons: state.getData.allSearchButtons || undefined
    }
}

export default connect(mapStateToProps, null)(SearchResult);