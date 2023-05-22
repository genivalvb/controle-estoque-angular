import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movement } from '../../model/movement';
import { Item } from '../../model/item';
import { MovementService } from '../../service/movement.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit{

  movements: Movement[];
  
  constructor(private movementService: MovementService,
    private route: ActivatedRoute,
    private router: Router){
      this.movements = [];
    }

  ngOnInit(): void {
    this.getMovements();
  }

  private getMovements(){
    this.movementService.getMovementsList().subscribe(data => {
      this.movements = data;
    });
  }

  movementDetails(id: number){
    this.router.navigate(['component/movement-details/um/', id]);

}
}
