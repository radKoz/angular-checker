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

  inputVal: Array <any> = this.checkService.inputValueArr
  // newestElement = ' ';
  @Input() storedItems;
 


  constructor(private checkService: CheckService,
    private checkComponent: CheckComponent) {   }

  


    tester() {
  
      console.log("inputVal  " + this.inputVal)
      console.log("storedItems " + this.storedItems)
      // console.log("newestElement  " + this.newestElement)
      // this.checkService.storedItems = JSON.parse(localStorage.getItem('inputVal')); 
    }

    reset() {
      localStorage.clear();
      location.reload();
    }


    ngOnInit() {
     this.storedItems = this.checkService.storedItems;
    }




}
