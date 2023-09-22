// Define an interface named 'Card' to specify the structure of a card object
export interface Card {
  name: string;         // The card's name, e.g., BTC, ETH, ADA
  imageSrc: string;     // The path to an image representing the card
  cardImageSrc: string; // The path to an image representing the card type (e.g., Visa, MasterCard)
  amount: number;       // The card's current balance or amount
  cardHolder: string;   // The cardholder's name
  expiry: string;       // The card's expiry date
  cvv: string;          // The card's CVV (Card Verification Value)
}

// Define an array 'cards' containing a list of card objects
export const cards: Card[] = [
  {
    name: 'BTC',
    imageSrc: './assets/BTC.png',
    cardImageSrc: './assets/visa.png',
    amount: 827200,
    cardHolder: 'Administrator',
    expiry: '08/24',
    cvv: '***',
  },
  {
    name: 'ETH',
    imageSrc: './assets/ETH.png',
    cardImageSrc: './assets/master%20card.png',
    amount: 95623,
    cardHolder: 'Administrator',
    expiry: '08/24',
    cvv: '***',
  },
  {
    name: 'ADA',
    imageSrc: './assets/ADA.png',
    cardImageSrc: './assets/visa.png',
    amount: 74384,
    cardHolder: 'Administrator',
    expiry: '08/24',
    cvv: '***',
  },
];
