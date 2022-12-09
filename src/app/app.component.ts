import { Cocktail } from './interfaces/cocktail.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {


  ngOnInit(): void {
    
  }

  public selectedCocktail : Cocktail | undefined;

  public changeCocktailInfo(event : Cocktail){
    this.selectedCocktail = event
  }

}
