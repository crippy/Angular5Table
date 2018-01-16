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
let ColumnFilterComponent = class ColumnFilterComponent {
    constructor(ngzone) {
        this.ngzone = ngzone;
        this.key = '';
        this.filter = { type: '' };
        this.callback = new core_1.EventEmitter();
        this.robinsonsDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
        };
    }
    ngAfterViewInit() {
        const self = this;
        if (this.el) {
            this.ngzone.runOutsideAngular(() => {
                Observable_1.Observable.fromEvent(this.el.nativeElement, 'keyup')
                    .debounceTime(300)
                    .subscribe((event) => {
                    self.callback.emit({ key: self.key, value: event.target.value, type: self.filter.type });
                });
            });
        }
    }
    change(event) {
        this.callback.emit({ key: this.key, value: event, type: this.filter.type });
    }
};
__decorate([
    core_1.Input('key'),
    __metadata("design:type", String)
], ColumnFilterComponent.prototype, "key", void 0);
__decorate([
    core_1.Input('filter'),
    __metadata("design:type", Object)
], ColumnFilterComponent.prototype, "filter", void 0);
__decorate([
    core_1.Output('callback'),
    __metadata("design:type", Object)
], ColumnFilterComponent.prototype, "callback", void 0);
__decorate([
    core_1.ViewChild('input'),
    __metadata("design:type", core_1.ElementRef)
], ColumnFilterComponent.prototype, "el", void 0);
ColumnFilterComponent = __decorate([
    core_1.Component({
        selector: 'allsop-table-filter',
        template: `
    <input type="text" *ngIf="filter.type === 'text'" #input>

    <select *ngIf="filter.type==='select'" (change)="change($event)">
      <option *ngFor="let option of filter.options" [value]="option">{{option}}</option>
    </select>

    <span *ngIf="filter.type==='date-time'">
      <my-date-picker name="mydate" [options]="robinsonsDatePickerOptions" (dateChanged)="change($event)"></my-date-picker>
    </span>
  `
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], ColumnFilterComponent);
exports.ColumnFilterComponent = ColumnFilterComponent;
