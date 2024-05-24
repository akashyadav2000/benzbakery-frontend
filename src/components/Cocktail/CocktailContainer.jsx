import React from 'react'
import Cocktail from './Cocktail'
import { useSelector } from 'react-redux';

function CocktailContainer() {

  const cocktailItems = useSelector((state) => state.cocktail);
  const cocktailCategories = ["cakeItems", "pastryItems", "cupCakeItems", "weddingCakeItems"];

  const cocktailFinalItems = cocktailCategories.flatMap(category => {
    const items = useSelector((state) => state[category]);
    return items.filter(item => cocktailItems.includes(item.id));
  });

  return (
    <>
      {cocktailFinalItems.map((item) => (
        <Cocktail key={item.id} item={item} />
      ))}
    </>
  )
}

export default CocktailContainer