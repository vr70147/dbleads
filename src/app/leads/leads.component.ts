import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
  leads: any;
  id: String;
  flag: Boolean = false;
  loading: Boolean = false;
  title: String;
  constructor( private service: HeroService ) { }

  async ngOnInit() {
    this.id = window.location.pathname.split( '/' )[2];
    await this.service.getLeads( this.id ).subscribe(( response: any ) => {
      this.leads = response;
      this.loading = true;
      this.flag = true;
    },
    error => {
      console.log(error);
    });
    await this.service.getOneCampaign( this.id ).subscribe(( res: any ) => {
      this.title = res.campaignName;
      console.log(res);
    },
    error => {
      console.log(error);
    });
  }
}
