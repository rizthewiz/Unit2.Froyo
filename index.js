const userInput = prompt(
  "Please enter a list of comma-separated froyo flavors.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const splitFlavs = userInput.split(",");

const array = [];
for (let i = 0; i < splitFlavs.length; i++) {
  array.push(splitFlavs[i]);
}

const arrToObj = (array) => {
  const order = {};
  for (let i = 0; i < array.length; i++) {
    order[i] = array[i];
    console.log(order);
  }
  return order;
};

// const listOrder = (array) => {
//   let vanillaCount = 0;
//   let strawberryCount = 0;
//   let coffeCount = 0;
//   for (const count in flavor) {
//     if (array.length[i] == "vanilla") {
//       vanillaCount += 1;
//     } else if (array.length[i] == "strawberry") {
//       strawberryCount += 1;
//     } else if (array.length[i] == "coffee") {
//       coffeCount += 1;
//     }
//   }
//   return console.log(
//     `You ordered: ${vanillaCount} vanilla\n ${strawberryCount} strawberry\n ${coffeCount} coffee`
//   );
// };
console.log(array);
// listOrder(array);
