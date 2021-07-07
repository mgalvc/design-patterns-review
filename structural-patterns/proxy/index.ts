import ProxyOperation from "./proxy";

const proxy = new ProxyOperation();

try {
  proxy.run('not-allowed-client');
} catch (e) {
  console.log(e.toString());
}

const result = proxy.run('allowed-client');
console.log(result);