import { CheckService } from './../check.service';
import { HistoryComponent } from './../history/history.component';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.css']
})

export class HistoryDetailComponent implements OnInit {
  storedItems;
  serverData;
  item;
  noData = ""
  key;

  constructor(
    private checkService: CheckService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    this.serverData = this.checkService.serverData;
    this.detailRoute();


  }

  detailRoute() {
    this.route.paramMap
      .subscribe(params => {
        
        this.key = params.get('key')
        console.log(this.key)
        this.serverData = this.checkService.serverData;

        if (this.checkService.storedItems.findIndex(x => x.key === this.key) > -1) {

          for (let i = 0; i < this.checkService.storedItems.length; i++) {

            if (this.key == this.checkService.storedItems[i].key) {
              // console.log(this.key + " w logu")
              this.item = this.checkService.storedItems[i]
              // console.log(this.item.key + " w logu")
              // console.log(this.checkService.storedItems[i])
            }
          }
        } else {

          this.noData = "Brak w bazie danych";

        }
        //  console.log("KEY "+this.key)
        //  console.log("ITEM "+this.item.Name)

      }
      )
  }
  tester() {
    console.log(this.noData)
  }

}

// wpisujemy numer => wszystko sie ladnie robione > dodaje sie do historii > pokazuja sie dane po kliknieciu w historie. maja sie pokazywac od razu automatycznie. 
