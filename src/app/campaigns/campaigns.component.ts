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
  campaignDate: any;
  dateParse: any;
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
    await this.getAllCampaigns();
    this.service.showBoolean.subscribe(( res: boolean ) => {
      this.createCampaign = res;
      this.getAllCampaigns();
    });
  }
  getAllCampaigns() {
    this.service.getCampaign().subscribe(( res: any ) => {
      this.campaigns = res;
      this.campaignDate = this.service.formatDate( res[0].creationDate );
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
      this.deleteMsg = res;
    });
    await this.getAllCampaigns();

  }
  focusOutFunction(e) {
    if (e.target.classList[0] === 'popUpBg') {
      this.service.openPopup(false);
    }
  }
}

