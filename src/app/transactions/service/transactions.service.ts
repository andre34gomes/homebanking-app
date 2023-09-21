import {Injectable} from '@angular/core';
import {Transaction, transactions} from '../../models/transactions.model';
import {Card} from "../../models/card.model";
import {WalletService} from "../../wallet/service/wallet.service";

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  transactions: Transaction[] = [];
  private readonly localStorageKey = 'transactions';

  constructor(private walletService: WalletService) {
    this.loadTransactionsFromLocalStorage();
  }

  getAllTransactions(): Transaction[] {
    return this.transactions;
  }

  getAllCards(): Card[] {
    return this.walletService.getAllCards();
  }

  getFirstSixTransactions(): Transaction[] {
    return this.transactions.slice(0, 6);
  }

  addTransaction(transaction: Transaction): void {
    this.transactions.unshift(transaction);
    this.saveTransactionsToLocalStorage();
  }

  private loadTransactionsFromLocalStorage() {
    const storedTransactions = localStorage.getItem(this.localStorageKey);
    if (storedTransactions) {
      this.transactions = JSON.parse(storedTransactions);
    } else {
      // If no data is found in local storage, initialize with the default cards
      this.transactions = transactions;
      // Save the default cards to local storage
      this.saveTransactionsToLocalStorage();
    }
  }

  private saveTransactionsToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.transactions));
  }
}
