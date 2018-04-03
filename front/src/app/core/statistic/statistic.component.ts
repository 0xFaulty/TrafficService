import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {TrafficService} from '../../shared/traffic.service';
import * as Highcharts from 'assets/js/highcharts.js';
import {chart} from 'assets/js/highcharts.js';
import histogram from 'assets/js/histogram-bellcurve.js';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements AfterViewInit {

  data = [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4,
    4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2,
    3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8,
    3, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7,
    2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3,
    2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3,
    2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9,
    2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8,
    2.7, 3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3,
    3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3, 2.5, 3, 3.4, 3];

  constructor(private _trafficService: TrafficService) {
  }

  @ViewChild('chartTarget') chartTarget: ElementRef;

  chart: Highcharts.ChartObject;

  ngAfterViewInit() {
    const options: Highcharts.Options = {
      title: {
        text: 'Highcharts Histogram'
      },
      xAxis: [{
        title: {text: 'Data'},
        alignTicks: false
      }, {
        title: {text: 'Histogram'},
        alignTicks: false,
        opposite: true
      }],
      yAxis: [{
        title: {text: 'Data'}
      }, {
        title: {text: 'Histogram'},
        opposite: true
      }],
      series: [{
        name: 'Histogram',
        type: histogram,
        xAxis: 1,
        yAxis: 1,
        baseSeries: 's1',
        zIndex: -1
      }, {
        name: 'Data',
        data: this.data,
        id: 's1',
        marker: {
          radius: 2
        }
      }]
    };

    this.chart = chart(this.chartTarget.nativeElement, options);
  }

}
