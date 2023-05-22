import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { FormGroup, FormControl } from '@angular/forms';
import { ItemService } from '../../service/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit{

  item: Item = new Item();



  constructor(private itemService: ItemService, private router: Router){}

  ngOnInit(): void {
   
  }
  onSubmit(){
    console.log(this.item);
    this.saveItem();
  }

  saveItem(){
    this.itemService.createItem(this.item).subscribe( data =>{
      console.log(data);
      this.goToItemList();
    },
    error => console.log(error));
  }

  goToItemList(){
    this.router.navigate(['/items']);
  }

}
