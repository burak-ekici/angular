import { Component, OnInit ,Input, Output, EventEmitter, ViewChild , ElementRef } from '@angular/core';
import { Cocktail } from 'src/app/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  @Input() public cocktails! : Cocktail[]
  @Output() private newSelectedCocktail : EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public selectCocktail(index : number): void{
    this.newSelectedCocktail.emit(index)
  }

}
