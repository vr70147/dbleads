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
    this.service.openPopup(false);
    if (this.subDomain !== 'leads') {
      this.switchTabs = true;
    } else {
      this.switchTabs = false;
    }
    console.log(this.switchTabs);
    this.service.switchTabs.subscribe((res: boolean) => {
      this.switchTabs = res;
    });
  }
  openCreateCampaignDialog() {
    this.service.openPopup( this.openPopup );
  }
}
