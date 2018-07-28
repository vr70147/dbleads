<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class HeroService {
  sessionUrl = 'http://localhost:3000/users/session';
  getCampaignUrl = 'http://localhost:3000/getallcampaigns';
  getOneCampaignUrl = 'http://localhost:3000/getonecampaign';
  getLeadsUrl = 'http://localhost:3000/getleads';
  postCampaignUrl = 'http://localhost:3000/addcampaign';
  loginUrl = 'http://localhost:3000/users/login';
  logoutUrl = 'http://localhost:3000/users/logout';
  deleteCampUrl = 'http://localhost:3000/deletecampaign';
  private boolean = new BehaviorSubject<any>(true);
  showBoolean = this.boolean.asObservable();
  private user = new BehaviorSubject<string>('');
  showUser = this.user.asObservable();
  private campaignId = new BehaviorSubject<string>('');
  onCampaignId = this.campaignId.asObservable();
  private switch = new BehaviorSubject<any>(true);
  switchTabs = this.switch.asObservable();


  constructor( private http: HttpClient ) {
  }
  switchFunctions(bool) {
    this.switch.next(bool);
  }
  openPopup( bool ) {
    this.boolean.next( bool );
  }
  editUser( newUser ) {
    this.user.next( newUser );
  }
  getClickedCampaignId( id ) {
    this.campaignId.next( id );
  }

  getSession() {
    return this.http.get( this.sessionUrl );
  }
  getLeads( id ) {
    return this.http.get( this.getLeadsUrl + '/' + id );
  }

  getCampaign() {
    return this.http.get( this.getCampaignUrl );
  }
  getOneCampaign( id ) {
    return this.http.get( this.getOneCampaignUrl + '/' + id );
  }
  deleteCamp( id ) {
    return this.http.delete( this.deleteCampUrl + '/' + id );
  }
  postCampign( campName ) {
    return this.http.put( this.postCampaignUrl, campName );
  }

  postLogin( arg: object ) {
    return this.http.post( this.loginUrl, arg );
  }

  logout() {
    return this.http.get( this.logoutUrl );
  }
}
=======
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class HeroService {
  sessionUrl = 'http://localhost:3000/users/session';
  getCampaignUrl = 'http://localhost:3000/getallcampaigns';
  getOneCampaignUrl = 'http://localhost:3000/getonecampaign';
  getLeadsUrl = 'http://localhost:3000/getleads';
  postCampaignUrl = 'http://localhost:3000/addcampaign';
  loginUrl = 'http://localhost:3000/users/login';
  logoutUrl = 'http://localhost:3000/users/logout';
  deleteCampUrl = 'http://localhost:3000/deletecampaign';
  private boolean = new BehaviorSubject<any>(true);
  showBoolean = this.boolean.asObservable();
  private user = new BehaviorSubject<string>('');
  showUser = this.user.asObservable();
  private campaignId = new BehaviorSubject<string>('');
  onCampaignId = this.campaignId.asObservable();


  constructor( private http: HttpClient ) {
  }
  openPopup( bool ) {
    this.boolean.next( bool );
  }

  editUser( newUser ) {
    this.user.next( newUser );
  }
  getClickedCampaignId( id ) {
    this.campaignId.next( id );
  }

  getSession() {
    return this.http.get( this.sessionUrl );
  }
  getLeads( id ) {
    return this.http.get( this.getLeadsUrl + '/' + id );
  }

  getCampaign() {
    return this.http.get( this.getCampaignUrl );
  }
  getOneCampaign( id ) {
    return this.http.get( this.getOneCampaignUrl + '/' + id );
  }
  deleteCamp( id ) {
    return this.http.delete( this.deleteCampUrl + '/' + id );
  }
  postCampign( campName ) {
    return this.http.put( this.postCampaignUrl, campName );
  }

  postLogin( arg: object ) {
    return this.http.post( this.loginUrl, arg );
  }

  logout() {
    return this.http.get( this.logoutUrl );
  }
}
>>>>>>> 41d3ec41f7054c4cd65092d2d869d523602d7a37
