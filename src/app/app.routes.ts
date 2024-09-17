import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Redirect to products by default
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.component').then((m) => m.ProductsComponent),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.component').then((m) => m.AuthComponent),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./checkout/checkout.component').then((m) => m.CheckoutComponent),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.component').then((m) => m.AdminComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
