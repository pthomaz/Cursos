import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.servie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService : ShoppingCartService,
              private router : ActivatedRoute) { }

  ngOnInit() {

  }

  items(): any[]{
    return this.shoppingCartService.items;
  }

  total() : number{
    return this.shoppingCartService.total();
  }
  clear(){
    this.shoppingCartService.clear();
  }
  removeItem(item : any){
    this.shoppingCartService.removeItem(item);
  }
  addItem(item : any){
    this.shoppingCartService.addItem(item);
  }

}
