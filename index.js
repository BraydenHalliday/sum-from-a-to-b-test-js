
function sum(fromN, toN) {

 let total = fromN;
console.log(total)
  if (fromN === toN) {
    return total
  } else { 
    return total + sum(fromN + 1, toN)
  }

}
console.log('function end',sum(3,7))
console.log('function end',sum(1,2))
module.exports = sum;