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
      console.log(this.blockchain.chain)
    });
  }

  downloadFile(cid: string, fileName: string, fileType: string): void {
    this.blockchainService.getFile(cid).subscribe(
      (data: Blob) => {
        const blob = new Blob([data], { type: fileType });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      },
      (error: any) => console.error(error)
    );
  }

}
