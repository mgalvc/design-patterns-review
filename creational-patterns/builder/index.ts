import { dir } from "console";
import HouseBuilderDirector from "./builder";

const director = new HouseBuilderDirector();

const basicHouse = director.buildBasicHouse();
const midLevelHouse = director.buildMidLevelHouse();
const fancyHouse = director.buildFancyHouse();

console.log(basicHouse.toString());
console.log(midLevelHouse.toString());
console.log(fancyHouse.toString());