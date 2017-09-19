import "rxjs/add/operator/switchMap";

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CheckService } from "./../check.service";


@Component({
  selector: "app-check",
  templateUrl: "./check.component.html",
  styleUrls: ["./check.component.css"],

})

export class CheckComponent implements OnInit {

  // dane z serwera
  serverData;

  // storedItems - array w checkService ze wszystim

  // progress spiner
  loading = false;

  // error message
  isInHistory: boolean;
  serverError: boolean;

  constructor(public checkService: CheckService, public router: Router) { }



  onClick(inputValue: string) {
    // zapisuje input
    const inVal = inputValue.toUpperCase().replace(/-/g, "");

    this.loading = true;

    this.checkIfInHistory(inVal);
  }


  checkIfInHistory(inVal: string) {
    // sprawdza czy dane są już w historii
    if (this.checkService.storedItems.findIndex(x => x.key === inVal) > -1 && this.checkService.storedItems.findIndex(x => x.value) > -1) {
      this.update();

      this.isInHistory = true;
      this.loading = false;
      this.checkService.err404 = false;
    }
    else {
      this.loading = true;
      this.isInHistory = false;

      this.callServer(inVal);
    }
  }


  callServer(inVal: string) {
    this.checkService
      .getData(inVal)
      .subscribe(res => {
        // Router
        this.router.navigate(["/detail", inVal]);

        this.checkService.serverData = res;
        this.checkService.err404 = false;
        this.serverData = this.checkService.serverData;
        this.checkService.searchValue = inVal;

        this.afterServerGet();
        this.loading = false;
      }, (err: Response) => {
        if (err.status === 404) {
          this.checkService.err404 = err.status;
          this.loading = false;
        } else {
          console.log(err);
          this.checkService.serverError = true;
          this.serverError = this.checkService.serverError;
          this.loading = false;
        }
        console.log(this.checkService.err404);
      }), () => this.loading = false;
  }


  afterServerGet() {
    this.compare();

    localStorage.setItem("inputVal", JSON.stringify(this.checkService.storedItems));
  }


  // sprawdza czy znajduje sie w bazie
  compare() {

    if

      (this.checkService.storedItems.findIndex(x => x.key === this.checkService.searchValue) > -1) {

      this.update();

    } else {

      this.store();

    }
  }

  // uaktualnia dane w localstorage
  update() {

    // spr czy key jest w localstorage i przypisuje do niego value
    for (let i = 0; i < this.checkService.storedItems.length; i++) {
      if (this.checkService.searchValue === this.checkService.storedItems[i].key) {

        //fake data
        this.checkService.storedItems[i].value = this.serverData.data.value.CompanyInformation;

      }
    }

    localStorage.setItem("inputVal", JSON.stringify(this.checkService.storedItems));
  }

  store() {
    this.checkService.storedItems.push(
      {
        key: this.checkService.searchValue,
        value: null
      });

    this.update();
  }


  //pobiera dane z LocalStorage do array
  getDataFromLS(): void {

    if (window.localStorage.hasOwnProperty("inputVal")) {
      this.checkService.storedItems = JSON.parse(localStorage.getItem("inputVal"));


    } else {
      this.checkService.storedItems = [];
    }

  }

  ngOnInit() {

    this.getDataFromLS();

  }

}
