import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  collection:any = []
  constructor(private list: FlightService) { }

  ngOnInit(): void {
    this.list.getlist().subscribe(result => {
    this.collection  = result
    console.log(this.collection);
    })
  } 

  }
 



 