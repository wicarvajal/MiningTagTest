import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { ExerciseOneTableModel } from '../../../models/exerciseOneTable.model';
import * as _ from 'lodash';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-exercise-one-form',
  templateUrl: './exercise-one-form.component.html',
  styleUrls: ['./exercise-one-form.component.scss']
})
export class ExerciseOneFormComponent implements OnInit, OnChanges {
  @Output() getArrayData = new EventEmitter<any>();
  @Input() public numberArray: number[];
  numberArrayProcessed: ExerciseOneTableModel[] = [];
  exerciseOneForm: FormGroup;
  orderedNumbers: FormControl;

  constructor(private ref: ChangeDetectorRef, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.exerciseOneForm = this.fb.group({
      orderedNumbers: new FormControl()
    });
  }

  emitGetArrayData() {
    this.getArrayData.emit();
    this.ref.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.numberArray && this.numberArray) {
      this.numberArrayProcessed = _.uniqBy(this.formatNumberArray(this.numberArray), 'processedNumber');
      this.displayOrderedNumbers();
    }
  }

  formatNumberArray(numberArray: number[]) {
    this.numberArrayProcessed = [];

    for (const [i, numb] of numberArray.entries()) {
      const numbItem = this.mapperNumberArrayToTableModel(i, numb);
      this.numberArrayProcessed.push(numbItem);
    }

    return this.numberArrayProcessed;
  }

  private mapperNumberArrayToTableModel(i: number, numb: number) {
    return {
      index: i,
      processedNumber: numb,
      quantity: _.filter(this.numberArray, (v) => numb === v).length,
      firstPosition: _.findIndex(this.numberArray, (v) => numb === v),
      lastPosition: _.findLastIndex(this.numberArray, (v) => numb === v),
    } as ExerciseOneTableModel;
  }

  displayOrderedNumbers() {
    this.exerciseOneForm.get('orderedNumbers').patchValue(_.uniq(_.orderBy(this.numberArray)).join(' - '));
  }
}
