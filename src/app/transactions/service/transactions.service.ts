import {Injectable} from '@angular/core';
import {Transaction, transactions} from '../../models/transactions.model';
import {Card} from "../../models/card.model";
import {WalletService} from "../../wallet/service/wallet.service";

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  transactions: Transaction[] = transactions;

  constructor(private walletService: WalletService) {
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
    // Add the new transaction to the beginning of the array
    this.transactions.unshift(transaction);
  }
}
