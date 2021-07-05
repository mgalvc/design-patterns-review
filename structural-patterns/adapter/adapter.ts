import { resolve } from 'path';
import { readFileSync } from "fs";

export class TxtData {
  public getData(): string {
    const buffer = readFileSync(resolve(__dirname, 'data.txt'));
    return buffer.toString();
  }
}

export class TxtToJsonAdapter {
  public txtData: TxtData;

  public constructor(txtData: TxtData) {
    this.txtData = txtData;
  }

  public getData(): object {
    const lines = this.txtData.getData().split('\n');
    const json = {};
    
    lines.forEach(line => {
      const [key, value] = line.split(':');
      Object.assign(json, { [key]: value });
    })
    
    return json;
  }
}