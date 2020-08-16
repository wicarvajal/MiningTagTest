import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph-list',
  templateUrl: './paragraph-list.component.html',
  styleUrls: ['./paragraph-list.component.scss']
})
export class ParagraphListComponent implements OnInit {
  @Input() paragraphs: string[];

  constructor() { }

  ngOnInit() {
  }

}
