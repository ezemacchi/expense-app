import { Routes } from '@angular/router';

export const EXEPENSES_ROUTES: Routes = [
  {
    path: "",
    providers: [
    ],
    loadComponent: () =>
      import("./expenses-form/expenses-form.component").then(m => m.ExpensesFormComponent)
  }
];