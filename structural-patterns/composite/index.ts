import { Box, Product } from "./composite";

const order = new Box();

order.addItem(new Product(25));
order.addItem(new Product(15));

const box = new Box();
box.addItem(new Product(10));
box.addItem(new Product(7));

const box2 = new Box();
box2.addItem(new Product(5.75));

box.addItem(box2);

order.addItem(box);

const total = order.getPrice();

console.log(`Total price: $ ${total}`);
