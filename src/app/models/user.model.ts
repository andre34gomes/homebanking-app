// Define an interface named 'User' to specify the structure of a user object
export interface User {
  email: string;    // User's email address
  password: string; // User's password
}

// Define an array 'users' containing a list of user objects
export const users: User[] = [
  {
    email: 'admin@admin.com',
    password: 'admin',
  },
];
