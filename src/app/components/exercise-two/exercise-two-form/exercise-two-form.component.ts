import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { AlphabetOccurrence, ExerciseTwoTableModel } from '../../../models/exerciseTwoTable.model';
import * as _ from 'lodash';
import { showLoading } from '../../../shared/utils/swalLoading';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise-two-form',
  templateUrl: './exercise-two-form.component.html',
  styleUrls: ['./exercise-two-form.component.scss']
})
export class ExerciseTwoFormComponent implements OnInit, OnChanges {
  @Output() getArrayData = new EventEmitter<any>();
  @Input() public paragraphArray: string[];

  alphabet = new Array(
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  );
  proccessedParagraphs: ExerciseTwoTableModel[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.paragraphArray && this.paragraphArray) {
      this.processParagraphArray();
    }
  }

  processParagraphArray() {
    this.proccessedParagraphs = [];

    for (const [i, paragraph] of this.paragraphArray.entries()) {
      const splittedParagraph = paragraph.toLowerCase().split('');
      const alphabetOccurrences = this.findAlphabetOccurrences(splittedParagraph);

      const proccesedParagraph = {
        index: i,
        processedParagraph: paragraph,
        alphabetOccurrences,
        numberAccumulator: this.findNumbersAndAccum(paragraph)
      } as ExerciseTwoTableModel;

      this.proccessedParagraphs.push(proccesedParagraph);
    }

    Swal.close();
  }

  private findAlphabetOccurrences(splittedParagraph: string[]) {
    const alphabetOccurrences: AlphabetOccurrence[] = [];
    for (const character of this.alphabet) {
      alphabetOccurrences.push({
        character,
        occurrenceCounter: splittedParagraph.filter(c => c === character).length,
      });
    }
    return alphabetOccurrences;
  }

  findNumbersAndAccum(paragraph: string): number {
    const numbersInParagraph = paragraph.match(/[0-9]+/g);
    // console.log(numbersInParagraph);
    return _.sumBy(numbersInParagraph, (n) => _.toNumber(n));
  }

  emitGetArrayData() {
    showLoading();
    this.getArrayData.emit();
  }
}
