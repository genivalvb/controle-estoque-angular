import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './component/create-item/create-item.component';
import { ItemDetailsComponent } from './component/item-details/item-details.component';
import { ItemListComponent } from './component/item-list/item-list.component';
import { PersonDetailsComponent } from './component/person-details/person-details.component';
import { StockDetailsComponent } from './component/stock-details/stock-details.component';
import { PersonListComponent } from './component/person-list/person-list.component';
import { StockListComponent } from './component/stock-list/stock-list.component';
import { MovementListComponent } from './component/movement-list/movement-list.component';

const routes: Routes = [
  { path: 'items', component: ItemListComponent},
  { path: 'create-item', component: CreateItemComponent},
  { path: 'people', component: PersonListComponent},
  { path: 'stock', component: StockListComponent },
  { path: 'movement', component: MovementListComponent },
  { path: '', redirectTo: 'items', pathMatch: 'full'},
  { path: 'item-details/um/id', component: ItemDetailsComponent},
  { path: 'person-details/um/id', component: PersonDetailsComponent},
  { path: 'stock-details/um/id', component: StockDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
