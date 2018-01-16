import {
  Component,
  ViewChildren,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  QueryList,
  NgZone
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

import { Definition } from '../interfaces';

@Component({
  selector: 'allsop-column-data',
  template: `
    <p *ngIf="definition.type === 'string'">{{data}}</p>
    <p *ngIf="definition.type === 'date'">{{data | date: 'dd/MM/yyyy HH:mm'}}</p>

    <div class="input-container" *ngIf="definition.type === 'input'">
      <input
        #input
        class="table-input {{getClasses(inp)}}"
        *ngFor="let inp of definition.values"
        (blur)="onCallBack($event, inp)"
        [value]="data[inp.key]"
      />
    </div>

    <div class="button-container" *ngIf="definition.type === 'button'">
      <div class="button {{btn.class}}" *ngFor="let btn of definition.values" (click)="btn.callback($event, btn)">
        <div *ngIf="btn.icon !== ''" class="icon icon-{{btn.icon}}"></div>
        <div class="label">{{btn.key ? data[btn.key] : btn.label}}</div>
      </div>
    </div>

    <div class="checkbox-container" *ngIf="definition.type === 'checkbox'">
      <input type="checkbox" [checked]="data === true" [disabled]="data === -1" (change)="onCallBack($event)" />
    </div>
  `
})

export class ColumnDataComponent {
  @Input('data') data: any;
  @Input('index') index: number;
  @Input('key') key: string;
  @Input('definition') definition: Definition;
  @Output('callback') callback = new EventEmitter<any>();
  @ViewChildren('input') inputs: QueryList<ElementRef>;

  constructor(private ngzone: NgZone) { }

  getTypeOfData() {
    return typeof this.data;
  }

  ngAfterViewInit() {
    const self = this;
    self.inputs.forEach((input, index) => {
      self.ngzone.runOutsideAngular(() => {
        Observable.fromEvent(input.nativeElement, 'keyup')
          .debounceTime(500)
          .subscribe((event: any) => {
            self.callback.emit({ event: event, index: self.index, key: self.key, data: { key: Object.keys(self.data)[index] } })
          });
      });
    });
  }

  getClasses(el) {
    if ('class' in el && el.class !== '') {
      if (typeof el.class === 'function') {
        return el.class({
          el,
          index: this.index,
          data: this.data,
          key: this.key
        });
      } else if (typeof el.class === 'string') {
        return el.class;
      } else if (Array.isArray(el.class)) {
        return el.class.join(' ');
      }
    }

    return '';
  }

  onCallBack(event, data) {
    this.callback.emit({ event: event, index: this.index, key: this.key, data });
  }
}
