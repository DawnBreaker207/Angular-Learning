import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/User';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthenService {
  constructor(private http: HttpClient) {}
  API_URL: string = 'http://localhost:3000';
  Sign_Up = (data: User) => {
    return this.http.post(this.API_URL + `/signup`, data);
  };
  Sign_In = (data: User) => {
    return this.http.post(this.API_URL + `/signin`, data);
  };
  Check_User_Valid = (): boolean => {
    let check = false;
    const token: string = localStorage.getItem('token') as string;
    try {
      const decoded: any = jwtDecode(token);
      if (decoded.exp > Date.now() / 1000 && decoded.sub == 2) {
        check = true;
      }
    } catch (error) {
      console.log(error);
    }
    return check;
  };
}
