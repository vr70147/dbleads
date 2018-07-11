import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {

  constructor( private router: Router, private service: HeroService ) { }

  ngOnInit() {
    this.service.getSession().subscribe((res: any) => {
      if ( !res.passport ) {
        this.router.navigate(['']);
      }
    });
  }

}
