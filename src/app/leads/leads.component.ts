import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
  leads: any;
  constructor( private service: HeroService ) { }

  ngOnInit() {
    this.service.onCampaignId.subscribe(( res: any ) => {
      console.log(res);
      this.leads = res;
    });
  }
}
