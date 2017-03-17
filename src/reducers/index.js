import { combineReducers } from 'redux'
import ingredientsReducer from './ingredients'
import recipesReducer from './recipes'
import recipeFormReducer from './recipeForm'


// const rootReducer = combineReducers({
//   recipes: recipes,
//   ingredients: ingtredients
// });

export default combineReducers({
  ingredients: ingredientsReducer,
  recipes: recipesReducer,
  recipeForm: recipeFormReducer
})
