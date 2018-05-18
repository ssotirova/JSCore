function distanceIn3D([x1,y1,z1,x2,y2,z2]){
  let x = Math.abs(x1-x2);
  let y = Math.abs(y1-y2);
  let z = Math.abs(z1-z2);

  let dist = Math.sqrt(x*x + y*y + z*z);

  console.log(dist);
}

distanceIn3D([1, 1, 0, 5, 4, 0]);
distanceIn3D([3.5, 0, 1, 0, 2, -1]);
