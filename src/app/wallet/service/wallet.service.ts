import { Injectable } from '@angular/core';
import {Card, cards} from "../../models/card.model";

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  cards: Card[] = cards;

  constructor() {}

  getAllCards(): Card[] {
    return this.cards;
  }

  depositFunds(selectedOption: string, amount: number) {
    const card = this.cards.find((card) => card.name === selectedOption);

    if (card) {
      // Add the deposit amount to the card's balance
      // @ts-ignore
      card.amount += amount;
    }
  }

  withdrawFunds(selectedOption: string, amount: number) {
    const card = this.cards.find((card) => card.name === selectedOption);

    if (card) {
      // Ensure that the withdrawal amount does not exceed the current balance
      // @ts-ignore
      if (amount <= card.amount) {
        // Subtract the withdrawal amount from the card's balance
        console.log(amount);
        console.log(card.amount);
        // @ts-ignore
        card.amount -= amount;
      } else {
        console.error('Insufficient funds for withdrawal.');
      }
    }
  }
}
