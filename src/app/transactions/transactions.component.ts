import {Component, OnInit} from '@angular/core';
import {Transaction} from "../models/transactions.model";
import {TransactionsService} from './service/transactions.service';
import {Card} from "../models/card.model";

@Component({
  selector: 'app-transactions.ts',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  cards: Card[] = [];

  constructor(private transactionsService: TransactionsService) {
  }

  ngOnInit(): void {
    this.transactions = this.transactionsService.getAllTransactions();
    this.cards = this.transactionsService.getAllCards();
  }
}
