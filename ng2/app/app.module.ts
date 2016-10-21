import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AgGridModule} from 'ag-grid-ng2/main';

import {AppComponent} from "./app.component";
import {ElevationComponent} from "./elevation.component";

@NgModule({
    imports: [
        BrowserModule,
        AgGridModule.withNg2ComponentSupport(),
    ],
    declarations: [
        AppComponent,
        ElevationComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
