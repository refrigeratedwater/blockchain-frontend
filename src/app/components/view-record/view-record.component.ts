import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Blockchain } from 'src/app/models/Blockchain';
import { Transaction } from 'src/app/models/Transaction';

@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.component.html',
  styleUrls: ['./view-record.component.scss'],
})
export class ViewRecordComponent implements OnInit {
  blockchain!: Blockchain;
  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {
    this.blockchainService.getBlockchain().subscribe((data) => {
      this.blockchain = data;
      console.log(this.blockchain.chain);
    });
  }

  downloadFile(cid: string, fileName: string): void {
    this.blockchainService.getFile(cid).subscribe(
      (data: Blob) => {
        const type = data.type;
        const blob = new Blob([data], { type });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
      },
      (error: any) => {
        console.error('Error downloading the file', error);
      },
      () => console.log('File Downloaded')
    );
  }
}
