import { Component, OnInit } from '@angular/core';
import {Grocery} from '../interfaces/Grocery';
import {ListDataService} from '../list-data.service'
import { from } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  beforeEdit:string;
  groceries: Grocery[];
  gorceryTitle:string;
  groceryId:number;
  filter:string;

 
  subscription: Subscription;

  constructor(private dataservice:ListDataService) { 
    this.subscription = this.dataservice.getData().subscribe(message => {
      if (message) {
        this.addGroceryManually(message);
      } 
    });
  }

  ngOnInit() {

    this.beforeEdit='';
    this.groceryId=4;
    this.gorceryTitle='';
    this.filter='all';
    this.groceries=[
      {
        'id':1,
        'title':'Warm Milk',
        'bought':false,
        'editing':false
      },

      {
        'id':2,
        'title':'Dove Choclate',
        'bought':false,
        'editing':false
      },

      {
        'id':3,
        'title':'Knorr Noodles',
        'bought':false,
        'editing':false
      }
    ]

  }

  addGroceryManually(name:string):void{
    if(name.trim().length == 0){
      return;
    }
    this.groceries.push(
      
      {
        'id':this.groceryId++,
        'title':name,
        'bought':false,
        'editing':false
      }
    
  )
  }
  

  addGrocery():void{

    if(this.gorceryTitle.trim().length == 0){
      return;
    }

    this.groceries.push(
      
        {
          'id':this.groceryId++,
          'title':this.gorceryTitle,
          'bought':false,
          'editing':false
        }
      
    )

    this.gorceryTitle = '';
  }

  checkAllGroceries():void {

    this.groceries.forEach(grocery=>grocery.bought = (<HTMLInputElement>event.target).checked);

  }

  removeGrocery(id:number) : void{

    this.groceries=this.groceries.filter(grocery => grocery.id != id);

  }

  cancelEdit(grocery:Grocery):void{ 
    grocery.title=this.beforeEdit;
    grocery.editing=false;
  }

  editGrocery(grocery:Grocery):void{
    this.beforeEdit=grocery.title;
    grocery.editing=true;
  }

  doneEdit(grocery:Grocery):void{

    if(grocery.title.trim().length==0){
      grocery.title=this.beforeEdit;
    }

    grocery.editing=false;
  }

  remainingGroceries():number{
    return this.groceries.filter(grocery => !grocery.bought).length; 
  }

  clearBoughtItems():void {
    this.groceries=this.groceries.filter(grocery => !grocery.bought);
  }

  ifOneIsBought():boolean{
    return this.groceries.filter(grocery => grocery.bought).length>0; 
  }

  filterOnClick():Grocery[]{
    if(this.filter=='all'){
      return this.groceries; 
    }
    else if(this.filter=='Not Bought'){
      return this.groceries.filter(grocery=>!grocery.bought); 
    }
    else if(this.filter=='Bought'){
      return this.groceries.filter(grocery=>grocery.bought); 
    }
  }




}


