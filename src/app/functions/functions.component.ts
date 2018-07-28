import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {
  openPopup: Boolean = true;
  switchTabs: Boolean;
  subDomain: String = window.location.pathname.split( '/' )[3];
  constructor( private service: HeroService ) { }

  ngOnInit() {
    console.log(this.switchTabs);
    this.service.openPopup( false );
    this.service.switchTabs.subscribe((res: boolean) => {
      this.switchTabs = res;
      console.log(this.switchTabs);
    });
    if ( this.subDomain === 'leads') {
      this.switchTabs = true;
    }
  }
  openCreateCampaignDialog() {
    this.service.openPopup( this.openPopup );
  }
}
