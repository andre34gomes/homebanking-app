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
  investments: Investment[] = []; // Array to hold investment data
  private readonly localStorageKey = 'investments'; // Key for storing investments in local storage

  // Constructor with dependencies injected
  constructor(private transactionService: TransactionsService, private walletService: WalletService) {
    this.loadInvestmentsFromLocalStorage(); // Load investments from local storage when the service is instantiated
  }

  // Get all investments stored in this service
  getAllInvestments(): Investment[] {
    return this.investments;
  }

  // Get all cards from the wallet service
  getAllCards(): Card[] {
    return this.walletService.getAllCards();
  }

  // Get the first six transactions from the transaction service
  getFirstSixTransactions(): Transaction[] {
    return this.transactionService.getFirstSixTransactions();
  }

  // Private method to load investments data from local storage
  private loadInvestmentsFromLocalStorage() {
    const storedInvestments = localStorage.getItem(this.localStorageKey);
    if (storedInvestments) {
      this.investments = JSON.parse(storedInvestments); // Parse and set investments if found in local storage
    } else {
      // If no data is found in local storage, initialize with the default investments
      this.investments = investments;
      // Save the default investments to local storage
      this.saveInvestmentsToLocalStorage();
    }
  }

  // Private method to save investments data to local storage
  private saveInvestmentsToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.investments));
  }
}
