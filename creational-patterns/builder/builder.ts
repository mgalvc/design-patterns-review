export default class HouseBuilderDirector {
  private builder: HouseBuilder;

  constructor() {
    this.builder = new HouseBuilder();
  }

  buildBasicHouse(): House {
    this.resetBuilder();
    this.builder.buildGarage();
    return this.builder.getHouse();
  }

  buildMidLevelHouse(): House {
    this.resetBuilder();
    this.builder.buildGarage();
    this.builder.buildGarden();
    return this.builder.getHouse();
  }

  buildFancyHouse(): House {
    this.resetBuilder();
    this.builder.buildGarage();
    this.builder.buildGarden();
    this.builder.buildBackyard();
    this.builder.buildPool();
    return this.builder.getHouse();
  }

  private resetBuilder() {
    this.builder = new HouseBuilder();
  }
}

class HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  buildGarage() {
    this.house.setGarage(true);
  }

  buildGarden() {
    this.house.setGarden(true);
  }

  buildPool() {
    this.house.setPool(true);
  }

  buildBackyard() {
    this.house.setBackyard(true);
  }

  rebuild() {
    this.house = new House();
  }

  getHouse() {
    return this.house;
  }
}

class House {
  private garage: boolean;
  private garden: boolean;
  private pool: boolean;
  private backyard: boolean;

  constructor() {
    this.garage = false;
    this.garden = false;
    this.pool = false;
    this.backyard = false;
  }

  setGarage(value: boolean) {
    this.garage = value;
  }
  
  setGarden(value: boolean) {
    this.garden = value;
  }

  setPool(value: boolean) {
    this.pool = value;
  }

  setBackyard(value: boolean) {
    this.backyard = value;
  }

  toString() {
    let settedProps = Object.entries(this).map(([prop, isSetted]) => {
      return isSetted ? prop : undefined;
    }).filter(Boolean);

    if (settedProps.length) {
      return `This house has: ${settedProps.join(', ')}`;
    }

    return `This house is still on the ground`;
  }
}