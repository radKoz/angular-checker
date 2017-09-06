import { CheckService } from './check.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CheckComponent } from './check/check.component';
import { HistoryComponent } from './history/history.component';
import { CheckDetailComponent } from './check-detail/check-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CheckComponent,
    HistoryComponent,
    CheckDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    CheckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
