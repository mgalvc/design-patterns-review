interface IOperation {
  run(client: string): string;
}

class Operation implements IOperation {
  public run(client: string): string {
    return `Result from this operation for ${client}`;
  }
}

export default class ProxyOperation implements IOperation {
  public constructor(
    private operation = new Operation()
  ) {}

  public run(client: string): string {
    if(client !== 'allowed-client') {
      throw new Error('You are not allowed to access this resource');
    }

    return this.operation.run(client); 
  }
}

