import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../../../services/cocktail.service';
import { Cocktail } from '../../../models/cocktail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

public cocktailDetail:any;
public loader: boolean;


  constructor(
    private CocktailService: CocktailService,
    private route : ActivatedRoute) {
      this.cocktailDetail = null
      this.loader = true;
   }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let id = params['id'];
      this.CocktailService.getCocktailById(id).subscribe(cocktail =>{
        this.cocktailDetail = cocktail
        console.log(this.cocktailDetail);
        this.loader = false
      }, error =>{
        console.log(error);

      })
    }, error =>{
      console.log(error);

    })
  }

}
