import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatvexeComponent } from './datvexe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntDesignModule } from 'src/app/share/ant-design.module';
import { DatvexeRoutingModule } from './datvexe-routing.module';


@NgModule({
  declarations: [
    DatvexeComponent
  ],
  imports: [
    CommonModule,
    AntDesignModule,
    DatvexeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DatvexeModule { }
