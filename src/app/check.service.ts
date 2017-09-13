
import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable } from 'rxjs'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// obs operators


interface StoredItem {
    key: number,
    value: string
  }

@Injectable()
export class CheckService implements OnInit {
storedItems: Array<any>;
storedItem;
inputValueArr = []
myJSON = '';
searchValue: string;
isNotEmpty: boolean;
serverData: any[]
private serverDataUrl = 'api/fakeServerData'

constructor(private http: Http) {}


ngOnInit() {

}


getData(key: string){
    const url = `${this.serverDataUrl}/${key}`;
    this.http.get(url)
    .subscribe(res => {
        this.serverData = res.json();
    })
    console.log(this.serverData)
}

getItem(key: string) {

    const url = `${this.serverDataUrl}/${key}`;
    return this.http.get(url)
    .toPromise()
    .then(res => res.json().data as StoredItem)
    .catch(this.handleError)
   
}

getDuta() {

    return this.http.get(this.serverDataUrl)
    .toPromise()
    .then(response => response.json().data as StoredItem[])
    .catch(this.handleError)
}

// getData( ) {
//     const url = `${this.serverDataUrl}`;
//     return this.http.get(url)
//     .map(res => res.json())
//     .catch((error: any) => Observable.throw(console.log(error.message) || "Server error"));
//     }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred server', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }


}

