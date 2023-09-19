import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {TransactionsComponent} from "./transactions/transactions.component";
import {FundsComponent} from "./funds/funds.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AnalyticsComponent} from "./analytics/analytics.component";
import {HelpCenterComponent} from "./help-center/help-center.component";
import {MessagesComponent} from "./messages/messages.component";
import {SettingsComponent} from "./settings/settings.component";
import {WalletComponent} from "./wallet/wallet.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'funds', component: FundsComponent },
  { path: 'help_center', component: HelpCenterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'wallet', component: WalletComponent },
  { path: '**', component: PageNotFoundComponent },
  // You can add more routes here
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
