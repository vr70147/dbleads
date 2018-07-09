import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: String;
  constructor( private service: HeroService ) {}

  ngOnInit() {
   this.user = this.service.username;
  }
}
