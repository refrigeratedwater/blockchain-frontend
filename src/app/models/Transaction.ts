import { VersionInfo } from './Author';

export class ChainInfo {
  current_chain_cid?: string;
  previous_chain_cid?: string;
  versions: VersionInfo[];

  constructor(
    current_chain_cid: string,
    versions: VersionInfo[],
    previous_chain_cid?: string
  ) {
    this.current_chain_cid = current_chain_cid;
    this.versions = versions;
    if (previous_chain_cid) this.previous_chain_cid = previous_chain_cid;
  }
}

export class Transaction {
  author: string;
  email: string;
  file_info: File | null;
  fileName: string;
  chain: ChainInfo;

  constructor(
    author: string,
    email: string,
    file_info: File | null,
    fileName: string,
    chain: ChainInfo
  ) {
    this.author = author;
    this.email = email;
    this.file_info = file_info;
    this.fileName = fileName;
    this.chain = chain;
  }
}
