import { Routes } from '@angular/router';

export const CATEGORIES_ROUTES: Routes = [
  {
    path: "",
    providers: [
    ],
    loadComponent: () =>
      import("./categories-form/categories-form.component").then(m => m.CategoriesFormComponent)
  }
];