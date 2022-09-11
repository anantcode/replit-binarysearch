// Order Agnostic Binary Search


function binSearch(arr, target) {

  let start = 0;
  let end = arr.length - 1;

  let isAsc = arr[start] < arr[end];

  while (start <= end) {

    // Floor was required, in JS! In Java wont be needed.
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] == target) {
      return mid;
    }

    if (isAsc) {
      if (target < arr[mid]) {
        end = mid - 1; //These +1 -1 is cool
      } else
        start = mid + 1;
    } else {
      if (target > arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return -1; //make sure to return -1 if nothing was returned after all execution!

}

function run() {

  let input = [1, 2, 3, 4, 5];
  let target = 1;

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