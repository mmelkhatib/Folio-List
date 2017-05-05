import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './components/app.component';
import { FolioComponent } from './components/folio/folio.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, FolioComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
