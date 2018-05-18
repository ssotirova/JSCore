function imperialUnits(number){
  if (number < 12) {
    console.log(`0'-${number}"`);
  }else {
    let i = Number.parseInt(number/12);
    let p = number % 12;

    console.log(`${i}'-${p}"`);
  }
}

imperialUnits(11);
