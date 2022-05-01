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
  coffeeVarietyList!: Set<{variety: string, total: number}>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCoffeeData().subscribe((response)=> {
      this.coffeeList = response
      this.coffeeVarietyList = this.calculateVariety(this.coffeeList);
    });
  }

  calculateVariety(coffeeList:Array<Coffee>) {
    let variety = new Set<string>();
    let result = new Set<{variety: string, total: number}>();
    coffeeList.forEach(item => variety.add(item.tipo));
    variety.forEach(varietyItem => {
      let count = 0;
      coffeeList.forEach(item => {
        if (item.tipo === varietyItem) count++;
      });
      result.add({variety: varietyItem, total: count})
    });
    return result;
  }

}
