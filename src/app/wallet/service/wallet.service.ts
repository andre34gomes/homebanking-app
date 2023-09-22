import {Injectable} from '@angular/core';
import {Card, cards} from "../../models/card.model";

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  cards: Card[] = []; // An array to store card objects
  private readonly localStorageKey = 'cards'; // A key for storing card data in local storage

  constructor() {
    this.loadCardsFromLocalStorage(); // Load cards from local storage when the service is constructed
  }

  // Retrieve all card data
  getAllCards(): Card[] {
    return this.cards;
  }

  // Deposit funds into a card and update its balance
  depositFunds(selectedOption: string, amount: number): boolean {
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

  // Withdraw funds from a card and update its balance
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

  // Load card data from local storage or initialize with default cards
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

  // Save card data to local storage
  private saveCardsToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cards));
  }
}
