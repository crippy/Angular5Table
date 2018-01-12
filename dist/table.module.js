"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const table_component_1 = require("./table.component");
const column_data_component_1 = require("./column-data/column-data.component");
const column_filter_component_1 = require("./column-filter/column-filter.component");
const column_header_component_1 = require("./column-header/column-header.component");
let AllsopTableModule = class AllsopTableModule {
};
AllsopTableModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule
        ],
        declarations: [
            table_component_1.TableComponent,
            column_data_component_1.ColumnDataComponent,
            column_filter_component_1.ColumnFilterComponent,
            column_header_component_1.ColumnHeaderComponent
        ],
        exports: [
            table_component_1.TableComponent,
            column_data_component_1.ColumnDataComponent,
            column_filter_component_1.ColumnFilterComponent,
            column_header_component_1.ColumnHeaderComponent
        ]
    })
], AllsopTableModule);
exports.AllsopTableModule = AllsopTableModule;
