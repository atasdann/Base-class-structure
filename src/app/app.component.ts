import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BaseBank';
}

export interface Bank{
  addMoney(money:number):boolean;
  spendMoney(money:number):boolean;
  getMoney():number;
  getBankName():string;
  moneyCheck():boolean;
}
export interface KatilimBank extends Bank{
  kobi():boolean;
}
export abstract class BaseBank{
  private name="BaseBank";
  private money:number=0;
  constructor(name:string ){
    this.name=name;
  }
  addMoney(money:number):boolean{
    this.money+=money;
    return true;
  }
  spendMoney(money:number):boolean{
    this.money-=money;
    return true;
  }
  getMoney():number{

    return this.money;
  }
  getBankName():string{
    return this.name;
  }
  moneyCheck(): boolean {
    return false;
  }
}
  export class ZiraatBank extends BaseBank implements Bank{
    constructor(){
      super("Ziraat");
    }
  }
  export class GarantiBank extends BaseBank implements Bank{
    constructor(){
      super("Garanti");
    }
    override moneyCheck(): boolean {
      return true;
    }
    test(){
    }
  }
  export class FinansBank extends BaseBank implements KatilimBank{
    constructor(){
      super("Finansbank");
    }
    kobi(): boolean {
      return false;
    }
  }
export function getBankType(bank:string):Bank{
  if(bank=="Garanti") return new GarantiBank();
  else if(bank=="Finans") return new FinansBank();
  else return new ZiraatBank();
}
let bank:Bank= getBankType("Ziraat");
bank.addMoney(15);
bank.spendMoney(5);
console.log("Bank money:",bank.getBankName(),bank.moneyCheck(),bank.getMoney());
export interface BaseEntity<T>
{
  id:T;
}
export interface User extends BaseEntity<string>{
  name:string;
}
export interface Category extends BaseEntity<number>{
  name:string;
}
var user:User={
  id:"test",
  name:"test"
}
var category:Category={
  id:1,
  name:"test"
}
