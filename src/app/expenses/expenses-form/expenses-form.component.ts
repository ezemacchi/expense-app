import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FirebaseService } from '../../services/firabase.service';
import { Category } from '../../models/category';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-expenses-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './expenses-form.component.html',
  styleUrl: './expenses-form.component.css'
})
export class ExpensesFormComponent {

  expenseForm = new FormGroup({
    amount: new FormControl(),
    category: new FormControl()
  });

  private firebaseService: FirebaseService = inject(FirebaseService);
  categories: Category[] = [];

  ngOnInit() {

    this.getAllCategories();
  }

  getAllCategories() {
    this.firebaseService
      .GetCategories()
      .subscribe((c) => (this.categories = c));
  }
}
