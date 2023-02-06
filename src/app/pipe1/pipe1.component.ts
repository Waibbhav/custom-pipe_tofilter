import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe1',
  templateUrl: './pipe1.component.html',
  styleUrls: ['./pipe1.component.scss']
})
export class Pipe1Component implements OnInit {
titel1:string='lower to upper';
title2:string='UPPER TO LOWER';

oldDate = new Date(1998,8,5);
newDate = new Date(2022,11,21);
todayDate = new Date();

price :number =12345.6524;

jsonVal=[];

color =['red','blue','green','yellow']

  constructor() { }

  ngOnInit(): void {
  }

}
