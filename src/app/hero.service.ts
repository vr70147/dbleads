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
  colorUrl = 'http://localhost:3000/editColors'
  private boolean = new BehaviorSubject<any>(true);
  showBoolean = this.boolean.asObservable();
  private user = new BehaviorSubject<string>('');
  showUser = this.user.asObservable();
  private campaignId = new BehaviorSubject<string>('');
  onCampaignId = this.campaignId.asObservable();
  private switch = new BehaviorSubject<any>(false);
  switchTabs = this.switch.asObservable();

  constructor(private http: HttpClient) { }
  switchFunctions(bool) {
    this.switch.next(bool);
  }
  openPopup(bool) {
    this.boolean.next(bool);
  }
  editUser(newUser) {
    this.user.next(newUser);
  }
  getClickedCampaignId(id) {
    this.campaignId.next(id);
  }
  getSession() {
    return this.http.get(this.sessionUrl);
  }
  getLeads(id) {
    return this.http.get(this.getLeadsUrl + '/' + id);
  }
  getCampaign() {
    return this.http.get(this.getCampaignUrl);
  }
  getOneCampaign(id) {
    return this.http.get(this.getOneCampaignUrl + '/' + id);
  }
  deleteCamp(id) {
    return this.http.delete(this.deleteCampUrl + '/' + id);
  }
  postCampign(campName) {
    return this.http.put(this.postCampaignUrl, campName);
  }
  postLogin(arg: object) {
    return this.http.post(this.loginUrl, arg);
  }
  logout() {
    return this.http.get(this.logoutUrl);
  }
  sendColor(obj) {
    return this.http.patch(this.colorUrl + '/' + obj.leadId, obj);
  }
  genericForLoop(data, color) {
    const tdElements = document.getElementsByTagName('td');
    if (typeof (color) === 'string') {
      for (let i = 0; i < tdElements.length; i++) {
        if (tdElements[i].classList[0] === 'a' + data) {
          tdElements[i].style.backgroundColor = color;
        }
      }
    } else if (typeof (color) === 'object') {
        setTimeout(() => {
          for (let i = 0; i < tdElements.length; i++) {
            for ( let j = 0; j < color.length; j++ )
              if (tdElements[i].classList[0] === 'a' + color[j].split('/')[1]) {
                tdElements[i].style.backgroundColor = color[j].split('/')[0];
            }    
          }  
        }, 200);
      }
  }
  formatDate( dates ) {
    const date = new Date( dates );
    const monthNames = [ 'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec' ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
}
