import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SubTopic, Topic } from '../../models/syllabus.model';

@Component({
    selector: 'app-topic',
    templateUrl: './topic.component.html',
    styleUrls: ['./topic.component.css'],
    standalone: false
})
export class TopicComponent {
  @Input() topic!: Topic;
  @Input() sectionTitle: string = '';
  @Input() technologyKey: string = '';
  isCollapsed = true;

  constructor(private router: Router) {}

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  navigateToSubtopic(subtopic: SubTopic) {
    this.router.navigate(['/subtopic-detail'], {
      queryParams: {
        subtopicId: subtopic.id,
        subtopicName: subtopic.name,
        topic: this.topic.name,
        section: this.sectionTitle,
        tech: this.technologyKey
      }
    });
  }
}
