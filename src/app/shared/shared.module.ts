import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    NavbarComponent,
    SidebarComponent,
    FontAwesomeModule
  ]
})
export class SharedModule {}
