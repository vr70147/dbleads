import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../hero.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor( private service: HeroService, private router: Router ) {}
  @Input() user: string;
  @Input() button: Boolean = false;
  guestUser: Boolean = true;
  authenticatedUser: Boolean = false;


  ngOnInit() {
    this.service.getSession().subscribe(( res: any ) => {
      if ( res.passport ) {
        this.user = 'Hello ' + res.passport.user.companyName;
        this.authenticatedUser = true;
        this.guestUser = false;
        this.button = true;
      }
    });
  }
  onLogout() {
    this.service.logout().subscribe((res) => {
      this.user = 'Hello guest';
      this.button = false;
      this.router.navigate(['']);
    });
  }
}
