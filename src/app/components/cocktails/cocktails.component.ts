import { Component, OnInit } from '@angular/core';
import { Ifilter } from 'src/app/interfaces/ifilter';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

   public showFilter: boolean;
   public filter:Ifilter;
   public cocktailsList:any[] = [];
   public loader: boolean;
   public items: number;
   public page: number;
   public searchList: [{name:string, value:string}, {name:string, value:string}, {name:string, value:string}, {name:string, value:string}]




  constructor(private cocktail:CocktailService) {

     this.showFilter = false;
     this.loader = false;
     this.items = 12;
     this.page= 1;
     this.filter = {
      searchBy: 'name',
      filterText: ''
    };
    this.searchList = [
      {
        name:'Nombre',
        value: 'name'
      },
      {
        name:'Vaso',
        value: 'glass'
      },
      {
        name:'Ingredientes',
        value: 'ingredient'
      },
      {
        name:'Categoría',
        value: 'category'
      }
    ]
  }

  ngOnInit(): void {
  }
  hideShowFilter(){
     this.showFilter = !this.showFilter;
  }
  filterData(){
    this.loader = true
    this.cocktail.getCocktailByFilter(this.filter).subscribe(cocktails =>{
    this.cocktailsList = cocktails;
    this.loader = false
})
  }
}
