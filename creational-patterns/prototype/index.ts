
import Sheep from "./prototype";

const original = new Sheep('Dolly');
const clone = original.clone();

console.log(`Original: ${original.baa()}`);
console.log(`Clone: ${clone.baa()}`);
