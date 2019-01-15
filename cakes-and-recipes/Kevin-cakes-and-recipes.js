const cakes = (recipes, ingredients) => {
  const recipeKeys = Object.keys(recipes);
  if (recipeKeys.length > Object.keys(ingredients).length) return 0;
  
  let numCake = Number.MAX_VALUE;
  for (let i = 0; i < recipeKeys.length; i++) {
    if (!ingredients[recipeKeys[i]]) return 0;
    numCake = Math.min(numCake, Math.floor(ingredients[recipeKeys[i]] / recipes[recipeKeys[i]]));
  }
  return numCake;
};
