import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  /**
   * GetExpenseCategories
   */
  public GetCategories() {
    
  }

  public AddCategory() {

  }
}