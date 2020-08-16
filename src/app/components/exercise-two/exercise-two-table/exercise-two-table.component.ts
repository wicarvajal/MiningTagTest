import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ExerciseTwoTableModel } from 'src/app/models/exerciseTwoTable.model';

@Component({
  selector: 'app-exercise-two-table',
  templateUrl: './exercise-two-table.component.html',
  styleUrls: ['./exercise-two-table.component.scss']
})
export class ExerciseTwoTableComponent implements OnInit {
  @Input() processedParagraphs: ExerciseTwoTableModel[];
  @Input() alphabet: string[];

  constructor() { }

  ngOnInit() {
  }

}
