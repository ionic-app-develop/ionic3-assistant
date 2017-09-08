/**
 * Created by DELL on 9/8/2017.
 */
import {Injectable} from '@angular/core';
import {Http, RequestOptions, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Authentication {
  private token: string;
  private username: string;
  private userId: string;

  constructor(private http: Http) {
  }

  getToken() {
    const currentToken = localStorage.getItem('usertoken');
    if (currentToken) {
      this.token = currentToken;
    }
    return this.token;
  }

  getUserName() {
    const currentUserName = localStorage.getItem('username');
    if (currentUserName) {
      this.username = currentUserName;
    }
    return this.username;
  }

  getUserId() {
    const currentUserId = localStorage.getItem('userId');
    if (currentUserId) {
      this.userId = currentUserId;
    }
    return this.userId;
  }
}
