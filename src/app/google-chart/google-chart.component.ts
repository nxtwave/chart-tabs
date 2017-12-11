import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var google: any;
declare var $: any;

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.css']
})
export class GoogleChartComponent implements OnInit {
  private static googleLoaded: any;

  selectedSlice = 0;

  constructor(@Inject(DOCUMENT) private document: any) {
    console.log('.constructor');
  }

  getGoogle() {
    return google;
  }

  ngOnInit() {
    if (!GoogleChartComponent.googleLoaded) {
      GoogleChartComponent.googleLoaded = true;
      google.charts.load('current', {'packages': ['corechart']});
    }
    google.charts.setOnLoadCallback(() => this.drawGraph());

  }

  drawGraph() {
    console.log('.drawGraph');

    const data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    const options = {
      title: 'My Daily Activities'
    };

    const chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);

    setTimeout(() => {

      const paths = $('path');

      $.each(paths, (index, item) => $(item).attr('tabindex', 0));

      $('svg').on('click', 'path', (event) => {
        const index = $(event.target).index('svg');
        console.log('click', event.target);
      });

    }, 2000);


  }

}
