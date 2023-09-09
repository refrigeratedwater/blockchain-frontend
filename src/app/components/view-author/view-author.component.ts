import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/Author';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.scss'],
})
export class ViewAuthorComponent implements OnInit {
  author!: Author;
  authors: Author[] = [];

  constructor(private blockchainService: BlockchainService) {}

  getAuthorFiles() {
    const authorName = 'admin';
    this.blockchainService.getAuthorFiles(authorName).subscribe(
      (data) => {
        console.log(data);
        this.author = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAuthors() {
    this.blockchainService.getAuthors().subscribe(
      (data: any) => {
        this.authors = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getAuthorFiles();
  }
}
