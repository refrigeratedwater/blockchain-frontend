import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { ChainInfo, Transaction } from 'src/app/models/Transaction';
import { Blockchain } from 'src/app/models/Blockchain';
import { File, VersionInfo } from 'src/app/models/Author';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss'],
})
export class AddRecordComponent {
  transaction: Transaction = new Transaction(
    '',
    '',
    null,
    '',
    new ChainInfo(new VersionInfo('', ''))
  );

  mineTransaction!: Blockchain;
  isLoading = false;

  constructor(private blockchainService: BlockchainService) {}
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      this.transaction.file_info = file;

      this.transaction.fileName = file.name;
    }
  }

  submit() {
    if (
      this.transaction.author &&
      this.transaction.email &&
      this.transaction.file_info
    ) {
      this.isLoading = true;
      this.blockchainService.addTransaction(this.transaction).subscribe({
        next: (response) => {
          this.transaction = new Transaction(
            '',
            '',
            null,
            '',
            new ChainInfo(new VersionInfo('', ''))
          );
          this.mine();
          this.isLoading = false;
          alert('Record added to blockchain')
          console.log(response);
        },
        error: (error) => {
          console.error('Error adding transaction: ', error);
          this.isLoading = false;
          alert('Error adding transaction. Please try again');
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
