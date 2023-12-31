// Define an interface named 'Transaction' to specify the structure of a transaction object
export interface Transaction {
  iconClass: string;        // CSS class for the transaction icon
  iconName: string;         // Name of the transaction icon
  category: string;         // Transaction category (e.g., Music, Shopping, Restaurant)
  trxId: string;            // Transaction ID
  amount: string;           // Transaction amount as a string (e.g., "-$20")
  cardType: string;         // Type of the card used for the transaction (e.g., BTC, ADA, ETH)
  cardName: string;         // Name of the card (e.g., Credit Card, Master Card)
  cardImageSrc: string;     // Path to an image representing the card
  cardNumber: string;       // Partial card number (masked for security)
  date: string;             // Transaction date (formatted as "dd.mm.yyyy")
  status: string;           // Transaction status (e.g., Complete, Pending, Canceled)
  details: string;          // Additional transaction details
}

// Define an array 'transactions' containing a list of transaction objects
export const transactions: Transaction[] = [
  {
    iconClass: "icon bg-purple-light",
    iconName: "headset_mic",
    category: "Music",
    trxId: "TRXID987654321",
    amount: "-$20",
    cardType: "BTC",
    cardName: "Credit Card",
    cardImageSrc: "./assets/visa.png",
    cardNumber: "*2757",
    date: "20.11.2021",
    status: "Complete",
    details: "Details",
  },
  {
    iconClass: "icon bg-purple-light",
    iconName: "shopping_bag",
    category: "Shopping",
    trxId: "TRXID123456789",
    amount: "-$799",
    cardType: "ADA",
    cardName: "Credit Card",
    cardImageSrc: "./assets/visa.png",
    cardNumber: "*1920",
    date: "10.09.2023",
    status: "Pending",
    details: "Details",
  },
  {
    iconClass: "icon bg-success-light",
    iconName: "restaurant",
    category: "Restaurant",
    trxId: "TRXID543210987",
    amount: "-$50",
    cardType: "ETH",
    cardName: "Master Card",
    cardImageSrc: "./assets/master%20card.png",
    cardNumber: "*8273",
    date: "19.08.2023",
    status: "Complete",
    details: "Details",
  },
  {
    iconClass: "icon bg-danger-light",
    iconName: "sports_esports",
    category: "Games",
    trxId: "TRXID876543210",
    amount: "-$44",
    cardType: "BTC",
    cardName: "Credit Card",
    cardImageSrc: "./assets/visa.png",
    cardNumber: "*2757",
    date: "15.08.2023",
    status: "Canceled",
    details: "Details",
  },
  {
    iconClass: "icon bg-danger-light",
    iconName: "medication",
    category: "Pharmacy",
    trxId: "TRXID246813579",
    amount: "-$30",
    cardType: "ADA",
    cardName: "Credit Card",
    cardImageSrc: "./assets/visa.png",
    cardNumber: "*1920",
    date: "10.08.2023",
    status: "Complete",
    details: "Details",
  },
  {
    iconClass: "icon bg-success-light",
    iconName: "fitness_center",
    category: "Fitness",
    trxId: "TRXID135792468",
    amount: "-$45",
    cardType: "ETH",
    cardName: "Master Card",
    cardImageSrc: "./assets/master%20card.png",
    cardNumber: "*8273",
    date: "29.07.2023",
    status: "Pending",
    details: "Details",
  },
  {
    iconClass: "icon bg-dark-light",
    iconName: "directions_bike",
    category: "Sports",
    trxId: "TRXID555444333",
    amount: "-$1643",
    cardType: "ETH",
    cardName: "Master Card",
    cardImageSrc: "./assets/master%20card.png",
    cardNumber: "*8273",
    date: "20.07.2023",
    status: "Complete",
    details: "Details",
  },
  {
    iconClass: "icon bg-purple-light",
    iconName: "shopping_bag",
    category: "Shopping",
    trxId: "TRXID123456789",
    amount: "-$263",
    cardType: "ADA",
    cardName: "Credit Card",
    cardImageSrc: "./assets/visa.png",
    cardNumber: "*1920",
    date: "15.07.2023",
    status: "Complete",
    details: "Details",
  },
  {
    iconClass: "icon bg-dark-light",
    iconName: "golf_course",
    category: "Sports",
    trxId: "TRXID222111000",
    amount: "-$52",
    cardType: "BTC",
    cardName: "Credit Card",
    cardImageSrc: "./assets/visa.png",
    cardNumber: "*2757",
    date: "10.07.2023",
    status: "Canceled",
    details: "Details",
  },
  {
    iconClass: "icon bg-success-light",
    iconName: "directions_car",
    category: "Car Repair",
    trxId: "TRXID999000111",
    amount: "-$3015",
    cardType: "ETH",
    cardName: "Master Card",
    cardImageSrc: "./assets/master%20card.png",
    cardNumber: "*8273",
    date: "28.06.2023",
    status: "Complete",
    details: "Details",
  },
  {
    iconClass: "icon bg-danger-light",
    iconName: "medication",
    category: "Pharmacy",
    trxId: "TRXID888111222",
    amount: "-$5",
    cardType: "ADA",
    cardName: "Credit Card",
    cardImageSrc: "./assets/visa.png",
    cardNumber: "*1920",
    date: "20.06.2023",
    status: "Complete",
    details: "Details",
  },
];
