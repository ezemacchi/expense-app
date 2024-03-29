import { Component, inject } from '@angular/core';
import { FirebaseService } from '../services/firabase.service';
import { Category } from '../models/category';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgFor],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  private firebaseService: FirebaseService = inject(FirebaseService);
  categories: Category[] = [];

  getAllCategories() {
    this.firebaseService
      .GetCategories()
      .subscribe((c) => (this.categories = c));
  }
}
