export class File {
  name: string;
  cid: string;

  constructor(name: string, cid: string) {
    this.name = name;
    this.cid = cid;
  }
}

export class Author {
  author: string;
  files: File[];

  constructor(author: string, files: File[]) {
    this.author = author;
    this.files = files;
  }
}