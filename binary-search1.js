console.log("This is Binary Search")

function binSearch(input, target) {

  let left = 0;
  let right = input.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    console.log(`mid ${mid}`)
    if (input[mid] > target) {
      right = mid - 1;  // the minus1 was cool!
    } else if (input[mid] < target) {
      left = mid + 1;  // the plus +1 was cool!
    } else {
      return mid;
    }
  }

  // Remember1: needs to return -1 if could not find.
  return -1;
}


function run() {

  let input = [1, 2, 3, 4, 5];
  let target = 3;

  let index = binSearch(input, target);
  let outMsg;

  if (index > -1) {
    outMsg = `Found at index ${index}`;
  } else {
    outMsg = `Not found!`
  }

  console.log(outMsg);
}


run();