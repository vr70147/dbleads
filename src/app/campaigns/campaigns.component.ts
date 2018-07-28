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
  deleteMsg: Object;
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
      this.service.getCampaign().subscribe(( response: object ) => {
        this.campaigns = response;
      });
    });
  }
  async viewCampaign( id ) {
    this.campaignId = id;
    await this.service.getClickedCampaignId( this.campaignId );
    await this.router.navigate(['campaigns/' + id + '/leads']);
    await this.service.switchFunctions( true );
  }
  async deleteCampaign( id ) {
    await this.service.deleteCamp( id ).subscribe( ( res: object ) => {
      console.log('1');
      this.deleteMsg = res;
    });
    await this.service.getCampaign().subscribe(( response: object ) => {
      console.log('2');
      this.campaigns = response;
    });
  }
  focusOutFunction(e) {
    if (e.target.classList[0] === 'popUpBg') {
      this.service.openPopup(false);
    }
  }
}

