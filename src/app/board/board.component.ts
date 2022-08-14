import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Board, boards } from '../../dataObj';
import {
  faSquareXmark,
  faSquarePlus,
  faSquareMinus,
  faSquarePen,
  faSquareArrowUpRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  board: Board | undefined;
  faSquareXmark = faSquareXmark;
  faSquarePlus = faSquarePlus;
  faSquareMinus = faSquareMinus;
  faSquarePen = faSquarePen;
  newTableState: boolean = false;
  newInputState: boolean = false;
  newTableTitleState: boolean = false;
  tableSelected: number = 0;
  titleInput: string = '';
  newInput: string = '';
  faSquareArrowUpRight = faSquareArrowUpRight;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('boardId'));

    this.board = boards.find((product) => product.id === productIdFromRoute);
  }

  addTable(input?: string) {
    if (!this.newTableState && input === 'add') {
      this.newTableState = true;
      return;
    }
    if (this.newTableState && input === 'close') {
      if (this.newTableTitleState) {
        this.newTableTitleState = false;
      }
      this.newTableState = false;
      return;
    }
    if (input === 'toTitle') {
      this.newTableTitleState = true;
      return;
    }
    this.board?.tables?.push({
      type: 'chackList',
      title: this.titleInput,
      inputs: [],
    });
    this.titleInput = '';
    this.newTableTitleState = false;
    this.newTableState = false;
  }

  addInput(tableIndex?: number, action?: boolean) {
    if(this.board && this.board.tables){
    if (action) {
      if (this.newInput === '') {
        return;
      }
      this.board.tables[tableIndex || 0].inputs?.push({
        input: this.newInput,
        state: false,
      });
      this.newInputState = false;
      this.newInput = '';
      return;
    }
    this.newInputState = true;
    this.tableSelected = tableIndex || 0;
  }
  }

  editInput(tableIndex: number, inputIndex: number) {
    if(this.board && this.board.tables){
      this.board.tables[tableIndex].inputs?.map((item, index) => {
        if (inputIndex === index) {
          this.newInput = item.input;
        }
      });
      this.board.tables[tableIndex].inputs?.splice(inputIndex, 1);
      this.newInputState = true;
      this.tableSelected = tableIndex;
    }
  }

  removeFunc(index: number, action: string, tableIndex?: number) {
    if(this.board && this.board.tables){
    if (action === 'table') {
      this.board.tables.splice(index, 1);
    }
    if (action === 'input') {
      this.board.tables[tableIndex || 0].inputs?.splice(index, 1);
    }
  }
  }

  markDone(tableIndex: number, inputIndex: number) {
    if(this.board && this.board.tables){
        this.board.tables[tableIndex].inputs?.map((item, index) => {
          if (inputIndex === index) {
            item.state = !item.state;
          }
        });
    }
  }
}
