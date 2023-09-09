import { Block } from './Block';

export class Blockchain {
  length!: number;
  chain!: Block[];
  nodes!: string[];
}
