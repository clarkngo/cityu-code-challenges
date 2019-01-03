// helpful links
// https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
// https://stackoverflow.com/questions/17635866/get-values-from-an-object-in-javascript

// my solution
function cakes(recipe, available) {
  // check for missing ingredients
  for (var key in recipe) {
    if (available.hasOwnProperty(key)) {
        continue;
    }
    else {
      return 0;
    }
  }
  
  var count = 0;
  var minimum = 999;
  for (key in recipe) {
    if (available.hasOwnProperty(key)) {
        var value = recipe[key];
        count = available[key] / value;
        count = Math.floor(count);
        if (count < minimum) {
          minimum = count;
        }
    }
  }
  return minimum;
}

// best practice
function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}

// other solution
function cakes(recipe, available) {
  var numCakes = [];
  
  for(var key in recipe){
    if(recipe.hasOwnProperty(key)){
      if(key in available){
        numCakes.push(Math.floor(available[key] / recipe[key]));
      }else{
        return 0;
      }
    }
  }
  
  return Math.min.apply(null, numCakes); 
  
}

// other solution
const cakes = (needs, has) => Math.min(
  ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)
