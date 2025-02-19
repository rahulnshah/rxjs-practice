import { of, range } from 'rxjs';
import { concatMap, delay, filter, last, first, map, takeLast, reduce } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { from } from 'rxjs';
import { scan } from 'rxjs/operators';
// 1
let a = of(1,2,3,4,5);
//a.subscribe(x => console.log(x));

// 2
let b = of(1,2,3,4,5);
//b.pipe(map(x => x * 2)).subscribe(x => console.log(x));

// 3
let c = from([1,2,3,4,5]);
//c.pipe(concatMap(x => of(x).pipe(map(x => x == 2), delay(1000)))).subscribe(x => console.log(x));

c = from([100,200,300,400,500]);
//c.pipe(delay(5000)).subscribe(x => console.log(x));

// 4
let d = from(["hello", "world", "goodbye", "world"]);
//d.pipe(map(x => x[0])).subscribe(x => console.log(x));
//d.pipe(map(x => x.toUpperCase())).subscribe(x => console.log(x));

// 5 
let e = of({"name": "John", "age": 30}, {"name": "Jane", "age": 25});
//e.pipe(filter(x => x.age > 25)).subscribe(x => console.log(x));

e  = of(1,2,3,4,5);
e = of({"name": "John", "age": 30}, {"name": "Jane", "age": 25});
//e.pipe(map(x=> x * 2), filter(x => x > 5)).subscribe(x => console.log(x));
//e.pipe(map(o => o.age)).subscribe(x => console.log(x));

// 6
let f = range(1, 10);
//f.pipe(filter(x => x % 2 == 0)).subscribe(x => console.log(x));
//f.pipe(scan((acc, x) => acc + x, 0), last()).subscribe(x => console.log(x));
//f.pipe(first(), delay(3000)).subscribe(x => console.log(x));
// f.pipe(map(x => {
//     if(x % 2 == 0){
//         return "Even";
//     }
//     return "Odd";
// })).subscribe(x => console.log(x));

// 7
let g = of(1,2,3,4,5);
//g.pipe(map((v, i) => `Index: ${i}, value: ${v}`)).subscribe(x => console.log(x));
//g.pipe(map(x => ({"original": x, "squared": x * x, "doubled": x * 2}))).subscribe(x => console.log(x));
//g.pipe(reduce((acc, x) => acc + x, 0)).subscribe(x => console.log(x));
//g.pipe(scan((acc, x) => acc * x, 1)).subscribe(x => console.log(x));