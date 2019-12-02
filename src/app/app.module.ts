import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { UserService } from './user/user.service';
import { LabelService } from './label/label.service';
import { PaymentMethodService } from './paymentmethod/paymentmethod.service';
import { EventService } from './event/event.service';
import { MemberService } from './event/member.service';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { EventsComponent } from './event/events/events.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidenavService} from './services/sidenav.service';
import {MatListModule} from '@angular/material/list';
import { LabelsComponent } from './label/labels/labels.component';
import { PaymentmethodsComponent } from './paymentmethod/paymentmethods/paymentmethods.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateEventComponent } from './event/create-event/create-event.component';
import {MatProgressSpinnerModule, MatSpinner} from '@angular/material/progress-spinner';
import { CreateLabelComponent } from './label/create-label/create-label.component';
import { CreatePaymentmethodComponent } from './paymentmethod/create-paymentmethod/create-paymentmethod.component';
import {ColorSketchModule} from 'ngx-color/sketch';
import {ColorTwitterModule} from 'ngx-color/twitter';
import { ShowEventComponent } from './event/show-event/show-event.component';
import {ProgressSpinnerService} from './services/progress-spinner.service';
import {MatTabsModule} from '@angular/material/tabs';
import { AddMemberDialogComponent } from './dialogs/add-member-dialog/add-member-dialog.component';
import {MatSnackBar, MatSnackBarContainer, MatSnackBarModule} from '@angular/material/snack-bar';
import { ProfileComponent } from './user/profile/profile.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LocalUserService} from './services/local-user.service';
import { LoaderComponent } from './views/loader/loader.component';
import {LoaderInterceptor} from './helpers/loader.interceptor';
import {AuthGuard} from './helpers/auth-guard';
import {AuthGuardInverse} from './helpers/auth-guard-inverse';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import { ChangePassDialogComponent } from './dialogs/change-pass-dialog/change-pass-dialog.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: EventsComponent,  canActivate: [AuthGuard] },
  { path: 'labels', component: LabelsComponent,  canActivate: [AuthGuard] },
  { path: 'pms', component: PaymentmethodsComponent,  canActivate: [AuthGuard] },
  { path: 'events/create', component: CreateEventComponent,  canActivate: [AuthGuard] },
  { path: 'labels/create', component: CreateLabelComponent,  canActivate: [AuthGuard] },
  { path: 'pms/create', component: CreatePaymentmethodComponent,  canActivate: [AuthGuard] },
  { path: 'events/show/:id', component: ShowEventComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardInverse] },
  {path: 'signup', component: SignupComponent, canActivate: [AuthGuardInverse]}
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HeaderComponent,
    LabelsComponent,
    PaymentmethodsComponent,
    ConfirmDialogComponent,
    CreateEventComponent,
    CreateLabelComponent,
    CreatePaymentmethodComponent,
    ShowEventComponent,
    AddMemberDialogComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    LoaderComponent,
    ChangePassDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ColorSketchModule,
    ColorTwitterModule,
    MatTabsModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, LabelService, PaymentMethodService, EventService, MemberService, SidenavService,
    ProgressSpinnerService, LocalUserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent, MatSpinner, AddMemberDialogComponent]
})
export class AppModule { }
