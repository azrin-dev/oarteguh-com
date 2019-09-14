import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile-service/profile-service.service';
import { MatSnackBar } from '@angular/material';
import { User } from 'src/app/model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-handphone',
  templateUrl: './form-handphone.component.html',
  styleUrls: ['./form-handphone.component.scss']
})
export class FormHandphoneComponent implements OnInit {
   formHandphoneProfile;
   profile: User;
   countriesData;
   handphone;
   

  constructor(
         private _profileService: ProfileService,
         private _snackBar: MatSnackBar
  ) { 
         this.formHandphoneProfile = new FormGroup({
            country: new FormControl('', [Validators.minLength(2)]),
            handphone: new FormControl('', Validators.minLength(7))
         });
  }

  ngOnInit() {

      this._profileService.profile.subscribe(
         (response: User) => {         
            if(response && response._id) this.profile = response;
            else this.profile = null;
      });
  }
   
  // Controls get method
  get countryCtrl(){return this.formHandphoneProfile.get('country')};
  get handphoneCtrl(){return this.formHandphoneProfile.get('handphone')};

  getCountry()
  {
     if(this.countryCtrl.valid){
        this._profileService.getCountries({country: this.countryCtrl.value}).subscribe(
           (response: any) => {
              this.countriesData = response;
           })}
  }
  
  updateProfile(userData)
   {   console.log(this.handphoneCtrl);
      // const itemKey = Object.keys(userData)
      //    .reduce((acc, value) => {         
      //       if(value != ('_id' && 'type')) acc = value;
      //       return acc;
      //    }, {});

      // let itemValue = userData[`${itemKey}`];

      // this._profileService.updatePhoneCode(userData).subscribe(
      //    (response: User) => {
      //       if(response && response._id){
      //          this._snackBar.open(`Your " ${itemKey} " update to " ${itemValue} " is successfull`, 'X', {duration: 10000, panelClass: 'pink-style'});
      //          this._profileService.userSource.next(response);
      //          this.countryCtrl.reset();                  
      //       }
      //       else this._snackBar.open('Your update is not successfull, please try again.', 'X', {duration: 10000, panelClass: 'red-style'});
      //    },
      //    error => this._snackBar.open('Error' + error, 'X', {duration: 10000, panelClass: 'red-style'})
      // )  
   }

}
