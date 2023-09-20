import {Component, OnInit} from "@angular/core";
import {Transaction} from "../transactions/transactions.model";
import {DashboardService} from "./dashboard.service";
import {Investment} from "./investment.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  investments: Investment[] = [];
  firstSixTransactions: Transaction[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.investments = this.dashboardService.getAllInvestments();
    this.firstSixTransactions = this.dashboardService.getFirstSixTransactions();
  }
}
