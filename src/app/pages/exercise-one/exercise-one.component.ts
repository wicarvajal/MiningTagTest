import { Component, OnInit } from '@angular/core';
import { ExerciseOneService } from '../../services/exercise-one.service';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
})
export class ExerciseOneComponent implements OnInit {
  public numberArray: number[];

  constructor(private exerciseOneSvc: ExerciseOneService) { }

  ngOnInit() {
  }

  getArrayData() {
    this.exerciseOneSvc.getExerciseOneArray().subscribe(({ data }) => {
      this.numberArray = [...data];
    });
  }

}
