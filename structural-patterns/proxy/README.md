# Proxy

- Provides a substitute for another object
- Allows operations to be done after or before a request arrives to the original object
- Proxy must implement the same interface as the original object, so it can be passed to any client that expects the original
  - For example, a credit card is a proxy to a bank account, that is a proxy to an amount of money
- Applications:
  - Lazy loading (virtual proxy): when a heavy service wastes system resources by being always up, you can use a proxy to delay it's initialization when it's needed, instead of creating the object when the app launches
  - Access control (protection proxy): use a proxy to pass or deny access to a protected resource 
  - Execution of a remote service (remote proxy): when the service is on a remote server, you can use a proxy to pass the client request over the network and send the response back as if it were executed locally
  - Logging (logging proxy): log each request before sending it to the destination
  - Caching request results (caching proxy): cache and manage cache lifecycle of requests that frequently return the same result
  - Smart reference: when you want to keep track of the clients that are using some heavy service and dismiss it to free resources when no one is using it anymore