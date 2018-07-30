import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

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
  getColor: any;
  colors: any;
  constructor( private service: HeroService, private router: Router ) { }

  async ngOnInit() {
    this.id = window.location.pathname.split( '/' )[2];
    await this.service.getLeads( this.id ).subscribe(( response: any ) => {
      this.leads = response;
      this.service.getOneCampaign( this.id ).subscribe(( res: any ) => {
        this.title = res;
      });
      this.loading = true;
      this.flag = true;
    });
  }
  back() {
    this.service.switchFunctions( false );
    this.router.navigate( ['campaigns'] );
  }
  changeColor( data, color) {
    this.getColor = color;
    const classList = [];
    const tdElements = document.getElementsByTagName('td');
    for ( let i = 0 ; i < tdElements.length ; i++ ) {
      if ( tdElements[i].classList[0] === 'a' + data ) {
        classList.push(tdElements[i].classList[0]);
        tdElements[i].style.backgroundColor = color;
      }
    }
  }
}
