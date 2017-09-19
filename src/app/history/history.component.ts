import { CheckService } from './../check.service';
import { CheckComponent } from './../check/check.component';

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [CheckComponent]
})

export class HistoryComponent implements OnInit {


  storedItems: Array<Object>;


  constructor(
    private checkService: CheckService,
    private checkComponent: CheckComponent,
    private location: Location
  ) { }



  



  delete(id: string) {
    this.storedItems = this.checkService.storedItems;

    for (let i = 0; i < this.checkService.storedItems.length; i++) {

      if (id === this.checkService.storedItems[i].key) {
        this.checkService.storedItems.splice(i, 1);
      }
    }

    localStorage.setItem("inputVal", JSON.stringify(this.checkService.storedItems))
  }



  reset() {
    this.location.go('/')
    localStorage.clear();
    location.reload();
  }


  ngOnInit() {
    this.storedItems = this.checkService.storedItems;
  }

}
