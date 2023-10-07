import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  counter ?:number;
  constructor( private countSer :CounterService) {}
  ngOnInit(){
    this.countSer.getCounterVal().subscribe((val:number)=>this.counter = val)
  }
}
