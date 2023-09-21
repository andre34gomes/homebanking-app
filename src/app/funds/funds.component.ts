import {Component, OnInit} from '@angular/core';
import {Card} from "../models/card.model";
import {FundsService} from "./service/funds.service";
import {Transaction} from "../models/transactions.model";
import {TransactionsService} from "../transactions/service/transactions.service";

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {
  firstSixTransactions: Transaction[] = [];
  cards: Card[] = [];
  selectedOptionDeposit: string = ''; // Initialize with an empty string
  amountDeposit: number | null = null; // Initialize as null
  selectedOptionWithdraw: string = ''; // Initialize with an empty string
  amountWithdraw: number | null = null; // Initialize as null
  newTransaction: Transaction | undefined;

  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); // January is 0!
  yyyy = this.today.getFullYear();
  formattedDate = `${this.dd}.${this.mm}.${this.yyyy}`

  constructor(private fundsService: FundsService) {
  }

  ngOnInit(): void {
    this.firstSixTransactions = this.fundsService.getFirstSixTransactions();
    this.cards = this.fundsService.getAllCards();
  }

  onDepositClick(): void {
    // Check if both the selectedOption and amount are not empty or null
    if (this.selectedOptionDeposit && this.amountDeposit !== null) {
      // Perform the deposit action here
      let boolean = this.fundsService.depositValue(this.selectedOptionDeposit, this.amountDeposit);
      if (boolean) {
        this.createTransactionDeposit(this.selectedOptionDeposit, this.amountDeposit);
      }
    } else {
      // Show an error message or handle invalid input
      console.log('Please select an option and enter an amount.');
    }
  }

  onWithdrawClick(): void {
    // Check if both the selectedOption and amount are not empty or null
    if (this.selectedOptionWithdraw && this.amountWithdraw !== null) {
      // Perform the deposit action here
      let boolean = this.fundsService.withdrawValue(this.selectedOptionWithdraw, this.amountWithdraw);
      if (boolean) {
        this.createTransactionWithdraw(this.selectedOptionWithdraw, this.amountWithdraw);
      }
    } else {
      // Show an error message or handle invalid input
      console.log('Please select an option and enter an amount.');
    }
  }

  createTransactionDeposit(option: string, amount: number): void {
    let trxId = 'TRXID' + Math.floor(100000000 + Math.random() * 900000000).toString();
    if (option === "BTC") {
      this.newTransaction = {
        iconClass: "icon bg-success-light",
        iconName: "call_received",
        category: "Deposit",
        trxId: trxId,
        amount: "+$" + amount,
        cardType: "BTC",
        cardName: "Credit Card",
        cardImageSrc: "./assets/visa.png",
        cardNumber: "*2757",
        date: this.formattedDate,
        status: "Complete",
        details: "Details",
      };


    } else if (option === "ETH") {
      this.newTransaction = {
        iconClass: "icon bg-success-light",
        iconName: "call_received",
        category: "Deposit",
        trxId: trxId,
        amount: "+$" + amount,
        cardType: "ETH",
        cardName: "Master Card",
        cardImageSrc: "./assets/master%20card.png",
        cardNumber: "*8273",
        date: this.formattedDate,
        status: "Complete",
        details: "Details",
      };

    } else if (option === "ADA") {
      this.newTransaction = {
        iconClass: "icon bg-success-light",
        iconName: "call_received",
        category: "Deposit",
        trxId: trxId,
        amount: "+$" + amount,
        cardType: "ADA",
        cardName: "Credit Card",
        cardImageSrc: "./assets/visa.png",
        cardNumber: "*1920",
        date: this.formattedDate,
        status: "Complete",
        details: "Details",
      };
    }
    if (this.newTransaction) {
      this.fundsService.createTransaction(this.newTransaction);
      this.updateFirstSixTransactions();
    }
  }

  createTransactionWithdraw(option: string, amount: number): void {
    let trxId = 'TRXID' + Math.floor(100000000 + Math.random() * 900000000).toString();
    if (option === "BTC") {
      this.newTransaction = {
        iconClass: "icon bg-danger-light",
        iconName: "call_made",
        category: "Deposit",
        trxId: trxId,
        amount: "-$" + amount,
        cardType: "BTC",
        cardName: "Credit Card",
        cardImageSrc: "./assets/visa.png",
        cardNumber: "*2757",
        date: this.formattedDate,
        status: "Complete",
        details: "Details",
      };

    } else if (option === "ETH") {
      this.newTransaction = {
        iconClass: "icon bg-danger-light",
        iconName: "call_made",
        category: "Withdraw",
        trxId: trxId,
        amount: "-$" + amount,
        cardType: "ETH",
        cardName: "Master Card",
        cardImageSrc: "./assets/master%20card.png",
        cardNumber: "*8273",
        date: this.formattedDate,
        status: "Complete",
        details: "Details",
      };

    } else if (option === "ADA") {
      this.newTransaction = {
        iconClass: "icon bg-danger-light",
        iconName: "call_made",
        category: "Withdraw",
        trxId: trxId,
        amount: "-$" + amount,
        cardType: "ADA",
        cardName: "Credit Card",
        cardImageSrc: "./assets/visa.png",
        cardNumber: "*1920",
        date: this.formattedDate,
        status: "Complete",
        details: "Details",
      };
    }
    if (this.newTransaction) {
      this.fundsService.createTransaction(this.newTransaction);
      this.updateFirstSixTransactions();
    }
  }

  updateFirstSixTransactions(): void {
    this.firstSixTransactions = this.fundsService.getFirstSixTransactions();
  }
}
