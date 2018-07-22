import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {
  openPopup: Boolean = true;
  constructor( private service: HeroService ) { }

  ngOnInit() {
    this.service.openPopup( false );
  }
  openCreateCampaignDialog() {
    this.service.openPopup( this.openPopup );
  }

}
