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

// Define an array of routes
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect the root path ('/') to the '/login' path
  { path: 'analytics', component: AnalyticsComponent }, // Define a route for '/analytics' path with the AnalyticsComponent
  { path: 'dashboard', component: DashboardComponent }, // Define a route for '/dashboard' path with the DashboardComponent
  { path: 'funds', component: FundsComponent }, // Define a route for '/funds' path with the FundsComponent
  { path: 'help_center', component: HelpCenterComponent }, // Define a route for '/help_center' path with the HelpCenterComponent
  { path: 'login', component: LoginComponent }, // Define a route for '/login' path with the LoginComponent
  { path: 'messages', component: MessagesComponent }, // Define a route for '/messages' path with the MessagesComponent
  { path: 'settings', component: SettingsComponent }, // Define a route for '/settings' path with the SettingsComponent
  { path: 'transactions', component: TransactionsComponent }, // Define a route for '/transactions' path with the TransactionsComponent
  { path: 'wallet', component: WalletComponent }, // Define a route for '/wallet' path with the WalletComponent
  { path: '**', component: PageNotFoundComponent }, // Define a catch-all route for any unmatched paths, using the PageNotFoundComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
