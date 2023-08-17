import { Component, OnInit} from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transaction } from 'src/app/models/Transaction';
import { Blockchain } from 'src/app/models/Blockchain';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss'],
})
export class AddRecordComponent{
  transaction: Transaction = new Transaction('', '', null);
  pendingTransactions: Transaction[] = [];
  mineTransaction!: Blockchain

  load_pending = false
  constructor(private blockchainService: BlockchainService) {}

  fetchPendingTransactions(): void {
    this.blockchainService.getPending().subscribe((transactions) => {
      this.pendingTransactions = transactions;
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.transaction.file = event.target.files[0];
    }
  }

  submit() {
    if (
      this.transaction.author &&
      this.transaction.email &&
      this.transaction.file
    ) {
      this.blockchainService
        .addTransaction(this.transaction)
        .subscribe((response) => {
          if (response.status === 'Success') {
            alert('Transaction added successfully!');
            this.transaction = new Transaction('', '', null);
            this.load_pending = true
            if (this.load_pending) {
              this.fetchPendingTransactions()
            }
            
          } else {
            alert('Error adding transaction!');
          }
        });
    } else {
      alert('Please fill all fields.');
    }
  }

  mine() {
    this.blockchainService.mineTransaction().subscribe(data =>{
      this.mineTransaction = data
      console.log(this.mineTransaction)
    })
  }
}
