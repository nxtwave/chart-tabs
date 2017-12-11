import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleChartComponent } from './google-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    GoogleChartComponent
  ],
  declarations: [GoogleChartComponent]
})
export class GoogleChartModule { }
