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
  investments: Investment[] = [];
  private readonly localStorageKey = 'investments';

  constructor(private transactionService: TransactionsService, private walletService: WalletService) {
    this.loadInvestmentsFromLocalStorage();
  }

  getAllInvestments(): Investment[] {
    return this.investments;
  }

  getAllCards(): Card[] {
    return this.walletService.getAllCards();
  }

  getFirstSixTransactions(): Transaction[] {
    return this.transactionService.getFirstSixTransactions();
  }

  private loadInvestmentsFromLocalStorage() {
    const storedInvestments = localStorage.getItem(this.localStorageKey);
    if (storedInvestments) {
      this.investments = JSON.parse(storedInvestments);
    } else {
      // If no data is found in local storage, initialize with the default cards
      this.investments = investments;
      // Save the default cards to local storage
      this.saveInvestmentsToLocalStorage();
    }
  }

  private saveInvestmentsToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.investments));
  }
}
