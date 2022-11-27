import { Icocktail } from "../interfaces/icocktail";
import * as _ from 'lodash';
export class Cocktail implements Icocktail{

  constructor(data: string | number | string[]){
    _.set(this, 'data', data)
  }
  get id(): any{
    return _.get(this, 'data.idDrink');
  }
  get name(): any{
    return _.get(this, 'data.strDrink');
  }
  get category(): any{
    return _.get(this, 'data.strCategory');
  }
  get img(): any{
    return _.get(this, 'data.strDrinkThumb');
  }
  get glass(): any{
    return _.get(this, 'data.strGlass');
  }
  get ingredients(): string[]{
    return this.getData('strIngredient');
  }
  get numIngredients(): number{
    return this.ingredients.length;
  }
  get instructions(): any{
    return _.get(this, 'data.strInstructionsES') ? _.get(this, 'data.strInstructionsES') : _.get(this, 'data.strInstructions');
  }
  get measures(): string[]{
    return this.getData('strMeasure');
  }
  get numMeasures(): number{
    return this.measures.length;
  }
  private getData(param:string): string[]{
    let key = 1;
    let currentData = _.get(this, `data.${param}${key}`)
    let arrayData: any = [];

    while(currentData){
      arrayData.push(currentData);
      key++
      currentData = _.get(this, `data.${param}${key}`)
    }
    return arrayData;
  }
}
