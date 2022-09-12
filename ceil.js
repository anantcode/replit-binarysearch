heading("Find Ceiling of a given target in give array");
ceiling([1,12,13,14,15], 7);

// ====================================
function heading(text){
  console.log("\n\n::::::::::::::::::::::");
  console.log(text);
  console.log("::::::::::::::::::::::\n")
}
function emphasis(text){
    console.log(`\n> ${text}\n`);
} 


function ceiling(arr, target){

  let answer = -1;
  for(let i=0; i<arr.length; i++){
    if(arr[i] > target){
      answer = i;
      break;
    }
  }

  emphasis(`${arr[answer]} is the ceil of ${target} in \n${arr}`);
  return arr[answer];
}