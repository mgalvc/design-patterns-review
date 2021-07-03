import Highlander from './singleton';

const highlander = Highlander.getInstance();
const highlander2 = Highlander.getInstance();

console.log(`Equal instances: ${highlander === highlander2}`);
console.log(highlander.greet());