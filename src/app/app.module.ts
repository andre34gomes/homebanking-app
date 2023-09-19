import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgOptimizedImage} from "@angular/common";
import {MaterialModule} from './material/material.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {LoginComponent} from './login/login.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {FundsComponent} from './funds/funds.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import { WalletComponent } from './wallet/wallet.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MessagesComponent } from './messages/messages.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    TransactionsComponent,
    FundsComponent,
    PageNotFoundComponent,
    WalletComponent,
    AnalyticsComponent,
    MessagesComponent,
    HelpCenterComponent,
    SettingsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
