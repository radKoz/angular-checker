import { CheckService } from './../check.service';
import { HistoryComponent } from './../history/history.component';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
  key;

  constructor(
    private checkService: CheckService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.serverData = this.checkService.serverData;
    this.detailRoute();


  }

  detailRoute() {

    this.route.paramMap
      .subscribe(params => {

        this.key = params.get('key')
        
        this.serverData = this.checkService.serverData;

        if (this.checkService.storedItems.findIndex(x => x.key === this.key) > -1) {

          for (let i = 0; i < this.checkService.storedItems.length; i++) {

            if (this.key == this.checkService.storedItems[i].key) {

              this.item = this.checkService.storedItems[i]

              // console.log(this.checkService.storedItems[i])
            }
          }
        } else {

          console.log("Brak w bazie")
        }

      }
      )
  }
  tester() {

  }

}


