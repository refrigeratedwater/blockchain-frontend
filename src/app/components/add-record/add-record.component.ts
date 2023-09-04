import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transaction } from 'src/app/models/Transaction';
import { Blockchain } from 'src/app/models/Blockchain';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss'],
})
export class AddRecordComponent {
  transaction: Transaction = new Transaction('', '', null, '');
  mineTransaction!: Blockchain;

  constructor(private blockchainService: BlockchainService) {}

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      this.transaction.file = file;

      this.transaction.fileName = file.name;
    }
  }

  submit() {
    if (
      this.transaction.author &&
      this.transaction.email &&
      this.transaction.file
    ) {
      console.log("Transaction before sending:", this.transaction)
      this.blockchainService.addTransaction(this.transaction).subscribe({
        next: (response) => {
          this.transaction = new Transaction('', '', null, '');
          this.mine();
          alert('Transaction added successfully!');
        },
        error: (error) => {
          console.error('Error adding transaction: ', error);
          alert('Error adding trnasaction. Please try again');
        },
      });
    } else {
      alert('Please fill all fields.');
    }
  }

  mine() {
    this.blockchainService.mineTransaction().subscribe((data) => {
      this.mineTransaction = data;
      console.log(this.mineTransaction);
    });
  }
}
