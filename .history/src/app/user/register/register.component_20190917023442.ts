import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/configurations/services/profile-service/profile-service.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { User } from 'src/app/configurations/interface/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email] ),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
   });

  constructor(
   private profileService: ProfileService,
   public snackBar: MatSnackBar,
   private router: Router
  ) { }

  ngOnInit() {

  }

  register()
  {
      this.profileService.register(this.registerForm.value);
  }

}
