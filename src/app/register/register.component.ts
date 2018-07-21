import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private service: HeroService, private router: Router ) { }

  ngOnInit() {
    this.service.getSession().subscribe(( res: any ) => {
      if ( res.passport ) {
        this.router.navigate(['campaigns']);
      }
    });
  }
}
