import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class HeroService {
  sessionUrl = 'http://localhost:3000/users/session';
  campaignUrl = 'http://localhost:3000/getcampaign';
  loginUrl = 'http://localhost:3000/users/login';
  logoutUrl = 'http://localhost:3000/users/logout';
  private user = new BehaviorSubject<string>('');
  showUser = this.user.asObservable();
  constructor( private http: HttpClient ) {
  }

  editUser( newUser ) {
    this.user.next( newUser );
  }

  getSession() {
    return this.http.get(this.sessionUrl);
  }


  getCampaign() {
    return this.http.get(this.campaignUrl);
  }

  postLogin( arg: object ) {
    // const httpHeaders = new HttpHeaders({
    //   'Content-Type' : 'application/json'
    // });
    // const options = {
    //   headers: httpHeaders
    // };
    return this.http.post( this.loginUrl, arg );
  }

  logout() {
    return this.http.get(this.logoutUrl);
  }
}
