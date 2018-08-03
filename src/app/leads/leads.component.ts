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
  arrayOfColors: String[] = [];
  colorsFromStorage: String[];

  constructor( private service: HeroService, private router: Router ) { }

  async ngOnInit() {
    this.id = window.location.pathname.split( '/' )[2];
    await this.service.getLeads( this.id ).subscribe(( response: any ) => {
      this.leads = response;
      this.service.getOneCampaign( this.id ).subscribe(( res: any ) => {
        this.title = res;
      });
      const tdElements = document.getElementsByTagName('td');
      
      this.colorsFromStorage = JSON.parse(localStorage.getItem('color'));
      this.service.genericForLoop( tdElements, '', this.colorsFromStorage  )
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
    const colorObj = {
      color: color,
      leadId: data
    };
    const tdElements = document.getElementsByTagName('td');
    console.log(data);
    this.service.genericForLoop(tdElements, data, color);
    this.arrayOfColors.push(color);
    localStorage.setItem('color', JSON.stringify(this.arrayOfColors));
  }
}
