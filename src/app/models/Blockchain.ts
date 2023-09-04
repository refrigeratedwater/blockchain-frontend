import { Block } from './Block'; // Ensure consistent casing here

export class Blockchain {
  length!: number;
  chain!: Block[];
  nodes!: string[];

  // constructor(data: any) {
  //   this.length = data.length;
  //   this.chain = data.chain;
  //   this.nodes = data.nodes;
  // }
}
