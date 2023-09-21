export interface User {
  email: string;
  password: string;
}

export const users: User[] = [
  {
    email: 'admin@admin.com',
    password: 'admin',
  },
];
