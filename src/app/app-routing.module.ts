import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckComponent } from './check/check.component';
import { HistoryComponent } from './history/history.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';

const routes: Routes = [
  {
    path: 'history',
    component: HistoryComponent
  },

  {
    path: 'detail/:key',
    component: HistoryDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }