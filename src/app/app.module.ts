import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pipe1Component } from './pipe1/pipe1.component';
import { CpipePipe } from './cpipe.pipe';
import { SqrootPipe } from './sqroot.pipe';
import { MultiplyPipe } from './multiply.pipe';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Pipe1Component,
    CpipePipe,
    SqrootPipe,
    MultiplyPipe,
    CustompipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
