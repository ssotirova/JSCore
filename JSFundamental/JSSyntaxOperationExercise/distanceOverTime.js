function distanceOverTime([v1,v2,t]){
  let dist1 = v1*(t/3600);
  let dist2 = v2*(t/3600);

  let delta = Math.abs(dist1-dist2)*1000;

  console.log(delta);
}

distanceOverTime([5, -5, 40]);
