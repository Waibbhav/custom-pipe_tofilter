import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.scss']
})
export class CustompipeComponent implements OnInit {
  searchText:string='';
arr=['waibbhav','soumyadeep','ishan','athistha']
  constructor() { }

  ngOnInit(): void {
  }

update(){
 this.arr.push (this.searchText);
  }

 

}
