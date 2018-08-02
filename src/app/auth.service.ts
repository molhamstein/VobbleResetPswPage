import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  reset_password(val, token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders()
        .set('Content-Type', 'application/json');
      this.http.post('http://159.65.202.38:3000/api/users/reset-password?access_token='+token,{email: val.email,newPassword : val.password}, {
        headers: headers
      })
        .subscribe(
          data => {
            console.log('data ', data);
            resolve(data);
          }, err =>{
            console.log('err ', err);
            reject(false);
          })
    })
  }

}
