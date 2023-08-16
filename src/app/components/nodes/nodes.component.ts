import { Component, OnInit } from '@angular/core';
import { Blockchain } from 'src/app/models/Blockchain';
import { BlockchainService } from 'src/app/services/blockchain.service';
@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss'],
})
export class NodesComponent implements OnInit {
  blockchain!: Blockchain;
  newNodeAddress = '';

  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {
    this.getBlockchain();
  }

  getBlockchain(): void {
    this.blockchainService.getBlockchain().subscribe((data) => {
      this.blockchain = data;
    });
  }

  register(): void {
    this.blockchainService.registerNode(this.newNodeAddress).subscribe(() => {
      this.newNodeAddress = '';
      this.getBlockchain();
    });
  }
}
