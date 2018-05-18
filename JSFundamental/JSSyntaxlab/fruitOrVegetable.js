function fruitOrVegetable(n){
  if (n == "banana" || n =="apple"|| n =="kiwi" || n =="cherry" || n =="lemon" || n =="grapes" || n =="peach") {
    console.log("fruit");
  }else if (n == "tomato" || n =="cucumber"|| n =="pepper" || n =="onion" || n =="garlic" || n =="parsley") {
    console.log("vegetable");
  }else {
    console.log("unknown");
  }
}

fruitOrVegetable("tomato");
