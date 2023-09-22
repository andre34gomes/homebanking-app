import {Component, OnInit} from '@angular/core';
import {Transaction} from "../models/transactions.model";
import {TransactionsService} from './service/transactions.service';
import {Card} from "../models/card.model";
import {Investment} from "../models/investment.model";
import {DashboardService} from "../dashboard/service/dashboard.service";

@Component({
  selector: 'app-transactions.ts',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = []; // Array to hold transactions data
  cards: Card[] = []; // Array to hold card data

  // Constructor for the component, injecting the TransactionsService
  constructor(private transactionsService: TransactionsService) {
  }

  //ngOnInit is called when the component is initialized
  ngOnInit(): void {
    // Populate the 'transactions' array with data from the service
    this.transactions = this.transactionsService.getAllTransactions();
    // Populate the 'cards' array with data from the service
    this.cards = this.transactionsService.getAllCards();
  }
}
