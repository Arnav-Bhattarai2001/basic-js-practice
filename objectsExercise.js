// a. Find the value of the price property and if it is greater than 100, discount it by 10%. If that’s not the case, discount it by 7%.
// b. Update the object with the new property - discount and the corresponding value (7% or 10%) and the new price.

let prod = {
  name: "headphones",
  price: 83.7,
  discount: "7%",
};

const newProd = prod;
newProd.price = 80;
const newObject1 = (newProd) => {
  if (prod.price <= 100) {
    const newPrice1 = newProd.price - 0.07 * newProd.price;
    prod.price = newPrice1;
  }
  return newProd;
};
const belowHundred = newObject1(newProd);
console.log({ belowHundred });

const newProd1 = prod;
newProd1.price = 150;
const newObject = (newProd1) => {
  if (prod.price > 100) {
    prod.discount = "10%";
    const newPrice = newProd.price - 0.1 * newProd.price;

    prod.price = newPrice;
  }
  return newProd1;
};
const aboveHundred = newObject1(newProd1);
console.log({ aboveHundred });
