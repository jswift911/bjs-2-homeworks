"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return arr; // пустой массив
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
    return arr;
  } else {
    let sqrtDiscriminant = Math.sqrt(discriminant);
    let root1 = (-b + sqrtDiscriminant) / (2 * a);
    let root2 = (-b - sqrtDiscriminant) / (2 * a);
    arr.push(root1, root2);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (typeof percent !== 'number' || typeof contribution !== 'number' || typeof amount !== 'number' || typeof countMonths !== 'number') {
    return false;
  }

  if (percent < 0 || percent > 100) {
    return false;
  }

  let monthlyPercent = percent / 100 / 12;
  let loanAmount = amount - contribution;

  let payment = loanAmount * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1)));
  let totalPayment = payment * countMonths;

  return parseFloat(totalPayment.toFixed(2));
}