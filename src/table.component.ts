import { Component, OnInit, Input } from '@angular/core';
import { TableData } from './interfaces';

@Component({
  selector: 'robinsons-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input('data') data: TableData = { fields: [], data: [] };
  @Input('totalRecordCount') totalRecordCount: number = 0;

  constructor() { }

  ngOnInit() { }



}
