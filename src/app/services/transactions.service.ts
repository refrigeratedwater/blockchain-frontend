import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transactions } from '../models/Models';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private API_URL = 'http://localhost:5000'
  
  constructor(private http: HttpClient) { }

  addTransaction(data: Transactions): Observable<any> {
    const formData: FormData = new FormData()
    formData.append('author', data.email)
    formData.append('email', data.email)
    formData.append('file', data.file)
    

    return this.http.post(`${this.API_URL}/add_transaction`, formData)
  }
}
