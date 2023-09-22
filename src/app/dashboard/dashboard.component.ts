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
  investments: Investment[] = []; // Array to hold investment data
  cards: Card[] = []; // Array to hold card data
  firstSixTransactions: Transaction[] = []; // Array to hold the first six transactions

  // Constructor for the component, injecting the DashboardService
  constructor(private dashboardService: DashboardService) {}

  //ngOnInit is called when the component is initialized
  ngOnInit(): void {
    // Populate the 'investments' array with data from the service
    this.investments = this.dashboardService.getAllInvestments();

    // Populate the 'cards' array with data from the service
    this.cards = this.dashboardService.getAllCards();

    // Populate the 'firstSixTransactions' array with data from the service
    this.firstSixTransactions = this.dashboardService.getFirstSixTransactions();
  }
}
