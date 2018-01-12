import { Component, Input } from '@angular/core';
import { TableData } from './interfaces';

@Component({
  selector: 'allsop-table',
  template: `
  <div class="table"><div class="pagination" *ngIf="pagination"><span class="total-pages">{{totalRecordCount}} of 56 items</span><div class="pagination-options"><div class="page-size"><select><option value="25">25</option></select> per page</div><div class="page-selector"><div class="btn btn-prev">&lt;</div><input type="text" value="1"> of 3<div class="btn btn-next">&gt;</div></div></div></div><div class="heading"><div class="column" *ngFor="let header of data.fields"><allsop-column-header [data]="header"></allsop-column-header></div></div><div class="filters"><div class="column" *ngFor="let header of data.fields"><allsop-table-filter [filter]="header.filter" [key]="header.key" (callback)="header.filter.callback($event)"></allsop-table-filter></div></div><div class="body"><div class="row" *ngFor="let row of data.data; let i = index"><div class="column" *ngFor="let header of data.fields"><allsop-column-data [data]="row[header.key]" [index]="i" [definition]="header.definition" [key]="header.key" (callback)="header.definition.callback($event)"></allsop-column-data></div></div></div></div>
  `
})
export class TableComponent {
  @Input('data') data: TableData = { fields: [], data: [] };
  @Input('totalRecordCount') totalRecordCount: number = 0;
  @Input('pagination') boolean: true;
}
