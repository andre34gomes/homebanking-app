import {Injectable} from '@angular/core';
import {User, users} from "../../models/user.model";

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [];
  private readonly localStorageKey = 'users';

  constructor() {
    this.loadUsersFromLocalStorage();
  }

  getAllUsers(): User[] {
    return this.users;
  }

  private loadUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem(this.localStorageKey);
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    } else {
      // If no data is found in local storage, initialize with the default cards
      this.users = users;
      // Save the default cards to local storage
      this.saveUserstoLocalStorage();
    }
  }

  private saveUserstoLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.users));
  }

  loginUser(email: string, password: string): User | null {
    // Find a user with the matching email and password
    const user = this.users.find((u) => u.email === email && u.password === password);

    // Return the user if found, otherwise return null
    return user || null;
  }
}
