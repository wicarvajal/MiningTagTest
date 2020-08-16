import { Component, OnInit } from '@angular/core';
import { ExerciseTwoService } from '../../services/exercise-two.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
})
export class ExerciseTwoComponent implements OnInit {
  paragraphs: string[];

  constructor(private exerciseTwoSvc: ExerciseTwoService) { }

  ngOnInit() {

  }

  getArrayData() {
    this.exerciseTwoSvc.getParagraphArray().subscribe(({ data }) => {
      const dataArray = JSON.parse(data);
      this.paragraphs = _.map(dataArray, 'paragraph');

      // console.log(jaon);
    });
  }

}
