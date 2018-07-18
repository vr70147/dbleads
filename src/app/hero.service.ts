import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class HeroService {
  sessionUrl = 'http://localhost:3000/users/session';
  getCampaignUrl = 'http://localhost:3000/getcampaign';
  postCampaignUrl = 'http://localhost:3000/addcampaign';
  loginUrl = 'http://localhost:3000/users/login';
  logoutUrl = 'http://localhost:3000/users/logout';
  private boolean = new BehaviorSubject<any>(true);
  showBoolean = this.boolean.asObservable();
  private user = new BehaviorSubject<string>('');
  showUser = this.user.asObservable();
  constructor( private http: HttpClient ) {
  }
  openPopup( bool ) {
    this.boolean.next( bool );
  }

  editUser( newUser ) {
    this.user.next( newUser );
  }

  getSession() {
    return this.http.get( this.sessionUrl );
  }


  getCampaign() {
    return this.http.get( this.getCampaignUrl );
  }
  postCampign( campName ) {
    return this.http.put( this.postCampaignUrl, campName );
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
    return this.http.get( this.logoutUrl );
  }
}
