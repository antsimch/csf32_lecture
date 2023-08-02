import { Component } from '@angular/core';
import { FruitsService } from '../fruits.service';
import { Fruits } from '../fruits';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  fruitsObject: Fruits = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0
  }

  constructor(private fruitsSvc: FruitsService, private router: Router) { }

  create() {
    this.fruitsSvc.create('fruits', this.fruitsObject)
        .subscribe(
          {
            next: (data) => { this.router.navigate(['/fruits/home']) }, 
            error: (err) => { console.log(err) }
      }
    );
  }
}
