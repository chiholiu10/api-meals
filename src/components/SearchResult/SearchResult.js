import React from "react";
import { useDispatch } from "react-redux";
import { openIngredient } from "../../actions/index";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

export const SearchResult = ({ ingredientButtons }) => {
	const dispatch = useDispatch();
	if(ingredientButtons === undefined) return;
	const buttons = ingredientButtons;

	const allButtons = buttons.map((ingredientBtn, i) => {
		if(ingredientBtn == null) {
			return null;
		}
		return (
			<div key={i} className="button-search-parent">
				<div className="button-background-color button-default" onClick={() => dispatch(openIngredient(ingredientBtn))}>{ingredientBtn.strMeal}</div>
			</div>
		);
	});

	return (
		<div>
			{allButtons.length == 0 ? <div data-testid="search-result-buttons-empty"></div> : <div data-testid="search-result-buttons" className="button-search-container">{allButtons}</div>}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		ingredientButtons: state.getData.allSearchButtons || []
	};
};

SearchResult.propTypes = {
	ingredientButtons: PropTypes.array
};

export default connect(mapStateToProps, null)(SearchResult);
