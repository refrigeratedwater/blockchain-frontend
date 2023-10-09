import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Blockchain } from 'src/app/models/Blockchain';

@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.component.html',
  styleUrls: ['./view-record.component.scss'],
})
export class ViewRecordComponent implements OnInit {
  blockchain!: Blockchain;
  isLoading = false;
  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {
    this.getChain()
  }

  getChain() {
    this.blockchainService.getBlockchain().subscribe((data) => {
      this.isLoading = true
      this.blockchain = data;
      console.log(this.blockchain.chain);
      this.isLoading = false
    });
  }

  downloadFile(cid: string, fileName: string): void {
    this.isLoading = true;
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
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error downloading the file', error);
        this.isLoading = false;
      },
      () => console.log('File Downloaded')
    );
  }
}
