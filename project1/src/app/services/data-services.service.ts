import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { error } from 'protractor';
import { Response } from 'selenium-webdriver/http';
import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string , private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url).catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, resource).catch(this.handleError);
  }

  update(resource) {
    return this.http.put(this.url + '/' + resource.id, resource).catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id).catch(this.handleError)
  }


  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadRequestError(error));

    if (error.status === 404)
      return Observable.throw(new NotFoundError(error));

    return Observable.throw(new AppError(error));
  }
}
