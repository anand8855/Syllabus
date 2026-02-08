import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SyllabusService } from '../../services/syllabus.service';
import { Section } from '../../models/syllabus.model';

@Component({
    selector: 'app-syllabus',
    templateUrl: './syllabus.component.html',
    styleUrls: ['./syllabus.component.css'],
    standalone: false
})
export class SyllabusComponent implements OnInit {
  sections: Section[] = [];
  filteredSections: Section[] = [];
  technology: string = '';
  technologyKey: string = '';
  techIcon: string = '';
  techSubtitle: string = '';
  themeClass: string = '';
  searchTerm: string = '';
  selectedDifficulty: string = 'all';
  totalSections: number = 0;
  totalTopics: number = 0;
  totalSubtopics: number = 0;

  constructor(
    private route: ActivatedRoute,
    private syllabusService: SyllabusService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const tech = params['technology'];
      this.loadTechnology(tech);
    });
  }

  loadTechnology(tech: string) {
    this.technologyKey = tech;
    switch(tech) {
      case 'java':
        this.technology = 'Java';
        this.techIcon = '☕';
        this.techSubtitle = 'Master Core Java from Basics to Advanced Concepts';
        this.themeClass = 'theme-java';
        break;
      case 'spring':
        this.technology = 'Spring Framework';
        this.techIcon = '🍃';
        this.techSubtitle = 'Master Spring Framework from Basics to Advanced';
        this.themeClass = 'theme-spring';
        break;
      case 'springboot':
        this.technology = 'Spring Boot';
        this.techIcon = '🚀';
        this.techSubtitle = 'Master Spring Boot from Basics to Production';
        this.themeClass = 'theme-springboot';
        break;
      default:
        this.technology = 'Technology';
        this.techIcon = '📚';
        this.techSubtitle = 'Complete Syllabus';
        this.themeClass = 'theme-default';
    }

    this.sections = this.syllabusService.getSectionsByTechnology(tech);
    this.sections.forEach(section => section.isCollapsed = true);
    this.filteredSections = [...this.sections];
    this.calculateStats();
  }

  calculateStats() {
    this.totalSections = this.sections.length;
    this.totalTopics = this.sections.reduce((sum, s) => sum + s.topics.length, 0);
    this.totalSubtopics = this.sections.reduce((sum, s) => 
      sum + s.topics.reduce((tSum, t) => tSum + (t.subTopics?.length || 0), 0), 0
    );
  }

  toggleSection(section: Section) {
    section.isCollapsed = !section.isCollapsed;
  }

  expandAll() {
    this.filteredSections.forEach(section => section.isCollapsed = false);
  }

  collapseAll() {
    this.filteredSections.forEach(section => section.isCollapsed = true);
  }

  filterByDifficulty(difficulty: string) {
    this.selectedDifficulty = difficulty;
    this.applyFilters();
  }

  onSearch() {
    this.applyFilters();
  }

  applyFilters() {
    let filtered = [...this.sections];

    if (this.selectedDifficulty !== 'all') {
      filtered = filtered.filter(s => s.difficulty === this.selectedDifficulty);
    }

    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(s => 
        s.title.toLowerCase().includes(term) ||
        s.topics.some(t => 
          t.name.toLowerCase().includes(term) ||
          t.subTopics?.some(st => st.name.toLowerCase().includes(term))
        )
      );
    }

    this.filteredSections = filtered;
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedDifficulty = 'all';
    this.filteredSections = [...this.sections];
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
