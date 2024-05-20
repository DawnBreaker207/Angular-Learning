import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: 'products', component: ProductsListComponent },
      { path: 'add', component: ProductsAddComponent },
      { path: 'products/:id', component: ProductDetailComponent },
    ],
  },
  {
    path: 'dashboard',
    children: [
      { path: '', component: AdminComponent },
      { path: 'products', component: StudentListComponent },
      { path: 'add', component: StudentAddComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
