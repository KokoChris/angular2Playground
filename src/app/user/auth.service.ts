import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser
    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: "Chris",
            lastName: "Kokolios",
            password: password
        }
    }
    isAuthenticated() {
        return !!this.currentUser;
    }
    updateCurrentUser(firstname: string, lastName: string) {
        this.currentUser.firstName = firstname;
        this.currentUser.lastName = lastName;
    }
}