import {interval, map, take} from "rxjs";

export function runObserverPattern() {
    const emitter$ = interval(1000).pipe(take(10));
    emitter$.subscribe(n => console.log('1. Subscriber' + n));
    emitter$.subscribe(n => console.log('2. Subscriber' + n));

    setTimeout(() => {
        emitter$.subscribe(n => console.log('3. Subscriber' + n));
    }, 4000);
}