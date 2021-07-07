export default class ComplexOperationsFacade {
  public constructor(
    private operationA = new OperationA(),
    private operationB = new OperationB(),
    private operationC = new OperationC()
  ) {}

  public operate(): void {
    this.operationA.operate();
    this.operationB.operate();
    this.operationC.operate();
    console.log('Asking for operation A again...');
    this.operationA.operate();
    console.log('Done with complex operations');
  }
}

interface Operation {
  operate(): void;
}

class OperationA implements Operation {
  public operate(): void {
    console.log('Running operation A');
  }
}

class OperationB implements Operation {
  public operate(): void {
    console.log('Running operation B - 1');
    console.log('Running operation B - 2');
    console.log('Finished running operation B');
  }
}

class OperationC implements Operation {
  public operate(): void {
    console.log('Running operation C');
  }
}