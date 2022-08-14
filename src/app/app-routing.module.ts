import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component'
import {BoardComponent} from './board/board.component'
import {DocComponent} from './doc/doc.component'

const routes: Routes = [{path: '', component: MainComponent}, {path: 'board/:boardId', component: BoardComponent}, {path: 'doc/:docId', component: DocComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
