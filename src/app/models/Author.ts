export class VersionInfo {
  current: string;
  previous?: string;

  constructor(current: string, previous?: string) {
    this.current = current;
    if (previous) this.previous = previous;
  }
}

export class File {
  name: string;
  cids: VersionInfo;

  constructor(name: string, cids: VersionInfo) {
    this.name = name;
    this.cids = cids;
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
