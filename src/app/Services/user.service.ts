import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) {
  }

  login(data: { email: string, password: string }): Observable<any> {
    return this.api.post('/api/login', data);
  }

}