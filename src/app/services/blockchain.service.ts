import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Transactions } from '../models/Models';
import { Blockchain } from '../models/Blockchain';
@Injectable({
  providedIn: 'root',
})
export class BlockchainService {
  private API_URL = 'http://localhost:5000/';

  constructor(private http: HttpClient) {}

  registerNode(nodeAddress: string): Observable<any> {
    const url = `${this.API_URL}register`;
    return this.http.post(url, { node_address: nodeAddress });
  }

  getBlockchain(): Observable<Blockchain> {
    const url = `${this.API_URL}chain`;
    return this.http.get<Blockchain>(url);
  }

  addTransaction(transaction: Transactions): Observable<any> {
    const formData = new FormData();
    formData.append('author', transaction.author);
    formData.append('email', transaction.email);
    formData.append('file', transaction.file);
    return this.http.post(`${this.API_URL}add/transaction`, formData);
  }
}
