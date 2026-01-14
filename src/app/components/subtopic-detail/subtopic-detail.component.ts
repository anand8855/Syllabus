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
  topicName: string = '';
  sectionTitle: string = '';
  content: SubtopicContent | null = null;
  showBackToTop: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private contentService: SubtopicContentService
  ) {}

  ngOnInit() {
    // Check for route params first (new URL structure)
    this.route.params.subscribe(params => {
      if (params['subtopic']) {
        // Get actual names from navigation state
        const navigation = this.router.getCurrentNavigation();
        const state = navigation?.extras?.state || this.location.getState() as any;
        
        if (state && state.subtopic) {
          this.subtopicName = state.subtopic;
          this.topicName = state.topic;
          this.sectionTitle = state.section;
        } else {
          // Fallback: Convert slugs back to readable names (for direct URL access)
          this.subtopicName = this.fromSlug(params['subtopic']);
          this.topicName = this.fromSlug(params['topic']);
          this.sectionTitle = this.fromSlug(params['section']);
        }
        
        this.content = this.contentService.getSubtopicContent(this.subtopicName);
      }
    });

    // Fallback to query params for backward compatibility
    this.route.queryParams.subscribe(params => {
      if (params['subtopic'] && !this.subtopicName) {
        this.subtopicName = params['subtopic'] || '';
        this.topicName = params['topic'] || '';
        this.sectionTitle = params['section'] || '';
        
        this.content = this.contentService.getSubtopicContent(this.subtopicName);
      }
    });
  }

  private fromSlug(slug: string): string {
    // Convert slug back to title case
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
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
