import { CheckService } from './../check.service';
import { HistoryComponent } from './../history/history.component';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.css']
})
export class HistoryDetailComponent implements OnInit {
storedItemon;
testData;
companyInfo;
  constructor(
    private checkService: CheckService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.checkService.getItem(params.get('key')))
      .subscribe(storedItem => this.storedItemon = storedItem);
  }

  teston() {
    const brokje = this.checkService.getItem(this.checkService.searchValue)
    
    
      console.log(brokje)


  }  

}