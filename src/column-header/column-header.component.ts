import { Component, Input } from '@angular/core';
import { Field } from '../interfaces';

@Component({
  selector: 'allsop-column-header',
  template: `
    <div class="title">{{data.title}}</div> <span *ngIf="data.sorting !== undefined" (click)="data.sorting.callback($event, data.key)"> <i *ngIf="data.sorting.value === -1">asc</i> <i *ngIf="data.sorting.value === 0">desc</i> <i *ngIf="data.sorting.value === 1">-</i> </span>
  `
})

export class ColumnHeaderComponent {
  @Input('data') data: Field;
}
