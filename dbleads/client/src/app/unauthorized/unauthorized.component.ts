import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {
  constructor( private service: HeroService, private router: Router ) { }
  userError: Boolean = true;
  ngOnInit() {
    this.service.getSession().subscribe((res: any) => {
      if ( res.passport ) {
        this.router.navigate(['campaigns']);
      }
    });
  }

  onSubmit( value: any ) {
    const data = {
      'email': value.username,
      'password': value.password,
    };
    this.service.postLogin( data ).subscribe((res) => {
      if ( res ) {
        this.router.navigate(['campaigns']);
        return;
      }
       this.userError = false;
    });
  }
}
