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
  myJSON; 
  lsData;
  // storedItems = this.checkService.storedItems;
  // inputVal: Array <any> = this.checkService.inputValueArr;


  constructor(private checkService: CheckService) { }

 // pobiera dane z serwera
  loadData(): void {
    // this.checkService.getData().subscribe(data => this.serverData = data);
    // this.checkService.myJSON = JSON.parse(JSON.stringify(this.serverData || null));
    // this.myJSON = this.checkService.myJSON;
    // this.isActive = true;
    // console.log(this.serverData)
  }

// zapisuje input
  saveInput(inputValue: string): void {
    this.checkService.searchValue = inputValue.toUpperCase()
    this.checkService.getData(inputValue.toUpperCase());
    this.compare()
   
  }

  
// sprawdza czy duplikat
  compare() {
    
    if 
      (this.checkService.storedItems.findIndex(x => x.key === this.checkService.searchValue)>-1)
     {
      console.log("show storeditems.value ;)")
     
      
     this.serverData = this.checkService.serverData;
     console.log(this.serverData)
      this.update()
    } else {
      this.store() 
      }
  }

// uaktualnia dane w localstorage 
  update() {
   this.lsData = JSON.parse(localStorage.inputVal);
    
    for (let i =0; i < this.lsData.length; i++) {
      if (this.checkService.searchValue === this.lsData[i].key && this.lsData[i].value === null) {
        this.lsData[i].value = "witam do testu"
        break;
      }
    }
    localStorage.setItem("inputVal", JSON.stringify(this.lsData))
  }

// dodaje input do localstorage
  store(): void {
    if (this.checkService.storedItems != null){
    this.checkService.storedItems.push(
      {key: this.checkService.searchValue,
      value: null}
    );
    } else {
      this.checkService.storedItems = [this.checkService.searchValue];
    }

    localStorage.setItem('inputVal', JSON.stringify(this.checkService.storedItems));
  }

  

    //pobiera dane z LS do array
   getDataFromLS(): void {

     if (window.localStorage.hasOwnProperty('inputVal')) {
      this.checkService.storedItems = JSON.parse(localStorage.getItem('inputVal')); 
      
     } else {
      this.checkService.storedItems = [];
      }
    }

  checkeroni(): void {
    // console.log("storedItems CHECKservice " + this.checkService.storedItems);
    // console.log("searchValue " + this.checkService.searchValue);
  }
  


  ngOnInit() {
    
    this.getDataFromLS();
    this.checkeroni();
    
   
}
}
/*
0. pobierany jest localstorage
1 koles wpisuje input 
2. input jest porownywany z localstorage
2.1 if input == for loop localstorage[i] { return te dane}
2.2 if input jest nowy wtedy odpalamy getData() z serwera
2.3 zapisujemy ten input razem z wynikiem chyba najlepiej bedzie jako array obiektow [{NIP: { wszystkie dane }}, {NIP2: { wszystkie dane}}]
*/

// Robimy tego brojona tzn pobieramy z serwera tak jak router zeby pokazal ladnie obiekt a nie promise