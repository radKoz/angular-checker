
import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

// obs operators
import {Observable } from 'rxjs'; 
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';



interface StoredItem {
    key: number,
    value: string
  }

@Injectable()
export class CheckService implements OnInit {


storedItems: Array<any>; 
storedItem;
// inputValueArr = []
// myJSON = '';
detailItem;

searchValue: string;
isNotEmpty: boolean;

serverData;
err404;
serverError: boolean;
 // fake server
// private serverDataUrl = 'api/fakeServerData'




constructor(private http: Http) {}


ngOnInit() {
    
}


getData(key: string){
    let url = `http://ihaveanidea.aveneo.pl/NIPAPI/api/Company?CompanyId=${key}`

    // fake url
    // let url = `${this.serverDataUrl}/${key}`;
     console.log(url)
    return this.http.get(url)
        .map(res => res.json())
}



  
}

