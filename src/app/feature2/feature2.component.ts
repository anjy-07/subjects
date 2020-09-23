import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.scss']
})
export class Feature2Component implements OnInit {

  constructor(private httpClient: HttpClient) { }
  subject = new Subject();
  results$ : Observable<any>; 
   
  ngOnInit(): void {

  //  this.results$ = this.subject.debounceTime(100);
  }
  search(evt) {
    const searchText = evt.target.value;
    this.subject.next(searchText)
}

}
