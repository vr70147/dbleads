import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FunctionsComponent } from './functions/functions.component';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { LeadsComponent } from './leads/leads.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RegisterComponent } from './register/register.component';
import { HeroService } from './hero.service';
import { MatDialogModule } from '@angular/material';


const appRoutes: Routes = [
  {
    path: '',
    component: UnauthorizedComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'campaigns',
    component: CampaignsComponent
  },
  {
    path: 'campaigns/:id/leads',
    component: LeadsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FunctionsComponent,
    CampaignsComponent,
    LeadsComponent,
    UnauthorizedComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
