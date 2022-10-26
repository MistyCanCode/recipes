import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Brownies', 'This is the description of some brownies and they are very yummy and have no fat or calories.', 'https://th.bing.com/th/id/OIP.NQev80xHcMrAxRU4L5s5_AHaLH?pid=ImgDet&rs=1'),
    new Recipe('Cookies', 'This is a description for some cookies. They also have no sugar, fat, or calories.', 'https://th.bing.com/th/id/OIP.mbcWcXfQnjpHiOvcHW8cSQHaLH?pid=ImgDet&rs=1')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
