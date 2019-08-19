import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';


@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;

  appareils: any[];
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private service: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }  , 4000
    );
  }

  OnToutAllumer() {
    this.service.switchOnAll();
  }


  OnToutEteindre() {
    this.service.switchOffAll();
  }
  ngOnInit(): void {
    this.appareils = this.service.appareils;

  }

}
