import { Injectable } from '@angular/core';
import {Card} from "../../models/card.model";

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  cards: Card[] = [
    { name: 'BTC', imageSrc: './assets/BTC.png', cardImageSrc: './assets/visa.png', amount: "$827,199", cardHolder: 'JOHN DOE', expiry: '08/24', cvv: '***',},
    { name: 'ETH', imageSrc: './assets/ETH.png', cardImageSrc: './assets/master%20card.png', amount: "$95,623", cardHolder: 'JOHN DOE', expiry: '08/24', cvv: '***',},
    { name: 'ADA', imageSrc: './assets/ADA.png', cardImageSrc: './assets/visa.png', amount: "$74,384", cardHolder: 'JOHN DOE', expiry: '08/24', cvv: '***',},
  ];

  constructor() {}

  getAllCards(): Card[] {
    return this.cards;
  }
}
