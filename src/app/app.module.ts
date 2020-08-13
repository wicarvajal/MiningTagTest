import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ExerciseOneComponent } from './pages/exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './pages/exercise-two/exercise-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseOneComponent,
    ExerciseTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
