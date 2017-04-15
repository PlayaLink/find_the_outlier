function findOutlier(integers){
  //Check if integers are mostly odd
  if(isArrayOdd(integers)){
    //Find the even outlier
    for(let i = 0; i < integers.length; i++){
      if(!isNumOdd(integers[i])){
        return integers[i];
      }
    }
  }
  //Integers are mostly even --> find the odd outlier
  for(let i = 0; i < integers.length; i++){
    if(isNumOdd(integers[i])){
      return integers[i];
    }
  }
}

function isArrayOdd(arr){
  var totalOdds = 0
  for(let i = 0; i <= 3; i++){
    if(isNumOdd(arr[i])){
      totalOdds++;
    }
  }
  if(totalOdds >= 2){
    return true;
  }
  return false;
}

function isNumOdd(num){
  if(Math.abs(num) % 2 === 1){
    return true;
  }
  return false;
}
