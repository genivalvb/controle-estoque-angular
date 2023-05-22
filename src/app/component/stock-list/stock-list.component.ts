import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../model/item'
import { Stock } from '../../model/stock';
import { StockService } from '../../service/stock.service';
import { ItemService } from '../../service/item.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit{

  stocks: Stock[];
  item: Item;

  constructor(private stockService: StockService, 
    private route: ActivatedRoute, 
    private router: Router,
    private itemService: ItemService){
    this.stocks = [],
    this.item = new Item();
  }

  ngOnInit(): void {
    this.getStocks();
  }



  private getStocks(){
    this.stockService.getStocksList().subscribe((data: Stock[]) => {
      this.stocks = data;
    });
  }

  stockDetails(idStock: number){
    this.router.navigate(['component/stock-details/um/', idStock]);
  }

}
