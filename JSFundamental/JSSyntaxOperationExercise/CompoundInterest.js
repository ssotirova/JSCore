function compoundInterest([p,i,n,t]){
  let s = (1 + i/(100*(12/n)));
  let f = p* Math.pow(s,(12/n)*t);
  console.log(f.toFixed(2));
}

compoundInterest([100000, 5, 12, 25]);
