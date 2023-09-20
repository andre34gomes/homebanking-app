import {Component, OnInit} from '@angular/core';
import {Card} from "../models/card.model";
import {FundsService} from "./service/funds.service";
import {Investment} from "../models/investment.model";
import {Transaction} from "../models/transactions.model";

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

  constructor(private fundsService: FundsService) {}

  ngOnInit(): void {
    this.firstSixTransactions = this.fundsService.getFirstSixTransactions();
    this.cards = this.fundsService.getAllCards();
  }

  onDepositClick(): void {
    // Check if both the selectedOption and amount are not empty or null
    if (this.selectedOptionDeposit && this.amountDeposit !== null) {
      // Perform the deposit action here
      console.log('Option: ' + this.selectedOptionDeposit);
      console.log('Amount: ' + this.amountDeposit);
      this.fundsService.depositValue(this.selectedOptionDeposit, this.amountDeposit);
    } else {
      // Show an error message or handle invalid input
      console.log('Please select an option and enter an amount.');
    }
  }

  onWithdrawClick(): void {
    // Check if both the selectedOption and amount are not empty or null
    if (this.selectedOptionWithdraw && this.amountWithdraw !== null) {
      // Perform the deposit action here
      console.log('Option: ' + this.selectedOptionWithdraw);
      console.log('Amount: ' + this.amountWithdraw);
      this.fundsService.withdrawValue(this.selectedOptionWithdraw, this.amountWithdraw);
    } else {
      // Show an error message or handle invalid input
      console.log('Please select an option and enter an amount.');
    }
  }
}
