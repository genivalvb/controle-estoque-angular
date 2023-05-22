import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../model/person';
import { PersonService } from '../../service/person.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit{

  people!: Person[];

  constructor(private personService:PersonService, 
    private route: ActivatedRoute, 
    private router: Router){
    this.people = [];
  }

  ngOnInit(): void {
    this.getPeople();
  }

  private getPeople(){
    this.personService.getPeopleList().subscribe(data => {
      this.people = data;
    });
  }

  personDetails(idPerson: number){
    this.router.navigate(['component/person-details/um/', idPerson]);
  }

}
