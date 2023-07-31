function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  const avg = +(sum / arr.length).toFixed(2);

  return { min, max, avg };
}

function summElementsWorker(...args) {
  if (args.length === 0) {
    return 0;
  }

  return args.reduce((sum, current) => sum + current);
}

function differenceMaxMinWorker(...args) {
  if (args.length === 0) {
    return 0;
  }

  const max = Math.max(...args);
  const min = Math.min(...args);

  return max - min;
}

function differenceEvenOddWorker(...args) {
  if (args.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < args.length; i++) {
    if (args[i] % 2 === 0) {
      sumEvenElement += args[i];
    } else {
      sumOddElement += args[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...args) {
  if (args.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < args.length; i++) {
    if (args[i] % 2 === 0) {
      sumEvenElement += args[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
