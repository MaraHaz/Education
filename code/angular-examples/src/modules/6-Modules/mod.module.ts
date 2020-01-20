import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ModComponent } from './mod.component';
import { CounterModule } from './counter/counter.module';
import { MyModule } from './my.module';
// import { MyServiceService } from './my-service.service';

@NgModule({
  declarations: [
    ModComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CounterModule,
    MyModule
  ],
  exports: [
    ModComponent
  ]
  // providers: [MyServiceService]
})
export class ModModule { }
