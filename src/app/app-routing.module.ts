import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './components/delete/delete.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SiginComponent } from './components/sigin/sigin.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: 'products', component: ProductsListComponent },
      { path: 'add', component: ProductsAddComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SiginComponent },
    ],
  },
  {
    path: 'dashboard',
    children: [
      { path: '', component: AdminComponent },
      { path: 'products', component: StudentListComponent },
      { path: 'add', component: StudentAddComponent },
      { path: 'edit/:id', component: StudentEditComponent },
      { path: 'delete/:id', component: DeleteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
