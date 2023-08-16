import { Block } from './Block'; // Ensure consistent casing here

export class Blockchain {
  length!: number;
  chain!: Block[];
  peers!: string[];
}
