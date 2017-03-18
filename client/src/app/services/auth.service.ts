import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()

export class AuthService{
    authToken: any;
    user:any;
    constructor(private http: Http){

    }
    //Login
    authenticateUser(user){
        const headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
            .map(res=> res.json());
        
    }
    storeUserData(token,user){
        localStorage.setItem('id_token',token);
        localStorage.setItem('User', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    //checks if we are still logged Logged in 
    loggedIn(){
        return tokenNotExpired();
    }
    //Logout
    logout(){
        this.authToken = null,
        this.user = null,
        localStorage.clear();
    }
}