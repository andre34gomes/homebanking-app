import {Injectable} from '@angular/core';
import {Card, cards} from "../../models/card.model";

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  cards: Card[] = [];
  private readonly localStorageKey = 'cards';

  constructor() {
    this.loadCardsFromLocalStorage();
  }

  getAllCards(): Card[] {
    return this.cards;
  }

  depositFunds(selectedOption: string, amount: number):boolean {
    const card = this.cards.find((card) => card.name === selectedOption);

    if (card) {
      // Add the deposit amount to the card's balance
      card.amount += amount;
      // Save the updated card data to local storage
      this.saveCardsToLocalStorage();
      return true;
    }
    return false;
  }

  withdrawFunds(selectedOption: string, amount: number): boolean {
    const card = this.cards.find((card) => card.name === selectedOption);

    if (card) {
      // Ensure that the withdrawal amount does not exceed the current balance
      if (amount <= card.amount) {
        // Subtract the withdrawal amount from the card's balance
        card.amount -= amount;
        // Save the updated card data to local storage
        this.saveCardsToLocalStorage();
        return true;
      } else {
        console.error('Insufficient funds for withdrawal.');
        return false;
      }
    }
    return false;
  }

  private loadCardsFromLocalStorage() {
    const storedCards = localStorage.getItem(this.localStorageKey);
    if (storedCards) {
      this.cards = JSON.parse(storedCards);
    } else {
      // If no data is found in local storage, initialize with the default cards
      this.cards = cards;
      // Save the default cards to local storage
      this.saveCardsToLocalStorage();
    }
  }

  private saveCardsToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cards));
  }
}
