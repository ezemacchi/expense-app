import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotionService {

  constructor(client: HttpClient) { }

  /**
   * GetExpenseCategories
   */
  public GetExpenseCategories() {
    
  }
}
