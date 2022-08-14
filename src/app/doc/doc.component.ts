import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc, docs } from '../../dataObj';
import {
  faSquareArrowUpRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {
  docs: Doc | undefined;
  faSquareArrowUpRight=faSquareArrowUpRight;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('docId'));

    this.docs = docs.find((product) => product.id === productIdFromRoute);
  }

}
