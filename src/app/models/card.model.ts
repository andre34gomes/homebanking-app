export interface Card {
  name: string;
  imageSrc: string;
  cardImageSrc: string;
  amount: number;
  cardHolder: string;
  expiry: string;
  cvv: string;
}

export const cards: Card[] = [
  {
    name: 'BTC',
    imageSrc: './assets/BTC.png',
    cardImageSrc: './assets/visa.png',
    amount: 827199,
    cardHolder: 'JOHN DOE',
    expiry: '08/24',
    cvv: '***',
  },
  {
    name: 'ETH',
    imageSrc: './assets/ETH.png',
    cardImageSrc: './assets/master%20card.png',
    amount: 95623,
    cardHolder: 'JOHN DOE',
    expiry: '08/24',
    cvv: '***',
  },
  {
    name: 'ADA',
    imageSrc: './assets/ADA.png',
    cardImageSrc: './assets/visa.png',
    amount: 74384,
    cardHolder: 'JOHN DOE',
    expiry: '08/24',
    cvv: '***',
  },
];
