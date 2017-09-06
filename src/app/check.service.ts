import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable } from 'rxjs'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// obs operators



@Injectable()

export class CheckService {
storedItems: Array<any> = [];
inputValueArr = []
myJSON = '';
searchValue: string;

private url = 'https://dog.ceo/api/breed/hound/list'

constructor(private http: Http) {}




getData() {
    return this.http.get(this.url)
    .map(res => res.json())
    .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }




}

