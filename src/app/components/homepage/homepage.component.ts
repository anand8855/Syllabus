import { Component, OnInit } from '@angular/core';
import { Section } from '../../models/syllabus.model';
import { SyllabusService } from '../../services/syllabus.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
    standalone: false
})
export class HomepageComponent implements OnInit {
  sections: Section[] = [];

  constructor(private syllabusService: SyllabusService) {}

  ngOnInit() {
    this.sections = this.syllabusService.getSections();
    // Initialize all sections as collapsed
    this.sections.forEach(section => section.isCollapsed = true);
  }
}
