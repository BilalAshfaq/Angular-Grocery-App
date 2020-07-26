import { Component, OnInit } from '@angular/core';
import {ListDataService} from '../list-data.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {


  gorceryTitle:string;
  

  constructor(private service:ListDataService) { }

  sendGrocery(): void {
    // send message to subscribers via observable subject
    if(!(this.gorceryTitle === '')){
      this.service.sendData(this.gorceryTitle);
    }
}

clearMessages(): void {
  // clear messages
  this.service.clearMessages();
}

  ngOnInit() {
    this.gorceryTitle='';
  }

  
}
