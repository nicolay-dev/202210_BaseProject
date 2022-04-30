import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/models/coffee.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-coffee-view',
  templateUrl: './coffee-view.component.html',
  styleUrls: ['./coffee-view.component.css']
})
export class CoffeeViewComponent implements OnInit {

  coffeeList!: Array<Coffee>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCoffeeData().subscribe((response)=> {this.coffeeList = response});
  }

}
