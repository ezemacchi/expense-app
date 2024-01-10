import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-expenses-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './expenses-form.component.html',
  styleUrl: './expenses-form.component.css'
})
export class ExpensesFormComponent {
  expenseForm = new FormGroup({
    amount: new FormControl(),
    category: new FormControl()
  });
}
