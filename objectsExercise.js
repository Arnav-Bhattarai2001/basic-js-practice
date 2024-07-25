// a. Find the value of the price property and if it is greater than 100, discount it by 10%. If that’s not the case, discount it by 7%.
// b. Update the object with the new property - discount and the corresponding value (7% or 10%) and the new price.

let prod = {
  name: "headphones",
  price: 83.7,
  discount: "7%",
};

const newProd = prod;

const newObject = (newProd) => {
  if (prod.price > 100) {
    prod.discount = "10%";
    prod.price = `${price} - (0.10 * ${price})`;
  }
  return newProd;
};

const newObject1 = (newProd) => {
  if (prod.price <= 100) {
    prod.price = `${price} - (0.07 * ${price})`;
  }
  return newProd;
};

console.log({ newProd });
