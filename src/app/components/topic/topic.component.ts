import { Component, Input } from '@angular/core';
import { Topic } from '../../models/syllabus.model';

@Component({
    selector: 'app-topic',
    templateUrl: './topic.component.html',
    styleUrls: ['./topic.component.css'],
    standalone: false
})
export class TopicComponent {
  @Input() topic!: Topic;
  isCollapsed = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
