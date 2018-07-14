import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../hero.service';
import {Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor( private service: HeroService, private router: Router ) {}
  user: string;
  button: Boolean = true;
  guestUser: Boolean = true;
  authenticatedUser: Boolean = false;

  ngOnInit() {
    this.service.showUser.subscribe((res: any) => {
      this.service.getSession().subscribe(( sessionUser: any ) => {
        if ( sessionUser.passport ) {
          this.button = true;
          return this.user = sessionUser.passport.user.companyName;
        }
        this.router.navigate(['']);

      });
      if ( res ) {
      return this.user = res;
      }
      this.button = false;
      this.user = 'guest';
    });
  }
  onLogout() {
    this.service.logout().subscribe((res) => {
      this.button = false;
      this.user = 'guest';
      this.router.navigate(['']);
    });
  }
}
