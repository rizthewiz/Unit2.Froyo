const userInput = prompt(
  "Please enter a list of comma-separated froyo flavors."
);

const order = {};
const flavors = userInput.split(",");

//loop through flavors and add to order
//add flavor to order
//set value to 1
// if flavor there raise value by 1
for (let i = 0; i < flavors.length; i++) {
  const flavor = flavors[i];
  if (flavor in order) {
    order[flavor]++;
  } else {
    order[flavor] = 1;
  }
}

console.log(order);
