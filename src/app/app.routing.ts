import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseOneComponent } from './pages/exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './pages/exercise-two/exercise-two.component';


const routes: Routes = [
  { path: '', redirectTo: '/exercise-one', pathMatch: 'full' },
  { path: 'exercise-one', component: ExerciseOneComponent },
  { path: 'exercise-two', component: ExerciseTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
