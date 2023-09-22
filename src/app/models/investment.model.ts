// Define an interface named 'Investment' to specify the structure of an investment object
export interface Investment {
  companyName: string;     // The name of the investment company
  imageSrc: string;        // The path to an image representing the investment
  date: string;            // The date of the investment
  time: string;            // The time of the investment
  bonds: string;           // The number of bonds associated with the investment
  amount: number;          // The amount invested
  changePercentage: number; // The percentage change in the investment
}

// Define an array 'investments' containing a list of investment objects
export const investments: Investment[] = [
  {
    companyName: 'Unilever',
    imageSrc: './assets/uniliver.png',
    date: '7 Nov, 2021',
    time: '9:14pm',
    bonds: '1402',
    amount: 20033,
    changePercentage: -4.27,
  },
  {
    companyName: 'Tesla',
    imageSrc: './assets/tesla.png',
    date: '1 Dec, 2021',
    time: '11:54am',
    bonds: '5377',
    amount: 720112,
    changePercentage: 38.27,
  },
  {
    companyName: 'Monster',
    imageSrc: './assets/monster.png',
    date: '1 Dec, 2021',
    time: '4:02pm',
    bonds: '700',
    amount: 13175,
    changePercentage: 7.27,
  },
  {
    companyName: 'McDonalds',
    imageSrc: './assets/mcdonalds.png',
    date: '3 Dec, 2021',
    time: '8:17pm',
    bonds: '5200',
    amount: 78045,
    changePercentage: -1.02,
  },
];
