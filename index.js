// function sum(fromN, toN) {
//   // Sum all the values from fromN up to toN
//   // base case
//   if (fromN === toN) {
//     return toN;
//   }
//   let current = sum((fromN + 1), toN);
//   return current;
// }

function sum(fromN, toN) {
  let current = (fromN + 1);
  if (fromN !== toN) {
    if (current < toN) {
      
    }
    // let current = sum((fromN + 1), toN);
    return sum((fromN + 1), toN);
    console.log(current);
    return current;
  } else {
    return current;
  }
}

console.log("the function:", sum(3,7));


module.exports = sum;


// assign the value of the recursive sum() to a variable and then return that in your base case