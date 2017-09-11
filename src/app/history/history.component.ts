import { CheckService } from './../check.service';
import { CheckComponent } from './../check/check.component';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers:[CheckComponent]
})

export class HistoryComponent implements OnInit {

  // inputVal: Array <any> = this.checkService.inputValueArr
  // newestElement = ' ';
  @Input() storedItems;
 


  constructor(private checkService: CheckService,
    private checkComponent: CheckComponent) {   }

  
    // showValue() {
    //   if (this.storedItems.value === null) {

    //   }
    // }

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
