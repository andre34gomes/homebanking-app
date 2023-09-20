import {Component, OnInit} from "@angular/core";
import {Transaction} from "../models/transactions.model";
import {DashboardService} from "./service/dashboard.service";
import {Investment} from "../models/investment.model";
import {Card} from "../models/card.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  investments: Investment[] = [];
  cards: Card[] = [];
  firstSixTransactions: Transaction[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.investments = this.dashboardService.getAllInvestments();
    this.cards = this.dashboardService.getAllCards();
    this.firstSixTransactions = this.dashboardService.getFirstSixTransactions();
  }
}
