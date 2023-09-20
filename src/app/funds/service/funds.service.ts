import {Injectable} from '@angular/core';
import {WalletService} from "../../wallet/service/wallet.service";
import {Card} from "../../models/card.model";
import {Transaction} from "../../models/transactions.model";
import {TransactionsService} from "../../transactions/service/transactions.service";

@Injectable({
  providedIn: 'root',
})
export class FundsService {

  constructor(private transactionService: TransactionsService, private walletService: WalletService) {}

  getAllCards(): Card[] {
    return this.walletService.getAllCards();
  }
  getFirstSixTransactions(): Transaction[] {
    return this.transactionService.getFirstSixTransactions();
  }

  depositValue(selectedOption: string, amount: number){
    this.walletService.depositFunds(selectedOption, amount);
    //this.transactionService.addTransaction(new Transaction());
  }

  withdrawValue(selectedOption: string, amount: number){
    this.walletService.withdrawFunds(selectedOption, amount);
    //this.transactionService.addTransaction(new Transaction());
  }
}
