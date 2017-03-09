import React, { Component } from 'react';
// import Ingredient from './Ingredient';

export class Ingredients extends Component {

  render(){
    const { store } = this.props;
    const ingredients = store.getState().ingredients.map((ingredient, index) => {
      return <Ingredient key={index} ingredient={ingredient} store={store} />
    });

    return(
        <div>
          <ul>
            {ingredients}
          </ul>
        </div>
    )
  }
}


export const ConnectedIngredients = (Ingredients)
