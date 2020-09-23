import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'subjects';
  count: number = 0; 

  constructor(private router: Router, private subjectservice: SubjectService) { }
  increment() {
    this.count++;
    this.subjectservice.demoSubjects(this.count);
  }
  decrement() {
    this.subjectservice.demoSubjects(this.count);
    this.count--;
  }
  moveToFeature1() {
    this.router.navigateByUrl('/feature1');
  }
}
