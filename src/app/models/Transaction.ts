import { File, VersionInfo } from './Author';

export class ChainInfo {
  versions: VersionInfo;

  constructor(versions: VersionInfo) {
    this.versions = versions;
  }
}

export class Transaction {
  author: string;
  email: string;
  file_info!: File | null;
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
