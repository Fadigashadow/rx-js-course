import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {
    concat,
    fromEvent,
    interval,
    noop,
    observable,
    Observable,
    of,
    timer,
    merge,
    Subject,
    BehaviorSubject,
    AsyncSubject,
    ReplaySubject
} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    ngOnInit() {

      // Multivalue Streams
      // Will continue to emit value overtime, and will never complete
      document.addEventListener('click', e => {
        console.log(e);
      })

      let counter = 0;

      setInterval(() => {
        console.log(counter);
        counter++

      }, 1000)

      // Emits a value and completes
      setTimeout(() => {

        console.log("finished...");

      }, 3000);

    }

}






