import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-exercise-two-form',
  templateUrl: './exercise-two-form.component.html',
  styleUrls: ['./exercise-two-form.component.scss']
})
export class ExerciseTwoFormComponent implements OnInit, OnChanges {
  @Output() getArrayData = new EventEmitter<any>();
  @Input() public paragraphArray: string[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.paragraphArray) {
      console.log(this.paragraphArray);
    }
  }

  emitGetArrayData() {
    this.getArrayData.emit();
  }
}
