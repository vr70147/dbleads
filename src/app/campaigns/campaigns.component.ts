import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {
  campaignName: String;
  userObj: Object;
  userId: any;
  campaigns: any;
  createCampaign: Boolean;
  constructor( private router: Router, private service: HeroService ) { }

  ngOnInit() {
    this.service.getSession().subscribe((res: any) => {
      if ( !res.passport ) {
        this.router.navigate(['']);
      }
    });
    this.service.showBoolean.subscribe((res: any) => {
     this.createCampaign = res;
    });
    // this.service.getCampaign().subscribe(( res: any ) => {
    //   console.log(res);
    // });
    this.service.getCampaign().subscribe((res: any) => {
      this.campaigns = res;
    });
  }
}
