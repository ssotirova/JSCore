function rotate(arr){
  let rotations = Number(arr.pop());
    rotations %= arr.length;

    for(let i=0; i<rotations; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));

}

rotate(['1','2','3','4','2']);
