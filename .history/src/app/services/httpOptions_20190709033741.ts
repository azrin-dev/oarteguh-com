import { HttpHeaders } from '@angular/common/http';

const jwtToken = localStorage.getItem('token');

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'jwtToken': jwtToken
  })
};