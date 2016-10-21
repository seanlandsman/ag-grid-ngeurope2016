import {Component,OnDestroy} from '@angular/core';
import {CommonModule} from "@angular/common"

import {AgRendererComponent} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';

@Component({
    selector: 'ag-cell',
    template: `<span [ngStyle]="style">{{params.value}}</span>`
})
class CellRendererComponent implements AgRendererComponent {
    private params:any;
    private style:string;

    // called on init
    agInit(params:any):void {
        this.params = params;
    }
}

@Component({
    selector: 'ag-elevation',
    templateUrl: 'app/elevation.component.html'
})
export class ElevationComponent {
    private gridOptions:GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }

    private onGridReady(event) {
        this.gridOptions.api.sizeColumnsToFit();
    }

    private createColumnDefs() {
        return [
            {headerName: "Column 1", field: "col1"},
            {
                headerName: "Column 2",
                field: "col2",
                cellRendererFramework: {
                    component: CellRendererComponent,
                    moduleImports: [CommonModule]   // because we're using ngStyle in our component
                },
                cellRendererParams: {
                    style: {'color':  'orangered'}
                }

            }
        ];
    }

    private createRowData() {
        return [
            {col1: "Row 1, Column 1", col2: "Row 1, Column 2"},
            {col1: "Row 2, Column 1", col2: "Row 2, Column 2"}
        ];
    }
}