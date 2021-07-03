interface Prototype {
  clone(): Prototype;
}

export default class Sheep implements Prototype {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  clone(): Sheep {
    const clone = new Sheep(this.name);
    return clone;
  }

  baa(): string {
    return `Baa I'm ${this.name}`;
  }
}