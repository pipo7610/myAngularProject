import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppareilService} from '../services/appareil.service';



@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  id: number;
  appareil: any = {
    id: 1,
    name: 'Name',
    statut: 'Statut',
    dateCreation: null
  };
  constructor(private appareilService: AppareilService , private router: ActivatedRoute) { }

  ngOnInit() {
   this.id = this.router.snapshot.params[ + 'id' ];
   console.log(this.appareilService.getAppareilbyId(this.id).appareilName);
   this.appareil.name = this.appareilService.getAppareilbyId(this.id).appareilName;
   this.appareil.statut = this.appareilService.getAppareilbyId(this.id).appareilStatus;
   this.appareil.dateCreation = this.appareilService.getAppareilbyId(this.id).dateCreation;
   console.log(this.id);
  }

}
