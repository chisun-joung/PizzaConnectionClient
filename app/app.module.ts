/**
 * Created by chisun.joung on 2017-01-02.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {InputTextModule, ButtonModule} from 'primeng/primeng';

@NgModule({
    imports: [BrowserModule,
            InputTextModule,
            ButtonModule,
            FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}
