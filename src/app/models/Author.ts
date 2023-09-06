export class Author {
  name: string;
  files: string[];

  constructor(name: string, files: string[] = []) {
    this.name = name;
    this.files = files;
  }
}
