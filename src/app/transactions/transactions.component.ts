import {Component, OnInit} from '@angular/core';
import {Transaction} from "./transactions.model";
import {TransactionsService} from './transactions.service';

@Component({
  selector: 'app-transactions.ts',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionsService: TransactionsService) {
  }

  ngOnInit(): void {
    this.transactions = this.transactionsService.getAllTransactions();
  }
}
