import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent implements OnInit {

  public cocktails : Cocktail[] = [
    {name : "Mojito", img : "https://cache.marieclaire.fr/data/photo/w1000_ci/54/mojito.webp", description : "De la menthe, du sucre de canne, du citron vert, du rhum, de l'eau gazeuse et le tour est joué pour réaliser un mojito maison !"},
    {name : "Roastic", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRmL32TU1RGTovMWcohzwmOq_337hLeEh_Ng&usqp=CAU", description : "Découvrez notre recette pas à pas pour réussir à coup sûr le cocktail d'origine cubaine. !"},
    {name : "Mai Tao", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWoZj5L7ChyAFeIj2I7mc4ByKI5kiIYlWv2g&usqp=CAU", description : " de l'eau gazeuse et le tour est joué pour réaliser un mojito maison !"},
  ]
  
  public selectedCocktail! : Cocktail;

  constructor() { }

  ngOnInit(): void {
    this.selectedCocktail = this.cocktails[0]
  }

  public changeCocktail(index : number):void{
    this.selectedCocktail = this.cocktails[index]
  }

}
