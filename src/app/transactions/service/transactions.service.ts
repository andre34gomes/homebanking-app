import {Injectable} from '@angular/core';
import {Transaction, transactions} from '../../models/transactions.model';
import {Card} from "../../models/card.model";
import {WalletService} from "../../wallet/service/wallet.service";

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  transactions: Transaction[] = []; // An array to store transaction objects
  private readonly localStorageKey = 'transactions'; // A key for storing transaction data in local storage

  constructor(private walletService: WalletService) {
    this.loadTransactionsFromLocalStorage(); // Load transactions from local storage when the service is constructed
  }

  // Retrieve all transactions
  getAllTransactions(): Transaction[] {
    return this.transactions;
  }

  // Retrieve all cards using the WalletService
  getAllCards(): Card[] {
    return this.walletService.getAllCards();
  }

  // Retrieve the first six transactions
  getFirstSixTransactions(): Transaction[] {
    return this.transactions.slice(0, 6);
  }

  // Add a new transaction to the beginning of the transactions array and save to local storage
  addTransaction(transaction: Transaction): void {
    this.transactions.unshift(transaction);
    this.saveTransactionsToLocalStorage();
  }

  // Load transactions from local storage or initialize with default transactions
  private loadTransactionsFromLocalStorage() {
    const storedTransactions = localStorage.getItem(this.localStorageKey);
    if (storedTransactions) {
      this.transactions = JSON.parse(storedTransactions);
    } else {
      // If no data is found in local storage, initialize with the default transactions
      this.transactions = transactions;
      // Save the default transactions to local storage
      this.saveTransactionsToLocalStorage();
    }
  }

  // Save transactions to local storage
  private saveTransactionsToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.transactions));
  }
}
