import { Injectable } from '@angular/core';
import {Transaction} from "../../models/transactions.model";
import {TransactionsService} from "../../transactions/service/transactions.service";
import {Investment, investments} from "../../models/investment.model";
import {Card} from "../../models/card.model";
import {WalletService} from "../../wallet/service/wallet.service";

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  investments: Investment[] = investments;

  constructor(private transactionService: TransactionsService, private walletService: WalletService) {}

  getAllInvestments(): Investment[] {
    return this.investments;
  }

  getAllCards(): Card[] {
    return this.walletService.getAllCards();
  }

  getFirstSixTransactions(): Transaction[] {
    return this.transactionService.getFirstSixTransactions();
  }
}
