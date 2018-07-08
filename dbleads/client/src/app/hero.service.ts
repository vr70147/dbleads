import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService {
  sessionUrl = 'http://localhost:3000/users/session';

  constructor( private http: HttpClient ) {}

  getSession() {
    return this.http.get(this.sessionUrl);
  }
}
