import { Cocktail } from './../models/cocktail.model';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ifilter } from '../interfaces/ifilter';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

constructor(private http:HttpClient) {

}
public Url_base = 'https://www.thecocktaildb.com/api/json/v1/1/';
getCocktailByFilter(filter: Ifilter){

  let url_complement = '';

  if(filter.searchBy === 'name'){
    url_complement = `search.php?s=${filter.filterText}`
  }else{
    url_complement = 'filter.php?';
    if(filter.searchBy === 'glass'){
      url_complement += 'g=';
    }else if(filter.searchBy === 'category'){
      url_complement += 'c=';
    }else{
      url_complement += 'i=';
    }
    url_complement += filter.filterText;
  }
  const url = `${this.Url_base}${url_complement}`;
  console.log(url);

  return this.http.get(url).pipe(
    map((data: any) => this.parseData(_.get(data, 'drinks')))
  );
}
getCocktailById(id: string){
  return this.http.get(`${this.Url_base}lookup.php?i=${id}`).pipe(
    map((data:any) =>{
      const detailList = this.parseData(_.get(data, 'drinks'))
      return detailList[0];
    })
  )
}
private parseData(cocktails:Cocktail){
  let newListCocktails: Cocktail[] = [];
  _.forEach(cocktails, (c:any) => {
    let cocktail = new Cocktail(c);
    newListCocktails.push(cocktail)
  });
  return newListCocktails
}

}
