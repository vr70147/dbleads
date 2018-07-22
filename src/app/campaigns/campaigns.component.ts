import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {
  campaignName: String;
  userObj: Object;
  userId: String;
  campaigns: Object;
  campaignId: String;
  createCampaign: Boolean;
  constructor( private router: Router, private service: HeroService ) { }

  async ngOnInit() {
    await this.service.getSession().subscribe(( res: any ) => {
      if ( !res.passport ) {
        this.router.navigate( [''] );
      }
    });
    await this.service.getCampaign().subscribe(( res: object ) => {
      this.campaigns = res;
    });
    this.service.showBoolean.subscribe(( res: boolean ) => {
      this.createCampaign = res;
    });
  }
  async viewCampaign( id ) {
    this.campaignId = id;
    await this.service.getClickedCampaignId( this.campaignId );
    await this.router.navigate( ['campaigns/' + id + '/leads'] );
  }
}
