interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "Milk", price: 4 },
  { name: "Bread", price: 3 },
  { name: "Peanut Butter", price: 4 },
];

function calcAverageProductPrice(products: Product[]): number {
  let average = 0;
  let sum = 0;

  if (products.length > 0) {
    for (let product of products) {
      sum += product.price;
    }
    average = sum / products.length;
    return average;
  } else {
    return 0;
  }
}
console.log(calcAverageProductPrice(products));

export { calcAverageProductPrice, Product };
