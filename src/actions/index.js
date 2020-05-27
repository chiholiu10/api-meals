export const types = {
    RANDOM_MEALS: 'RANDOM_MEALS',
}

export const getRandomMeal = (getMeals) => {
    return {
        type: types.RANDOM_MEALS,
        getMeals
    }
}