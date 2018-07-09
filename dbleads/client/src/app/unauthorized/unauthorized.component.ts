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
  user: any;
  ngOnInit() {
  }
  onSubmit( value: any ) {
    const data = {
      'email': value.username,
      'password': value.password,
    };
    this.user = this.service.postLogin( data );
    setTimeout(() => {
      if (this.service.flag) {
        console.log(this.service.username);
        this.router.navigate(['campaigns']);
      }
    }, 600);
  }

}
