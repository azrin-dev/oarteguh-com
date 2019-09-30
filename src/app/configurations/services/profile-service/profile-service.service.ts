import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/configurations/interface/user';
import { catchError, map } from 'rxjs/operators';
import { httpOptions, jwtToken } from '../httpOptions';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   token: string;
   decodedToken: boolean = false;
   user: User;
   loggedIn: boolean = false;
   country;
   paramsLinkedin;

   locSource = new BehaviorSubject(this.country);
   location = this.locSource as Observable<string>;

   userSource = new BehaviorSubject(this.user);
   profile = this.userSource as Observable<User>;

  constructor( 
     private http: HttpClient, 
     private router: Router,
     public snackBar: MatSnackBar
   ) { this.getUserSource() }  

   getLocation()   
   {  this.http.post('/api/user/location', { location: '' }).subscribe(
         (response: any) => this.locSource.next(response.country),
         catchError( error => throwError(error) ) 
      )
   }

   checkAuthToken(authToken)
   {  return this.http.post('/api/user/register/authenticate', {authToken}).subscribe(
         (response: User) => {
            if(response && response.id){
               let token = response.token;
               localStorage.setItem('token', token);
               this.userSource.next(response);
               this.snackBar.open('Your registration is successful, thank you for registering', 'X', {duration: 10000, panelClass: 'red-theme'});
               this.router.navigate(['/profile']);   
            }  
            else{
               this.snackBar.open('We encountered a problem with your registration, it might be that your token have expired. Please register again.', 'X', {duration: 10000, panelClass: 'red-theme'});
            }     
         },
         error => this.snackBar.open('We encountered a problem with your registration, it might be that your token have expired. Please register again.', 'X', {duration: 10000, panelClass: 'red-theme'})
      )
   }

   getUserSource(): void   
   {  if(jwtToken){      
         this.http.get('/api/user/profile', httpOptions).subscribe(
            (response: User[]) => {
               let user = response[0];
               if(user && user._id) {
                  this.userSource.next(user);
               }
               else this.userSource = null   },
            catchError(error => throwError(error)) 
      )}
      else this.userSource.next(null);
   }   //

   register(formValue)
   {  this.http.post('/api/user/register', formValue)
         .subscribe(
            (response: User) => {
               if(response && response._id){
                  this.userSource.next(response);
                  this.snackBar.open('Your registration is successfull. Please check your email for authentication', 'X', {duration: 10000, panelClass: 'red-theme'});
               }
            },
            error => this.snackBar.open(error, 'X', {duration: 10000, panelClass: 'red-theme'})     
         )
   }  //
   
   login(credentials){
      return this.http.post("/api/user/login", credentials).subscribe(
         (response: User) => {
            if(response && response.id){
               this.userSource.next(response);
               localStorage.setItem('token', response.token);
               this.snackBar.open('Congratulation, your login is successful.', 'X', {duration: 10000, panelClass: 'pink-style'});
               this.router.navigateByUrl("/");
            }
            else this.snackBar.open('Your login is not successful. Please check your email or password', 'X', {duration: 10000, panelClass: 'red-style'});
         },
         error => this.snackBar.open('We encountered a problem with your login: error.', 'X', {duration: 10000, panelClass: 'red-style'})
      )
   }

   getLoggedStatus()
   {  let token = localStorage.getItem('token');
      const helper = new JwtHelperService();    
      let expired = helper.isTokenExpired(token);
      let user = helper.decodeToken(token);
      if(!expired && user) return {expired, user};      
      else {
         this.snackBar.open('You are not authorized to acces this page, please Login', 'X', {duration: 10000, panelClass: 'red-theme'});
         this.router.navigate(['']);   
      } 
   }        //

   getCities(value)
   {  return this.http.post('/api/user/profile/autocomplete/cities', value).pipe(
         catchError(error => throwError(error))
      );
   }

   getStates(value)
   {  return this.http.post('/api/user/profile/autocomplete/states', value).pipe(
         catchError(error => throwError(error))
      );
   }

   getCountries(value)
   {
      return this.http.post('/api/user/profile/autocomplete/countries', value).pipe(
         catchError(error => throwError(error))
      );
   }

   updateStateCountryByCity(data){
      return this.http.post('/api/user/profile/update/autocomplete/city/state-country', data, httpOptions).pipe(
         catchError(error => throwError(error)) );
   }

   updateCountryByState(state)
   {
      return this.http.post('/api/user/profile/update/autocomplete/state/country', state, httpOptions).pipe(
         catchError(error => throwError(error))
      );
   }

   updateUser(userData)
   {  return this.http.post('/api/user/profile/update', userData, httpOptions).pipe(
         catchError(error => throwError(error))
      );
   }

   updatePhoneCode(userData)
   {  return this.http.post('/api/user/profile/update/autocomplete/country', userData, httpOptions).pipe(
         catchError(error => throwError(error))
      );
   }

   forgotPassword(email){
      return this.http.post('/api/user/forgot-password', { email }).pipe(
         catchError(error => throwError(error))
      );
   }

   startLinkedin(){
      return this.http.get('/api/user/linkedin').pipe(
         catchError(error => throwError(error))
      )
   }



  logout()
  {
      localStorage.removeItem('token');
      this.userSource.next(null);
      this.router.navigate(['/']);
   }  

}
