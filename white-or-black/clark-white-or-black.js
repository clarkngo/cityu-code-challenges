function mineColor(line, number) {
  if (line === "a" || line === "c" || line === "e" || line === "g")
    if (number % 2 === 0)
      return "white";
    else 
      return "black";
  else 
    if (line === "b" || line === "d" || line === "f" || line === "h")
      if (number % 2 === 0)
        return "black";
      else
        return "white";
  
}

// best practice
let mineColor=(l, n)=>(l.charCodeAt()-97+n)%2 ? "black" : "white";


// other solution
function mineColor(line, number) {
  if(((line.charCodeAt(0) + number) % 2) == 0)
  {
    return "black";
  }
  return "white";
}

// other solution
function mineColor(line, number) {
  var line = line.charCodeAt(0) - 96
  return (line + number) % 2 ? 'white': 'black'
}
