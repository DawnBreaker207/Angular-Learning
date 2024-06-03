import { Component } from '@angular/core';
import { AuthenService } from '../../authen.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../interface/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private AuthenService: AuthenService, private route: Router) {}
  signinForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.minLength(9)]),
  });
  user: User[] = [];
  // route = new Router();
  onSubmit = () => {
    this.AuthenService.Sign_Up(this.signinForm.value as User).subscribe(
      (data) => {
        alert(`Sign Up success`);
        this.route.navigate(['/']);

        this.user.push(data as User);
      }
    );
  };
}
