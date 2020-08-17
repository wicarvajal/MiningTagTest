import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ExerciseOneComponent } from './pages/exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './pages/exercise-two/exercise-two.component';
import { ExerciseOneService } from './services/exercise-one.service';
import { ExerciseOneFormComponent } from './components/exercise-one/exercise-one-form/exercise-one-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ExerciseOneTableComponent } from './components/exercise-one/exercise-one-table/exercise-one-table.component';
import { ExerciseTwoService } from './services/exercise-two.service';
import { ExerciseTwoFormComponent } from './components/exercise-two/exercise-two-form/exercise-two-form.component';
import { ExerciseTwoTableComponent } from './components/exercise-two/exercise-two-table/exercise-two-table.component';
import { ParagraphListComponent } from './components/exercise-two/paragraph-list/paragraph-list.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseOneComponent,
    ExerciseTwoComponent,
    ExerciseOneFormComponent,
    ExerciseOneTableComponent,
    ExerciseTwoFormComponent,
    ExerciseTwoTableComponent,
    ParagraphListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    ExerciseOneService,
    ExerciseTwoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
