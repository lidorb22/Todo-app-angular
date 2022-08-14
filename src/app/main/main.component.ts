import { Component, OnInit } from '@angular/core';
import { boards, docs } from '../../dataObj';
import {
  faSquareMinus,
  faSquareXmark,
  faSquarePlus,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  boards: any = boards;
  faSquareMinus = faSquareMinus;
  faSquarePlus = faSquarePlus;
  faSquareXmark = faSquareXmark;
  faSquareCheck = faSquareCheck;
  newBoardState: boolean = false;
  worningState: boolean = false;
  inputField: string = '';
  newBoardIndex: number = 0;
  docs: any = docs;
  constructor() {}

  ngOnInit() {}

  addBoard(name?: string) {
    if (this.newBoardState) {
      switch (name) {
        case 'addButt':
          break;
        case 'close':
          this.newBoardState = false;
          this.inputField = '';
          break;
        case 'add':
          this.boards.push({
            id: this.boards.length + 1,
            name: this.inputField,
            tables: [],
          });
          this.newBoardState = false;
          this.inputField = '';
          break;
      }
      return;
    }
    this.newBoardState = true;
  }
  removeBoard(action: string, boardIndex?: number) {
    if (this.worningState && action === 'remove') {
      this.boards.splice(this.newBoardIndex, 1);
      this.newBoardIndex = 0;
      this.worningState = false;
      return;
    }
    if (this.worningState && action === 'exit') {
      this.newBoardIndex = 0;
      this.worningState = false;
      return;
    }
    this.worningState = true;
    this.newBoardIndex = boardIndex || 0;
}
}
