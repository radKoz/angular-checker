import { CheckService } from './../check.service';

import { CheckComponent } from './../check/check.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-detail',
  templateUrl: './check-detail.component.html',
  styleUrls: ['./check-detail.component.css']
})

export class CheckDetailComponent implements OnInit {


  constructor(private checkComponent: CheckComponent, private checkService: CheckService) { }

  ngOnInit() {

  }

}
