import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore

  constructor(private http: HttpClient, private store: Firestore) { }

  public GetCategories() {
    const categoryCollection = collection(this.firestore, 'categories');
    return collectionData(categoryCollection) as Observable<Category[]>
  }

  public AddCategory() {

  }
}
