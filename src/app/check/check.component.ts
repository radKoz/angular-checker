import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';

import { CheckService } from './../check.service';


@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],

})

export class CheckComponent implements OnInit {
  // dane z serwera
  serverData;
  serverError: boolean;
  // storedItems = ARRAY Z WSZYSTKIM W CHECK SERVICE
  // SERVERDATA = POBIERANE Z SERWERA DANE

  detailItem;

  isInHistory: boolean;
  loading: boolean = false;



  constructor(private checkService: CheckService) { }

  // zapisuje input

  onClick(inputValue: string) {
    // console.log(this.checkService.storedItems)

    let inVal = inputValue.toUpperCase().replace(/-/g, '')

    this.loading = true;

    // sprawdza czy dane są już w historii

    if (this.checkService.storedItems.findIndex(x => x.key === inVal) > -1 && this.checkService.storedItems.findIndex(x => x.value) > -1) {

      // console.log("onclick if")
      this.update()


      this.isInHistory = true;
      this.loading = false;
      this.checkService.err404 = false;

    } else {

      this.loading = true;
      this.isInHistory = false;

      this.checkService
        .getData(inVal)
        .subscribe(res => {


          this.checkService.serverError = false;
          if (res.CompanyInformation != null) {


          this.checkService.serverData = res;
          this.checkService.err404 = false;
          this.serverData = this.checkService.serverData;
          this.checkService.searchValue = inVal;
          console.log(this.serverData);
          // console.log(this.checkService.serverData)

          // pokazuje kartę
          this.detailItem = inVal;
          

          this.afterServerGet()
          this.loading = false;

          } else {
            this.loading = false
            this.checkService.err404 = true;
          }
        },
        (err: Response) => {

          if (err.status === 404) {

            this.checkService.err404 = err.status;
            this.loading = false


          } else {
            console.log(err);
            this.checkService.serverError = true;
            this.serverError = this.checkService.serverError;
            this.loading = false
          }

          console.log(this.checkService.err404)

        }), () => this.loading = false

    }
    
  }




  afterServerGet() {
    this.compare()

    localStorage.setItem('inputVal', JSON.stringify(this.checkService.storedItems));
  }

  // sprawdza czy znajduje sie w bazie  - to bedzie w history component
  compare() {

    if
      (this.checkService.storedItems.findIndex(x => x.key === this.checkService.searchValue) > -1) {
      // console.log("Compare if")

      this.update()

    } else {
      // console.log('compare else')
      this.store()

    }
  }

  // uaktualnia dane w localstorage 
  update() {

    // console.log("UPDATE() CZYLI SPR CZY JEST KEY W LOCALSTORATE / STORED ITEMS I PRZYPISUJE DANE")

    for (let i = 0; i < this.checkService.storedItems.length; i++) {
      if (this.checkService.searchValue === this.checkService.storedItems[i].key) {

        this.checkService.storedItems[i].value = this.serverData.CompanyInformation;

        //fake data
        // this.checkService.storedItems[i].value = this.serverData.data.value.CompanyInformation;

      }
    }

    localStorage.setItem("inputVal", JSON.stringify(this.checkService.storedItems))
  }

  store() {
    this.checkService.storedItems.push(
      {
        key: this.checkService.searchValue,
        value: null
      });
    this.update()
  }

  //pobiera dane z LS do array
  getDataFromLS(): void {

    if (window.localStorage.hasOwnProperty('inputVal')) {
      this.checkService.storedItems = JSON.parse(localStorage.getItem('inputVal'));


    } else {
      this.checkService.storedItems = [];
    }

  }

  ngOnInit() {

    this.getDataFromLS();


  }
}
