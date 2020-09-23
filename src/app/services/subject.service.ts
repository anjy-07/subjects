import { Injectable } from '@angular/core';
import {  Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private subjectSource  = new ReplaySubject<number>(3);
  subjectObservable$: Observable<number> = this.subjectSource.asObservable();


  constructor() { }

  demoSubjects(count: number) {
    this.subjectSource.next(count);
  }
}
