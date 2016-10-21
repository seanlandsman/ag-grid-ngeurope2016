import {Component,OnDestroy} from '@angular/core';
import {CommonModule} from "@angular/common"

import {AgRendererComponent} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';
import {LicenseManager} from 'ag-grid-enterprise/main';

import {ElevationService} from './elevation.service';

// only import this if you are using the ag-Grid-Enterprise
import 'ag-grid-enterprise/main';

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
        this.style = params.style;
    }
}

@Component({
    selector: 'ag-elevation',
    templateUrl: 'app/elevation.component.html'
})
export class ElevationComponent {
    private gridOptions:GridOptions;

    constructor(private elevationService:ElevationService) {
        LicenseManager.setLicenseKey("Ag-Grid_ag-Grid_Devs_21_November_2016__MTQ3OTY4NjQwMDAwMA==e1c9c3094696b86e3e1e067cd8cbe3e2");

        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }

    private onGridReady(event) {
        this.gridOptions.api.sizeColumnsToFit();
    }

    //ngOnInit() {
    //    this.elevationService.getElevationData().subscribe(data => console.log(data))
    //}

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