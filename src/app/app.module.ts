import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { VerifyComponent } from './verify/verify.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo:'auth'
  },
  {
    path: 'auth', component: VerifyComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    VerifyComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
