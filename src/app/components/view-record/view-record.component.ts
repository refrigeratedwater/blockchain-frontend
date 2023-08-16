import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Blockchain } from 'src/app/models/Blockchain';

@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.component.html',
  styleUrls: ['./view-record.component.scss']
})
export class ViewRecordComponent implements OnInit{
  blockchain!: Blockchain
  constructor(private blockchainService: BlockchainService) { }

  ngOnInit(): void {
    this.blockchainService.getBlockchain().subscribe(data => {
      this.blockchain = data;
      console.log(this.blockchain)
    });
  }

}
