import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Transaction } from '../models/Transaction';
import { Blockchain } from '../models/Blockchain';

@Injectable({
  providedIn: 'root',
})
export class BlockchainService {
  private API_URL = 'http://localhost:5000/';

  constructor(private http: HttpClient) {}

  registerNode(nodeAddress: string): Observable<any> {
    const url = `${this.API_URL}nodes/register`;
    return this.http.post(url, { nodes: [nodeAddress] });
  }

  getBlockchain(): Observable<Blockchain> {
    const url = `${this.API_URL}chain`;
    return this.http.get<Blockchain>(url)
  }

  getFile(cid: string): Observable<Blob> {
    const url = `${this.API_URL}get/file/${cid}`;
    return this.http.get(url, { responseType: 'blob' });
  }

  getPending(): Observable<Transaction[]> {
    const url = `${this.API_URL}pending/tx`;
    return this.http.get<Transaction[]>(url);
  }

  addTransaction(transaction: Transaction): Observable<any> {
    const url = `${this.API_URL}add/transaction`;

    const formData = new FormData();
    formData.append('author', transaction.author);
    formData.append('email', transaction.email);
    formData.append('file', transaction.file as any);
    formData.append('fileName', transaction.fileName);
    
    return this.http.post(url, formData);
  }

  mineTransaction(): Observable<any> {
    const url = `${this.API_URL}mine`;
    return this.http.get(url);
  }
}
