interface Item {
  getPrice(): number;
}

export class Product implements Item {
  private price: number;

  public constructor(price: number) {
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

export class Box implements Item {
  private items: Item[];

  public constructor() {
    this.items = [];
  }

  getPrice() {
    let total = 0;
    
    this.items.forEach(item => {
      total += item.getPrice();
    })
    
    return total;
  }

  public addItem(item: Item) {
    this.items.push(item);
  }
}