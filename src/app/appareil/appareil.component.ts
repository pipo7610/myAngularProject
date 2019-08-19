import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input()  appareilName: string ;
  @Input()  appareilStatus: string ;
  @Input()  dateCreation: Date ;
  @Input()  indexApp: number;
  @Input()  appareilId: number;

  constructor(private service: AppareilService , private router: Router) { }

  ngOnInit() {
  }
getStatus() {
    return this.appareilStatus;

}

getColor() {

    if ( this.appareilStatus === 'allumé') { return 'green'; } else if ( this.appareilStatus === 'eteint') {
      return 'red';
    } }

 OnAllumer() {
   this.service.switchOnApp(this.indexApp);
 }

  OnEteindre() {
    this.service.switchOffApp(this.indexApp);
  }
  OnAfficher() {
this.router.navigate (['appareil/' + this.appareilId]);
   // this.router.navigate([this.appareilId]);
  }

}


