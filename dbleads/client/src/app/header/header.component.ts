import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor( private service: HeroService ) {}
  user: String;
  flag: Boolean = false;

  ngOnInit() {
  }
  test() {
    if ( this.service.username ) {
      this.user = this.service.username.user;
      return true;
    }
    return false;
  }
}
