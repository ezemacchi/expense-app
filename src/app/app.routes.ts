import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'expenses',
    loadChildren: () =>
      import('./expenses/expenses.routes').then((m) => m.EXEPENSES_ROUTES),
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./categories/categories.component').then(
        (m) => m.CategoriesComponent
      ),
  },
];
