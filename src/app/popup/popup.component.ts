import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-popup',
  template:
  `
  <div class="createCampaign">
    <h2>Create campaign</h2>
    <input type="text" class="input-field" [(ngModel)]="campaignName" placeholder="Enter campaign's name">
    <button class="form-button" (click)="sendCampaign()">Create</button>
</div>
  `,
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  campaignName: String;
  userObj: Object;
  constructor( private service: HeroService ) { }

  ngOnInit() {
  }
  async sendCampaign() {
    this.userObj = {
      campaignName: this.campaignName
    };
    await this.service.postCampign( this.userObj ).subscribe(( res: any ) => {
      this.service.openPopup(false);
    });
  }
}
