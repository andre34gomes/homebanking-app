import { Injectable } from '@angular/core';
import {Transaction} from "../../models/transactions.model";
import {TransactionsService} from "../../transactions/service/transactions.service";
import {Investment} from "../../models/investment.model";
import {Card} from "../../models/card.model";
import {WalletService} from "../../wallet/service/wallet.service";

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  investments: Investment[] = [
    { companyName: 'Unilever', imageSrc: './assets/uniliver.png', date: '7 Nov, 2021', time: '9:14pm', bonds: "1402", amount: "$20,033", changePercentage: -4.27,},
    { companyName: 'Tesla', imageSrc: './assets/tesla.png', date: '1 Dec, 2021', time: '11:54am', bonds: "5377", amount: "$720,110", changePercentage: 38.27,},
    { companyName: 'Monster', imageSrc: './assets/monster.png', date: '1 Dec, 2021', time: '4:02pm', bonds: "700", amount: "$13,110", changePercentage: 7.27,},
    { companyName: 'McDonalds', imageSrc: './assets/mcdonalds.png', date: '3 Dec, 2021', time: '8:17pm', bonds: "5200", amount: "$78,030", changePercentage: -1.02,},
  ];

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
