import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject(0);
  constructor() { }
  getCounterVal(){
    return this .counter.asObservable();
  }
  SetCountVal(newval: number){
    this.counter.next(newval)
  }
}
