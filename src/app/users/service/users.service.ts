import {Injectable} from '@angular/core';
import {User, users} from "../../models/user.model";

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = []; // An array to store user objects
  private readonly localStorageKey = 'users'; // A key for storing user data in local storage

  constructor() {
    this.loadUsersFromLocalStorage(); // Load users from local storage when the service is constructed
  }

  // Load user data from local storage or initialize with default users
  private loadUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem(this.localStorageKey);
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    } else {
      // If no data is found in local storage, initialize with the default users
      this.users = users;
      // Save the default users to local storage
      this.saveUserstoLocalStorage();
    }
  }

  // Save user data to local storage
  private saveUserstoLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.users));
  }

  // Attempt to log in a user by checking their email and password
  loginUser(email: string, password: string): User | null {
    // Find a user with the matching email and password
    const user = this.users.find((u) => u.email === email && u.password === password);

    // Return the user if found, otherwise return null
    return user || null;
  }
}
