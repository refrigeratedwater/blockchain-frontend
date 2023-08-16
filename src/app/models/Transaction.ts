export class Transaction {
    author: string;
    email: string;
    file: File | null;
  
    constructor(author: string, email: string, file: File | null) {
      this.author = author;
      this.email = email;
      this.file = file;
    }
  }
  