import { Component, OnInit, Input } from '@angular/core';
import { ExerciseOneTableModel } from '../../../models/exerciseOneTable.model';

@Component({
  selector: 'app-exercise-one-table',
  templateUrl: './exercise-one-table.component.html',
  styleUrls: ['./exercise-one-table.component.scss']
})
export class ExerciseOneTableComponent implements OnInit {
  @Input() numberArray: ExerciseOneTableModel;

  constructor() { }

  ngOnInit() {

  }

}
