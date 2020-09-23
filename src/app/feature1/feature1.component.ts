import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss']
})
export class Feature1Component implements OnInit {

  count: number; 

  constructor(private subjectService: SubjectService) { 
    this.subjectService.subjectObservable$.subscribe((count) => {   
      this.count = count
      console.log("emitting event", this.count);
    });
      
  }

  ngOnInit(): void {
  }

}
