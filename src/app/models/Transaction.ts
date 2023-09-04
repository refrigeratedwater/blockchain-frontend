export class Transaction {
  author: string;
  email: string;
  file: File | string | null;
  fileName: string;

  constructor(
    author: string,
    email: string,
    file: File | null,
    fileName: string,
  ) {
    this.author = author;
    this.email = email;
    this.file = file;
    this.fileName = fileName;
  }
}
