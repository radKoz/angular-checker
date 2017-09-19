
import { CheckService } from "./check.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { CheckComponent } from "./check/check.component";
import { HistoryComponent } from "./history/history.component";
import { HistoryDetailComponent } from "./history-detail/history-detail.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
// material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MdButtonModule, MdInputModule, MdProgressSpinnerModule, MdListModule, MdIconModule, MdCardModule, MdExpansionModule, MdProgressBarModule } from "@angular/material";



// web API Simulation

import { InMemoryWebApiModule } from "angular-in-memory-web-api/in-memory-web-api.module";
import { InMemoryDataService }  from "./in-memory-data.service";


import { LoaderComponent } from "./shared/loader/loader.component";


@NgModule({
  declarations: [
    AppComponent,
    CheckComponent,
    HistoryComponent,
    // CheckDetailComponent,
    HistoryDetailComponent,
    LoaderComponent,


  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule,
    //material modules
    MdButtonModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdExpansionModule

  ],
  providers: [
    CheckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
