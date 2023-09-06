import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/Author';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.scss']
})
export class ViewAuthorComponent implements OnInit{
  author!: Author
  constructor(private blockchainService: BlockchainService) {}
  
  getAuthors() {
    const authorName = 'admin'
    this.blockchainService.getAuthors(authorName).subscribe(data => {
      console.log(data)
      this.author = data
    })
  }
  ngOnInit(): void {
   this.getAuthors()   
  }
}
