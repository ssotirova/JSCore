function circleArea(r){
  let area = Math.PI * r * r;
  let roundedArea = Math.round(area * 100) / 100;
  console.log(area);
  console.log(roundedArea);
}

circleArea(5);
