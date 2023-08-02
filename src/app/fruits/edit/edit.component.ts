import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  fruitsObject: Fruits = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0
  }

  constructor(private fruitsSvc: FruitsService, 
      private router: Router, 
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
        (param) => {
          var id = Number(param.get('id'));
          this.getFruitById(id);
        }
    )
  }

  getFruitById(id: number) {
    this.fruitsSvc.getById('fruits', id).subscribe(
      (data) => {
        this.fruitsObject = data;
      }
    )
  }

  update() {
    return this.fruitsSvc.update('fruits', this.fruitsObject)
        .subscribe(
          {
            next: (data) => { this.router.navigate(['/fruits/home']) },
            error: (err) => { console.log(err) }
          }
    );
  }
}
