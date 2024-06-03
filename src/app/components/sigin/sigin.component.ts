import { Component } from '@angular/core';
import { AuthenService } from '../../authen.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../interface/User';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrl: './sigin.component.css',
})
export class SiginComponent {
  constructor(private AuthenService: AuthenService, private route: Router) {}
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.minLength(9)]),
  });
  ngOnInit() {
    if (this.AuthenService.Check_User_Valid())
      this.route.navigate(['dashboard']);
  }
  user: User[] = [];
  // route = new Router();
  onSubmit = () => {
    this.AuthenService.Sign_In(this.signupForm.value as User).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.accessToken);
        console.log(data);
        alert(`Sign In success`);
        console.log(localStorage.getItem('token'));
        const token: string = localStorage.getItem('token') as string;
        const decode = jwtDecode(token);
        console.log(decode);

        this.route.navigate(['/dashboard/products']);

        this.user.push(data as User);
      }
    );
  };
}
