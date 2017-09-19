import { ActivatedRoute } from '@angular/router';
import { CheckService } from './../check.service';

import { CheckComponent } from './../check/check.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-detail',
  templateUrl: './check-detail.component.html',
  styleUrls: ['./check-detail.component.css']
})

export class CheckDetailComponent implements OnInit {
  storedItems;
  serverData;
  item;
  noData = ""
  key;

  constructor(
    private checkService: CheckService,
    private route: ActivatedRoute
   
  ) { }

  ngOnInit() {

    this.serverData = this.checkService.serverData;

    this.route.paramMap
      .subscribe(params => {
        this.key = params.get('key')
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

      })
    // this.teston()
  }

  teston() {

  }

}


