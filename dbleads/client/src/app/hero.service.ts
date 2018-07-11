import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {
  sessionUrl = 'http://localhost:3000/users/session';
  campaignUrl = 'http://localhost:3000/getcampaign';
  loginUrl = 'http://localhost:3000/users/login';
  logoutUrl = 'http://localhost:3000/users/logout';
  username: any;
  flag: Boolean = false;

  constructor( private http: HttpClient ) {
  }

  getSession() {
    return this.http.get(this.sessionUrl);
  }

  getCampaign() {
    return this.http.get(this.campaignUrl);
  }

  postLogin( arg: object ) {
    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    const options = {
      headers: httpHeaders
    };
    return this.http.post( this.loginUrl, arg, options );
  }

  logout() {
    return this.http.get(this.logoutUrl);
  }
}
