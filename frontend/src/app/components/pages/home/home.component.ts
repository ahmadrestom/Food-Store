import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  foods: Food[] = [];
  constructor(private foodServices:FoodService, activatedRoute:ActivatedRoute){
    //everytime the params change call the function inside subscribe
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        this.foods = this.foodServices.getAllFoodsBySearchTerm(params.searchTerm);
      else if(params.tag)
          this.foods = this.foodServices.getAllFoodByTag(params.tag);
      
      else
        this.foods = foodServices.getAll();
      });
  }
  
  ngOnInit(): void{

  }
}