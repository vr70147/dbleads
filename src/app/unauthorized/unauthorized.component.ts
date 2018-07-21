import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {
  constructor( private service: HeroService, private router: Router ) { }
  userError: Boolean = false;
  username: Object;
  button: Boolean;
  ngOnInit() {
    this.service.getSession().subscribe(( res: any ) => {
      if ( res.passport ) {
        this.router.navigate(['campaigns']);
      }
    });
  }

  async onSubmit( value: any ) {
    const data = {
      'email': value.username,
      'password': value.password,
    };
    await this.service.postLogin( data ).subscribe(( res: any ) => {
      if ( res ) {
        this.username = res.user;
        this.button = true;
        this.service.editUser( this.username );
        this.router.navigate(['campaigns']);
        return;
      }
    }, error => {
      this.userError = true;
    });
  }
}
