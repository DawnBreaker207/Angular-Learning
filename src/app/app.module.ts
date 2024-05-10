import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentAddComponent } from './components/student-add/student-add.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductDetailComponent,
    StudentListComponent,
    StudentAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
