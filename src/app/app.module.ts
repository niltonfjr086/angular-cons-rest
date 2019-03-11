import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { MarcasComponent } from './marcas/marcas.component';
import { MarcaComponent } from './marcas/marca/marca.component';
import { MarcaListComponent } from './marcas/marca-list/marca-list.component';

import { MarcaService } from './shared/marca.service';

@NgModule({
  declarations: [
    AppComponent,
    MarcasComponent,
    MarcaComponent,
    MarcaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    MarcaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
