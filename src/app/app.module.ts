import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './component/item-list/item-list.component';
import { ItemDetailsComponent } from './component/item-details/item-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateItemComponent } from './component/create-item/create-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LogfutureListComponent } from './component/logfuture-list/logfuture-list.component';
import { MovementListComponent } from './component/movement-list/movement-list.component';
import { PersonListComponent } from './component/person-list/person-list.component';
import { PrevisionListComponent } from './component/prevision-list/prevision-list.component';
import { ReserveListComponent } from './component/reserve-list/reserve-list.component';
import { RoleListComponent } from './component/role-list/role-list.component';
import { StockListComponent } from './component/stock-list/stock-list.component';
import { PersonDetailsComponent } from './component/person-details/person-details.component';
import { StockDetailsComponent } from './component/stock-details/stock-details.component';
import { ControleComponent } from './component/controle/controle.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemDetailsComponent,
    CreateItemComponent,
    LogfutureListComponent,
    MovementListComponent,
    PersonListComponent,
    PrevisionListComponent,
    ReserveListComponent,
    RoleListComponent,
    StockListComponent,
    PersonDetailsComponent,
    StockDetailsComponent,
    ControleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
