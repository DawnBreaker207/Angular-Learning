import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/User';

@Injectable({
  providedIn: 'root',
})
export class AuthenService {
  constructor(private http: HttpClient) {}
  API_URL: string = 'http://localhost:3000';
  Sign_Up = (data: User) => {
    return this.http.post(this.API_URL + `/signup`, data);
  };
}
