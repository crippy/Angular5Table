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
let TableComponent = class TableComponent {
    constructor() {
        this.data = { fields: [], data: [] };
        this.totalRecordCount = 0;
    }
};
__decorate([
    core_1.Input('data'),
    __metadata("design:type", Object)
], TableComponent.prototype, "data", void 0);
__decorate([
    core_1.Input('totalRecordCount'),
    __metadata("design:type", Number)
], TableComponent.prototype, "totalRecordCount", void 0);
__decorate([
    core_1.Input('pagination'),
    __metadata("design:type", Boolean)
], TableComponent.prototype, "boolean", void 0);
TableComponent = __decorate([
    core_1.Component({
        selector: 'allsop-table',
        template: `
  <div class="table"><div class="pagination" *ngIf="pagination"><span class="total-pages">{{totalRecordCount}} of 56 items</span><div class="pagination-options"><div class="page-size"><select><option value="25">25</option></select> per page</div><div class="page-selector"><div class="btn btn-prev">&lt;</div><input type="text" value="1"> of 3<div class="btn btn-next">&gt;</div></div></div></div><div class="heading"><div class="column" *ngFor="let header of data.fields"><allsop-column-header [data]="header"></allsop-column-header></div></div><div class="filters"><div class="column" *ngFor="let header of data.fields"><allsop-table-filter [filter]="header.filter" [key]="header.key" (callback)="header.filter.callback($event)"></allsop-table-filter></div></div><div class="body"><div class="row" *ngFor="let row of data.data; let i = index"><div class="column" *ngFor="let header of data.fields"><allsop-column-data [data]="row[header.key]" [index]="i" [definition]="header.definition" [key]="header.key" (callback)="header.definition.callback($event)"></allsop-column-data></div></div></div></div>
  `
    })
], TableComponent);
exports.TableComponent = TableComponent;
