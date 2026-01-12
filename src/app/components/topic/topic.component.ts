import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from '../../models/syllabus.model';

@Component({
    selector: 'app-topic',
    templateUrl: './topic.component.html',
    styleUrls: ['./topic.component.css'],
    standalone: false
})
export class TopicComponent {
  @Input() topic!: Topic;
  @Input() sectionTitle: string = '';
  isCollapsed = true;

  constructor(private router: Router) {}

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  navigateToSubtopic(subtopicName: string) {
    this.router.navigate(['/subtopic-detail'], {
      queryParams: {
        subtopic: subtopicName,
        topic: this.topic.name,
        section: this.sectionTitle
      }
    });
  }
}
