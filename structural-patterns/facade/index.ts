import ComplexOperationsFacade from "./facade";

// client doesn't know implementation details
const operations = new ComplexOperationsFacade();
operations.operate();
