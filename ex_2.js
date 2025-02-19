import { catchError, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
function fetchData(){
    return new Promise((resolve, reject) => {
        let success = false;
        if(success)
        {
            resolve('Data fetched successfully');
        }
        else
        {
            reject('Data fetch failed');
        }
    });
}

let a$ = from(fetchData());
// a$.subscribe({
//     next: (data) => console.log(data),
//     error: (err) => console.log(err),
//     complete: () => console.log('Completed')
// });

let b$ = of(1,2,3,4,5);
b$.pipe(map(x => x / 0), catchError((error) => {
    return of('Error found');
})).subscribe({
    next: (data) => console.log(data),
    error: (err) => console.log(err)
});