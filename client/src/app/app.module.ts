import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ThreewayComponent } from './components/threeway/threeway.component';
import { BttsComponent } from './components/btts/btts.component';
import { OverComponent } from './components/over/over.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Our_RunComponent } from './components/our_run/our_run.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { TipsService } from './services/tips.service';
import { AuthGuard } from './guards/auth.guard';
import { ThreewayEditComponent } from './components/threeway-edit/threeway-edit.component';

const appRoutes: Routes = [
  {path:'', component: LoginComponent},
  {path:'threeway', component: ThreewayComponent,canActivate:[AuthGuard]},
  {path:'btts', component: BttsComponent, canActivate:[AuthGuard]},
  {path:'over', component:OverComponent, canActivate:[AuthGuard]},
  {path:'our_run', component:Our_RunComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ThreewayComponent,
    BttsComponent,
    OverComponent,
    NavbarComponent,
    Our_RunComponent,
    ThreewayEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [AuthService, AuthGuard, TipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
