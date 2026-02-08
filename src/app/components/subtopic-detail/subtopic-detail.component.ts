import { Component, OnInit, HostListener } from '@angular/core';
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
  subtopicId: string = '';
  topicName: string = '';
  sectionTitle: string = '';
  technologyKey: string = '';
  content: SubtopicContent | null = null;
  isLoading: boolean = false;
  showBackToTop: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private contentService: SubtopicContentService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.subtopicName = params['subtopicName'] || params['subtopic'] || '';
      this.subtopicId = params['subtopicId'] || '';
      this.topicName = params['topic'] || '';
      this.sectionTitle = params['section'] || '';
      this.technologyKey = params['tech'] || '';

      this.isLoading = true;
      this.content = null;
      this.contentService
        .getSubtopicContent(this.technologyKey, this.sectionTitle, this.subtopicId)
        .subscribe(content => {
          this.content = content;
          this.isLoading = false;
        });
    });
  }

  goBack() {
    this.location.back();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show button when page is scrolled down 300px
    this.showBackToTop = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
