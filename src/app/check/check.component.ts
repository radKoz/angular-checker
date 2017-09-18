
import { distinctUntilKeyChanged } from 'rxjs/operator/distinctUntilKeyChanged';
import { CheckDetailComponent } from './../check-detail/check-detail.component';
import { HistoryComponent } from './../history/history.component';
import { CheckService } from './../check.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],

})

export class CheckComponent implements OnInit {

  isActive: boolean;
  serverData;
  isInHistory: boolean;
  // storedItems = ARRAY Z WSZYSTKIM W CHECK SERVICE
  // LSDATA = ARRAY POBIERANY Z LOCAL TUTAJ
  // SERVERDATA = POBIERANE Z SERWERA DANE
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

          this.checkService.serverData = res;
          this.checkService.err404 = false;
          this.serverData = this.checkService.serverData;
          this.checkService.searchValue = inVal;

          // console.log(this.checkService.serverData)

          this.afterServerGet()
          this.loading = false;

        },
        (err: Response) => {

          if (err.status === 404) {

            this.checkService.err404 = err.status;
            this.loading = false
          }

          console.log(this.checkService.err404)

        }), () => this.loading = false

    }
  }




  afterServerGet() {
    // console.log("tutu serverdata " + this.serverData.data.id)

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
      // console.log('compare else CZYLI STORE OD RAZU')
      this.store()

    }
  }

  // uaktualnia dane w localstorage 
  update() {

    console.log("UPDATE() CZYLI SPR CZY JEST KEY W LOCALSTORATE / STORED ITEMS I PRZYPISUJE DANE")

    for (let i = 0; i < this.checkService.storedItems.length; i++) {
      if (this.checkService.searchValue === this.checkService.storedItems[i].key) {

        this.checkService.storedItems[i].value = this.serverData.data.value.CompanyInformation;

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
