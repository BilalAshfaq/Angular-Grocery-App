import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {
  private subject = new Subject<any>();

  sendData(grocery: string) {
    this.subject.next({ text: grocery });
}

clearMessages() {
  this.subject.next();
}

getData(): Observable<any> {
  return this.subject.asObservable();
}

  constructor() { }
}
