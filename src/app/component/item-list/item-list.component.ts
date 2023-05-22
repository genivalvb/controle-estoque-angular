import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../model/item';
import { ItemService } from '../../service/item.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{

  items: Item[];
  
  constructor(private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router){
      this.items = [];
    }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems(){
    this.itemService.getItemsList().subscribe(data => {
      this.items = data;
    });
  }

  itemDetails(id: number){
    this.router.navigate(['component/item-details/um/', id]);
  }

}
