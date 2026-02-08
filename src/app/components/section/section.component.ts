import { Component, Input } from '@angular/core';
import { Section } from '../../models/syllabus.model';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.css'],
    standalone: false
})
export class SectionComponent {
  @Input() section!: Section;
  @Input() allSections: Section[] = [];
  @Input() technologyKey: string = '';

  toggleSection() {
    // Collapse all other sections
    this.allSections.forEach(s => {
      if (s.id !== this.section.id) {
        s.isCollapsed = true;
      }
    });
    
    // Toggle current section
    this.section.isCollapsed = !this.section.isCollapsed;
  }
}
