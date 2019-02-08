function sum(fromN, toN) {
  let current = fromN;
  if (fromN === toN) {
    return current;
  }
    current += 1;
    return fromN + sum(current , toN);
}
module.exports = sum;


// assign the value of the recursive sum() to a variable and then return that in your base case