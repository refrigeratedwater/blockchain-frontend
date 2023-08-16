export interface Transactions {
  author: string;
  email: string;
  file: File | any;
}

export interface Block {
  index: number;
  previous_hash: string;
  hash: string;
  transactions: Transactions[];
  timestamp: number;
  nonce: number;
}

export interface Blockchain {
  length: number;
  chain: Block[];
  peers: string;
}

export interface Mine {
  status: 'Block mined' | 'Faield to mine';
  message: string;
}

export interface Node {
  node_address: string;
}
