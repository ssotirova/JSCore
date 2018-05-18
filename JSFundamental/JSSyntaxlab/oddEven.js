function oddEven(n){
  let r=n%2;
  if(r==0){
    console.log("even");
  }else if (r==Math.round(r)) {
    console.log("odd");
  }else {
    console.log("invalid");
  }
}

oddEven(1.5);
