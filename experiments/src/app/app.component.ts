import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'experiments';

  ngOnInit() {
    const firstSubject = new Subject();
    const observable = new Observable((observer) => observer.next('Hello'));
    firstSubject.subscribe((vl) => console.log(`1st: ${vl}`));
    firstSubject.next(3);

    firstSubject.subscribe((vl) => console.log(`2nd: ${vl}`));
    firstSubject.next(9);

    observable.subscribe((vl) => console.log(`1st: ${vl}`));

    observable.subscribe((vl) => console.log(`2nd: ${vl}`));
  }
}
