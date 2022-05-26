// import {TestBed} from "@angular/core/testing";
// import {cold, getTestScheduler, hot} from "jasmine-marbles";
// import {flatMap, from, interval, map, of, take, throwError} from "rxjs";
//
// fdescribe('Basic Marble Testing', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//
//
//   })
//
//   it('should demonstrate example of marble diagram', () => {
//
//     const source = cold('-x-|');
//     const expected = cold('-x-|');
//
//     expect(source).toBeObservable(expected);
//   });
//
//   it('should demonstrate the hot observable and subscription', () => {
//     const hotSource = hot('-a-^-b-c|', {a:10, b: 20, c:30});
//     const subscription = '^----!';
//     const coldSource = cold('--x-y|', {x:20, y:30});
//
//     expect(hotSource).toBeObservable(coldSource);
//     expect(hotSource).toHaveSubscriptions(subscription);
//   });
//
//   it('should test cold method with of operator', () => {
//     const ofObs = of(1,2,3);
//     const coldObs = cold('(x-y-z|)', {x:1,y:2,z:3});
//
//     expect(ofObs).toBeObservable(coldObs);
//   });
//
//   it('should test error thrown', () => {
//
//     const source = from([1,2,3,4]).pipe(
//       flatMap(data => {
//         if (data >=3) {
//           return throwError(new Error('Error Occurred'));
//         }
//         return of(data);
//       })
//     );
//
//     const expected = cold('(-x-y-#)', {x:1, y:2}, new Error('Error Occured!'));
//     expect(source).toBeObservable(expected);
//   });
//
//   it('should test marble cold with rxjs interval', () => {
//     const interObs = interval(20,getTestScheduler()).pipe(
//       take(5),
//       map(x => x * 2),
//     );
//
//     const coldObs = cold('--a-b-c-d-(e|)', {a:0, b:2, c:4, d:6, e:8});
//
//     expect(interObs).toBeObservable(coldObs);
//   })
//
//   /*
//     Test example for getting a observable from a dependency and then displaying on screen.
//
//     let p$ = cold('(a\)', {a: data});
//     let productSpy = spyOn(testService, 'getProductList').and.returnValue(p$)
//
//     fixture.detectChanged(); //loads onInIt()
//
//     getTestScheduler().flush();
//
//     fixture.detectChanges();
//
//     expect(productSpy).toHaveBeenCalled();
//
//     //then query by CSS or HTML to check elements rendered correctly
//    */
//
// });
