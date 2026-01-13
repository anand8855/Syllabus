import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SubtopicContentService } from '../../services/subtopic-content.service';
import { SubtopicContent } from '../../models/syllabus.model';

@Component({
    selector: 'app-subtopic-detail',
    templateUrl: './subtopic-detail.component.html',
    styleUrls: ['./subtopic-detail.component.css'],
    standalone: false
})
export class SubtopicDetailComponent implements OnInit {
  subtopicName: string = '';
  topicName: string = '';
  sectionTitle: string = '';
  content: SubtopicContent | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private contentService: SubtopicContentService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.subtopicName = params['subtopic'] || '';
      this.topicName = params['topic'] || '';
      this.sectionTitle = params['section'] || '';
      
      // Load content for this subtopic
      this.content = this.contentService.getSubtopicContent(this.subtopicName);
    });
  }

  goBack() {
    this.location.back();
  }

  // Convert bullet point text to HTML list
  formatContent(content: string): string {
    if (!content) return '';
    
    // Check if content contains bullet points
    if (content.includes('•')) {
      const lines = content.split('\n').map(line => line.trim()).filter(line => line);
      const listItems = lines.map(line => {
        if (line.startsWith('•')) {
          return `<li>${line.substring(1).trim()}</li>`;
        }
        return line;
      });
      
      // Check if all lines are list items
      if (listItems.every(item => item.startsWith('<li>'))) {
        return `<ul>${listItems.join('')}</ul>`;
      }
    }
    
    // Return content with line breaks preserved
    return content.replace(/\n/g, '<br>');
  }
}
