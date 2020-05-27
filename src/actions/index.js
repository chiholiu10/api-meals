export const types = {
    RANDOM_MEALS: 'RANDOM_MEALS',
}

export const getRandomMeal = (index) => ({
    type: types.RANDOM_MEALS,
    index
});