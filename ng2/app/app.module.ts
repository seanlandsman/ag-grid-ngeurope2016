import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AgGridModule} from 'ag-grid-ng2/main';

import {AppComponent} from "./app.component";
import {ElevationComponent} from "./elevation.component";
import {ElevationService} from "./elevation.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AgGridModule.withNg2ComponentSupport(),
    ],
    declarations: [
        AppComponent,
        ElevationComponent
    ],
    providers: [
        ElevationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
