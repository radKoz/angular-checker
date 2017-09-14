import { CheckService } from './../check.service';
import { CheckComponent } from './../check/check.component';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [CheckComponent]
})

export class HistoryComponent implements OnInit {

  // inputVal: Array <any> = this.checkService.inputValueArr
  // newestElement = ' ';
 storedItems;



  constructor(private checkService: CheckService,
    private checkComponent: CheckComponent) { }


delete(id: string) {
  this.storedItems = this.checkService.storedItems;
  
      for (let i = 0; i < this.checkService.storedItems.length; i++) {
        if (id === this.checkService.storedItems[i].key) {
  
         this.checkService.storedItems.splice(i, 1);
  
        }
      }
  
      localStorage.setItem("inputVal", JSON.stringify(this.checkService.storedItems))
    }

  tester() {

    console.log("storedItems " + this.storedItems)

  }

  reset() {
    localStorage.clear();
    location.reload();
  }


  ngOnInit() {

    this.storedItems = this.checkService.storedItems;
  }




}
