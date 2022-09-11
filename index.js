// Order Agnostic Binary Search


function binSearch(arr, target) {

  let start = 0;
  let end = arr.length - 1;

  let isAsc = arr[start] < arr[end];

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    console.log(`mid is ${mid}`)

    if (arr[mid] == target) {
      return mid;
    }

    if (isAsc) {
      if (target < arr[mid]) {
        end = mid - 1;
                console.log(`new end is at index ${end}`)
      } else
        start = mid + 1;
      console.log(`new start is at index ${start}`)
    } else {
      if (target > arr[mid]) {
        end = mid - 1;
        console.log(`new end is at index ${end}`)
      } else {
        start = mid + 1;
        console.log(`new start is ${start}`)
      }
    }
  }

  return -1;

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