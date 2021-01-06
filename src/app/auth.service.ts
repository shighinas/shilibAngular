import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './signin/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) {}

  loginUser(user: object) {
    return this.http.post<any>('https://shilibangular.herokuapp.com/login', user);
  }

  userReg(user: UserModel){
    return this.http.post<any>('https://shilibangular.herokuapp.com/reguser', user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  isAdmin(){
    return !!localStorage.getItem('role');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
