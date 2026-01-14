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
    // Convert names to URL-friendly slugs
    const sectionSlug = this.toSlug(this.sectionTitle);
    const topicSlug = this.toSlug(this.topic.name);
    const subtopicSlug = this.toSlug(subtopicName);
    
    this.router.navigate(['/subtopic', sectionSlug, topicSlug, subtopicSlug], {
      state: {
        subtopic: subtopicName,
        topic: this.topic.name,
        section: this.sectionTitle
      }
    });
  }

  private toSlug(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')      // Replace spaces with hyphens
      .replace(/--+/g, '-')      // Replace multiple hyphens with single hyphen
      .trim();
  }
}
