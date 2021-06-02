import React from 'react';

const Recipe = ({title, image, ingredients}) => {
    return(
        <div className="singleRecipe">
            <img className="repiceImage" src={image} alt="" />
            <h1 className="recipeTitle">{title}</h1>
            <ol className="recipeIngredients">
                {ingredients.map(ingredient => (
                    <li className="ingredient">{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;