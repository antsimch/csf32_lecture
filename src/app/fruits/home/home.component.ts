import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  allFruits: Fruits[] = [];

  constructor(private fruitsSvc: FruitsService) { }

  ngOnInit(): void {
    this.fruitsSvc.getAll('fruits')
        .subscribe(
            (data) => {
              this.allFruits = data;
            }
        )
  }

  delete(id: number) {
    this.fruitsSvc.delete('fruits', id)
        .subscribe(
          (data) => {
            this.allFruits = this.allFruits.filter(obj => obj.id != id)
          }
        )
  }

}
