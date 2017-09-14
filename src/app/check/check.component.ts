
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

  // storedItems = ARRAY Z WSZYSTKIM W CHECK SERVICE
  // LSDATA = ARRAY POBIERANY Z LOCAL TUTAJ
  // SERVERDATA = POBIERANE Z SERWERA DANE



  constructor(private checkService: CheckService) { }



  // zapisuje input

  onClick(inputValue: string) {
    let inVal = inputValue.toUpperCase().replace(/-/g, '')
    this.checkService.getData(inVal)
    .subscribe(res => {
        
        this.checkService.serverData = res;
        this.checkService.err404 = false;
        this.serverData = this.checkService.serverData;
        this.checkService.searchValue = inVal;
        console.log(this.checkService.serverData)
        this.tutu()

        },
    (err: Response) => {
        if (err.status === 404){
          this.checkService.err404 = err.status;
        }
        console.log(this.checkService.err404)
    })
  
  }


tutu() {
  
  console.log("tutu serverdata " + this.serverData.data.id)

          this.compare()
        

        localStorage.setItem('inputVal', JSON.stringify(this.checkService.storedItems));

       
    
}

  // onClick(inputValue: string): void {
    // WTFFFFFFFFFFFFF :DDDDDDDDDDDDDDDDDDD
  //   let inVal = inputValue.toUpperCase().replace(/-/g, '')
  //   this.checkService.getData(inVal);
  //   if (this.checkService.serverData) {

  //     if (inVal == this.checkService.serverData.data.id) {
  //       this.serverData = this.checkService.serverData;
  //       this.checkService.searchValue = inVal;

  //       if (this.serverData !== undefined && this.serverData.data.id == inVal && !this.checkService.err404) {
  //         this.compare()
  //       }

  //       localStorage.setItem('inputVal', JSON.stringify(this.checkService.storedItems));

  //       console.log("onclick")

  //     }  else if(this.checkService.err404) {
  //       this.checkService.err404;
  //       console.log('olej wew ' )
  //     }else {
  //       setTimeout(() => {
  //         console.log("test srodek");
  //         this.onClick(inputValue)
  //       }, 500);
  //     }

  //   } else if(this.checkService.err404) {
  //     this.checkService.err404;
  //    console.log('olej zew'+this.checkService.err404)
  //   } else {
  //     setTimeout(() => {
  //       console.log("test na zwenarz");
  //       this.onClick(inputValue)
  //     }, 500);
  //   }
  // }


  // sprawdza czy znajduje sie w bazie  - to bedzie w history component
  compare() {

    if
      (this.checkService.storedItems.findIndex(x => x.key === this.checkService.searchValue) > -1) {
      console.log("Compare if")

      this.update()

    } else {
      console.log('compare else CZYLI STORE OD RAZU')
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

  delete() {

  }



  store() {
    this.checkService.storedItems.push(
      {
        key: this.checkService.searchValue,
        value: null
      });
    this.update()
  }
  // dodaje input do localstorage
  // store(): void {

  //   if (this.checkService.storedItems == null) {

  //     this.checkService.storedItems.push(
  //       {
  //         key: this.checkService.searchValue,
  //         value: null
  //       });
  //     this.update()
  //     console.log("store if CZYLI DODAJ PUSTY DO STORED ITEMS I DAJ UPDATE")

  //   } else {

  //     console.log("store else CZYLI NIC LOL")

  //   }

  // }


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

