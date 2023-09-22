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
  // Arrays to hold data related to transactions and cards
  firstSixTransactions: Transaction[] = [];
  cards: Card[] = [];

  // Variables to handle deposit and withdrawal inputs
  selectedOptionDeposit: string = '';
  amountDeposit: number | null = null;
  selectedOptionWithdraw: string = '';
  amountWithdraw: number | null = null;

  // Variable to store a new transaction
  newTransaction: Transaction | undefined;

  // Date-related variables for formatting
  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0');
  yyyy = this.today.getFullYear();
  formattedDate = `${this.dd}.${this.mm}.${this.yyyy}`

  // Constructor with the FundsService injected
  constructor(private fundsService: FundsService) {
  }

  //ngOnInit is called when the component is initialized
  ngOnInit(): void {
    this.firstSixTransactions = this.fundsService.getFirstSixTransactions();
    this.cards = this.fundsService.getAllCards();
  }

  // Function to handle deposit action
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

  // Function to handle withdrawal action
  onWithdrawClick(): void {
    // Check if both the selectedOption and amount are not empty or null
    if (this.selectedOptionWithdraw && this.amountWithdraw !== null) {
      // Perform the withdrawal action here
      let boolean = this.fundsService.withdrawValue(this.selectedOptionWithdraw, this.amountWithdraw);
      if (boolean) {
        this.createTransactionWithdraw(this.selectedOptionWithdraw, this.amountWithdraw);
      }
    } else {
      // Show an error message or handle invalid input
      console.log('Please select an option and enter an amount.');
    }
  }

  // Function to create a deposit transaction
  createTransactionDeposit(option: string, amount: number): void {
    let trxId = 'TRXID' + Math.floor(100000000 + Math.random() * 900000000).toString();
    if (option === "BTC") {
      // Define the transaction details for BTC deposit
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
      // Define the transaction details for ETH deposit
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
      // Define the transaction details for ADA deposit
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
    // If a new transaction is created, add it to the service and update the displayed transactions
    if (this.newTransaction) {
      this.fundsService.createTransaction(this.newTransaction);
      this.updateFirstSixTransactions();
    }
  }

  // Function to create a withdrawal transaction
  createTransactionWithdraw(option: string, amount: number): void {
    let trxId = 'TRXID' + Math.floor(100000000 + Math.random() * 900000000).toString();
    if (option === "BTC") {
      // Define the transaction details for BTC withdrawal
      this.newTransaction = {
        iconClass: "icon bg-danger-light",
        iconName: "call_made",
        category: "Deposit", // Note: This should likely be "Withdraw" instead of "Deposit"
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
      // Define the transaction details for ETH withdrawal
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
      // Define the transaction details for ADA withdrawal
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
    // If a new transaction is created, add it to the service and update the displayed transactions
    if (this.newTransaction) {
      this.fundsService.createTransaction(this.newTransaction);
      this.updateFirstSixTransactions();
    }
  }

  // Update the displayed transactions
  updateFirstSixTransactions(): void {
    this.firstSixTransactions = this.fundsService.getFirstSixTransactions();
  }
}
