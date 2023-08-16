import { Component } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transactions } from 'src/app/models/Models';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss'],
})
export class AddRecordComponent {
  transaction: Transactions = { author: '', email: '', file: null };

  constructor(private blockchainService: BlockchainService) {}

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.transaction.file = event.target.files[0];
    }
  }

  submit(): void {
    this.blockchainService
      .addTransaction(this.transaction)
      .subscribe((response) => {
        console.log('Transaction added:', response);
        
      });
  }
}
