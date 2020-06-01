export const types = {
    RANDOM_MEALS: 'RANDOM_MEALS',
    SEARCH_MEALS: 'SEARCH_MEALS',
    SHOW_INGREDIENT: 'SHOW_INGREDIENT'
}

export const getRandomMeal = (getMeals) => {
    return {
        type: types.RANDOM_MEALS,
        getMeals
    }
}

export const generateSearchButtons = (searchButtons) => {
    return {
        type: types.SEARCH_MEALS,
        searchButtons
    }
}

export const openIngredient = (foldRecipe) => {
    return {
        type: types.SHOW_INGREDIENT,
        foldRecipe
    }
}
