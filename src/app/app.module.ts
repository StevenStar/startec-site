import {
    BrowserModule
} from '@angular/platform-browser';
import {
    BrowserAnimationsModule,
    NoopAnimationsModule
} from '@angular/platform-browser/animations';
import {
    NgModule
} from '@angular/core';
import {
    MaterialModule
} from '@angular/material';
import {
    AppComponent
} from './app.component';
import 'hammerjs'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}