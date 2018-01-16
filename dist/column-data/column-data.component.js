"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/throttleTime");
require("rxjs/add/observable/fromEvent");
let ColumnDataComponent = class ColumnDataComponent {
    constructor(ngzone) {
        this.ngzone = ngzone;
        this.callback = new core_1.EventEmitter();
    }
    getTypeOfData() {
        return typeof this.data;
    }
    ngAfterViewInit() {
        const self = this;
        self.inputs.forEach((input, index) => {
            self.ngzone.runOutsideAngular(() => {
                Observable_1.Observable.fromEvent(input.nativeElement, 'keyup')
                    .debounceTime(500)
                    .subscribe((event) => {
                    self.callback.emit({ event: event, index: self.index, key: self.key, data: { key: Object.keys(self.data)[index] } });
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
            }
            else if (typeof el.class === 'string') {
                return el.class;
            }
            else if (Array.isArray(el.class)) {
                return el.class.join(' ');
            }
        }
        return '';
    }
    onCallBack(event, data) {
        this.callback.emit({ event: event, index: this.index, key: this.key, data });
    }
};
__decorate([
    core_1.Input('data'),
    __metadata("design:type", Object)
], ColumnDataComponent.prototype, "data", void 0);
__decorate([
    core_1.Input('index'),
    __metadata("design:type", Number)
], ColumnDataComponent.prototype, "index", void 0);
__decorate([
    core_1.Input('key'),
    __metadata("design:type", String)
], ColumnDataComponent.prototype, "key", void 0);
__decorate([
    core_1.Input('definition'),
    __metadata("design:type", Object)
], ColumnDataComponent.prototype, "definition", void 0);
__decorate([
    core_1.Output('callback'),
    __metadata("design:type", Object)
], ColumnDataComponent.prototype, "callback", void 0);
__decorate([
    core_1.ViewChildren('input'),
    __metadata("design:type", core_1.QueryList)
], ColumnDataComponent.prototype, "inputs", void 0);
ColumnDataComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], ColumnDataComponent);
exports.ColumnDataComponent = ColumnDataComponent;
