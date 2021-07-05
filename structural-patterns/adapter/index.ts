import { TxtData, TxtToJsonAdapter } from "./adapter";

const txt = new TxtData();
const jsonAdpater = new TxtToJsonAdapter(txt);
const json = jsonAdpater.getData();
console.log(json);