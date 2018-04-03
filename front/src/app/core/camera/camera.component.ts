import {Component, OnInit} from '@angular/core';
import {TrafficService} from '../../shared/traffic.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  working = 'Камера 1';
  points: any = ['Камера 2', 'Камера 3'];

  resultFound = true;

  constructor(private _trafficService: TrafficService) {
  }

  ngOnInit() {
  }

}
