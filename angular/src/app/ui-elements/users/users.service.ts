import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { User } from '../../models';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/users');
  }
  
  getProfile(abc: any): Observable<any> {
	  console.log('email');
	 
	  return this.http.get('//localhost:8080/profile/'+ abc);
  }
  
  register(user: User) {
	  var strUser = JSON.stringify(user);
	  console.log('in service'+strUser);
	  
		let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
		headers.append('Cache-control', 'no-cache');
		headers.append('Cache-control', 'no-store');
		headers.append('Expires', '0');
		headers.append('Pragma', 'no-cache');
      
	  return this.http.post('//localhost:8080/register', user, { headers: headers }).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured"+JSON.stringify(err));
        }
      );
  }
  
  
  
}