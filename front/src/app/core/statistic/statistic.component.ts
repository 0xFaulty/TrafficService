import {Component, OnInit} from '@angular/core';
import {chart} from 'assets/js/highcharts.js';
import {TrafficService} from '../../shared/traffic.service';
import {Statistic} from '../../entity/statistic';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  selected_start = '1';
  selected_end = '12';
  possible_values: any[];

  chartData: Array<any>;
  errorMessage: string;

  private saved_points: number[] = [];
  private update_flag = false;

  constructor(private _back: TrafficService) {
    this.possible_values = [];
    for (let i = 0; i < 24; ++i) {
      this.possible_values.push(i);
    }
  }

  ngOnInit() {
    this.sendRequest(1, 12);
  }

  sendRequest(n1: number, n2: number) {
    this._back.getCamera(n1, n2)
      .subscribe(data => {
          console.log(data);
          this.saved_points = (<Statistic>data).points;
          this.update_flag = true;
          this.redrawData();
        },
        error => {
          this.errorMessage = error.error;
        }
      );
  }

  getData() {
    this.errorMessage = '';
    if (this.selected_start > this.selected_end) {
      this.errorMessage = 'Неправильный интервал';
      return;
    }
    this.sendRequest(parseInt(this.selected_start, 10), parseInt(this.selected_end, 10));
  }

  redrawData() {
    if (this.update_flag) {
      this.chartData = [];
      for (let i = 0; i < this.saved_points.length; i++) {
        this.chartData.push([
          `${i}`,
          this.saved_points[i]
        ]);
      }
      this.update_flag = false;
    }
  }

}
