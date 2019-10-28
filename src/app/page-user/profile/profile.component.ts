import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

   post: FormControl;

  constructor() { 
     this.post = new FormControl('', [Validators.maxLength(500), Validators.minLength(10), Validators.required]);
  }

  ngOnInit() {
  }

  postContent(event){
     let char = event.target.textLength;
     console.log(char);
  }

}
