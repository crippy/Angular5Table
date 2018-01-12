import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Definition } from '../interfaces';

@Component({
  selector: 'allsop-column-data',
  template: `
  <p *ngIf="definition.type === 'string'">{{data}}</p> <p *ngIf="definition.type === 'date'">{{data | date: 'dd/MM/yyyy HH:mm'}}</p> <div class="button-container" *ngIf="definition.type === 'button'"> <div class="button {{btn.class}}" *ngFor="let btn of definition.values" (click)="btn.callback($event, btn)"> <div *ngIf="btn.icon !== ''" class="icon icon-{{btn.icon}}"></div> <div class="label">{{btn.key ? data[btn.key] : btn.label}}</div> </div> </div> <div class="checkbox-container" *ngIf="definition.type === 'checkbox'"> <input type="checkbox" [checked]="data === true" [disabled]="data === -1" (change)="onCallBack($event)"> </div>
  `
})

export class ColumnDataComponent {
  @Input('data') data: any;
  @Input('index') index: number;
  @Input('key') key: string;
  @Input('definition') definition: Definition;
  @Output('callback') callback = new EventEmitter<any>();

  getTypeOfData() {
    return typeof this.data;
  }

  onCallBack(event) {
    this.callback.emit({ event: event, index: this.index, key: this.key });
  }
}
