class Inventory {
  itemName;
  quantity;
  price;

  constructor(itemName, quantity, price) {
    this.itemName = itemName;
    this.quantity = quantity;
    this.price = price;
  }
}

let obj = new Inventory("Laptop", 10, 1200.50);
console.log("Item Name: " + obj.itemName);
console.log("Quantity: " + obj.quantity);
console.log("Price: $" + obj.price.toFixed(2));

let obj1 = new Inventory("Mobile", 20, 800.50);
console.log("Item Name: " + obj1.itemName);
console.log("Quantity: " + obj1.quantity);
console.log("Price: $" + obj1.price.toFixed(2));
