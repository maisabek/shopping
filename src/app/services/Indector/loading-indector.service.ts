import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {distinctUntilChanged,delay} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class LoadingIndectorService {
  constructor() {}
  private loading:any=0

  // Subject to emit the state of the loading indicator.
  private readonly _loading$:Subject<any>=new BehaviorSubject<boolean>(false)

  readonly loading$:Observable<boolean>=this._loading$.pipe(distinctUntilChanged())

   // Return the loading state
   private isLoading(): boolean {
    return this.loading > 0;
   }

   start() {
    this.loading++;
    // Emit the loading state (true Or false)
    this._loading$.next(this.isLoading());
  }
  stop() {
      if (this.loading > 0) {
        this.loading--;
        this._loading$.next(this.isLoading());
      }
  }
}
