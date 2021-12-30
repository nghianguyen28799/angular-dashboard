import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions = {}; // required

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'area',
        background: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        heigh: 60
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      credits: {
        enabled: true,
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions',
      },
      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666',
          },
        },
      },
      series: [
        {
          data: [71, 78, 39, 66],
        },
      ],
    };
  }

  ngOnInit(): void {}
}
