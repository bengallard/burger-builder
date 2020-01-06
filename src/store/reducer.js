import * as actionType from './actions'

const initialState = {
    ingredients: {
        'salad': 0,
        'bacon': 0,
        'cheese': 0,
        'meat': 0
    },
    totalPrice: 4,
    purchasable: false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const reducer = (state = initialState, action) => {
    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0)

            return sum > 0
    }

    switch (action.type) {
        case actionType.ADD_INGREDIENT: 
        {
            const oldCount = state.ingredients[action.ingredient]
            const updatedCount = oldCount + 1
            const updatedIngredients = {
                ...state.ingredients
            }
            updatedIngredients[action.ingredient] = updatedCount
            const priceAddition = INGREDIENT_PRICES[action.ingredient]
            const oldPrice = state.totalPrice
            const newPrice = oldPrice + priceAddition
            const purchasable = updatePurchaseState(updatedIngredients)
            return {
                ...state,
                ingredients: updatedIngredients,
                totalPrice: newPrice,
                purchasable: purchasable
            }
        }
        case actionType.REMOVE_INGREDIENT: 
        {
            const oldCount = state.ingredients[action.ingredient]
            if (oldCount <= 0) { 
                return 
            }
            const updatedCount = oldCount - 1
            const updatedIngredients = {
                ...state.ingredients
            }
            updatedIngredients[action.ingredient] = updatedCount
            const priceDeduction = INGREDIENT_PRICES[action.ingredient]
            const oldPrice = state.totalPrice
            const newPrice = oldPrice - priceDeduction
            const purchasable = updatePurchaseState(updatedIngredients)
            return {
                ...state,
                totalPrice: newPrice, 
                ingredients: updatedIngredients,
                purchasable: purchasable
            }
        }
    }
    return state
}

export default reducer