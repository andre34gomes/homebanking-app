import {Injectable} from '@angular/core';
import {Transaction} from '../../models/transactions.model';
import {Card} from "../../models/card.model";
import {WalletService} from "../../wallet/service/wallet.service";

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  transactions: Transaction[] = [
    { iconClass: "icon bg-purple-light", iconName: "headset_mic", category: "Music", trxId: "TRXID987654321", amount: "-$20", cardType: "Credit Card Red", cardName: "Credit Card", cardImageSrc: "./assets/visa.png", cardNumber: "*2757", date: "20.11.2021", status: "Complete", details: "Details",},
    { iconClass: "icon bg-purple-light", iconName: "shopping_bag", category: "Shopping", trxId: "TRXID123456789", amount: "-$799", cardType: "Credit Card Blue", cardName: "Credit Card", cardImageSrc: "./assets/visa.png", cardNumber: "*1920", date: "10.09.2023", status: "Pending", details: "Details",},
    { iconClass: "icon bg-success-light", iconName: "restaurant", category: "Restaurant", trxId: "TRXID543210987", amount: "-$50", cardType: "Master Card", cardName: "Master Card", cardImageSrc: "./assets/master%20card.png", cardNumber: "*8273", date: "19.08.2023", status: "Complete", details: "Details",},
    { iconClass: "icon bg-danger-light", iconName: "sports_esports", category: "Games", trxId: "TRXID876543210", amount: "-$44", cardType: "Credit Card Red", cardName: "Credit Card", cardImageSrc: "./assets/visa.png", cardNumber: "*2757", date: "15.08.2023", status: "Canceled", details: "Details",},
    { iconClass: "icon bg-danger-light", iconName: "medication", category: "Pharmacy", trxId: "TRXID246813579", amount: "-$30", cardType: "Credit Card Blue", cardName: "Credit Card", cardImageSrc: "./assets/visa.png", cardNumber: "*1920", date: "10.08.2023", status: "Complete", details: "Details",},
    { iconClass: "icon bg-success-light", iconName: "fitness_center", category: "Fitness", trxId: "TRXID135792468", amount: "-$45", cardType: "Master Card", cardName: "Master Card", cardImageSrc: "./assets/master%20card.png", cardNumber: "*8273", date: "29.07.2023", status: "Pending", details: "Details",},
    { iconClass: "icon bg-dark-light", iconName: "directions_bike", category: "Sports", trxId: "TRXID555444333", amount: "-$1643", cardType: "Master Card", cardName: "Master Card", cardImageSrc: "./assets/master%20card.png", cardNumber: "*8273", date: "20.07.2023", status: "Complete", details: "Details",},
    { iconClass: "icon bg-purple-light", iconName: "shopping_bag", category: "Shopping", trxId: "TRXID123456789", amount: "-$263", cardType: "Credit Card Blue", cardName: "Credit Card", cardImageSrc: "./assets/visa.png", cardNumber: "*1920", date: "15.07.2023", status: "Complete", details: "Details",},
    { iconClass: "icon bg-dark-light", iconName: "golf_course", category: "Sports", trxId: "TRXID222111000", amount: "-$52", cardType: "Credit Card Red", cardName: "Credit Card", cardImageSrc: "./assets/visa.png", cardNumber: "*2757", date: "10.07.2023", status: "Canceled", details: "Details",},
    { iconClass: "icon bg-success-light", iconName: "directions_car", category: "Car Repair", trxId: "TRXID999000111", amount: "-$3015", cardType: "Master Card", cardName: "Master Card", cardImageSrc: "./assets/master%20card.png", cardNumber: "*8273", date: "28.06.2023", status: "Complete", details: "Details",},
    { iconClass: "icon bg-danger-light", iconName: "medication", category: "Pharmacy", trxId: "TRXID888111222", amount: "-$5", cardType: "Credit Card Blue", cardName: "Credit Card", cardImageSrc: "./assets/visa.png", cardNumber: "*1920", date: "20.06.2023", status: "Complete", details: "Details",},
  ];

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
