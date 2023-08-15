export interface Transactions {
  author: string;
  email: string;
  file: File;
}

export interface Block {
  index: number;
  transactions: Transactions[];
  timestamp: number;
  previous_hash: string;
  nonce: number;
}

export interface Blockchain {
  length: number;
  chain: Block[];
  peers: string;
}

export interface Node {
  node_address: string;
}

