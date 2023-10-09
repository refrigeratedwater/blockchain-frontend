import { Component, OnInit } from '@angular/core';
import { Author, Authors } from 'src/app/models/Author';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.scss'],
})
export class ViewAuthorComponent implements OnInit {
  author!: Author;
  authors: Authors = new Authors([]);
  searchedAuthorName: string = '';

  constructor(private blockchainService: BlockchainService) {}

  getAuthorFiles(searchedAuthorName: string) {
    this.blockchainService.getAuthorFiles(searchedAuthorName).subscribe(
      (data) => {
        console.log(data);
        this.author = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSearchAuthor() {
    if (!this.searchedAuthorName.trim()) {
      alert('Please enter an author name.');
      return;
    }
    if (this.authors.authorList.includes(this.searchedAuthorName)) {
      this.getAuthorFiles(this.searchedAuthorName);
    } else {
      alert('Author does not exist.');
    }
  }

  getAuthors() {
    this.blockchainService.getAuthors().subscribe(
      (data) => {
        this.authors = data;
        console.log(this.authors);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getAuthors();
  }
}
