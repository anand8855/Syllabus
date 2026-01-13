import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SyllabusService } from '../../services/syllabus.service';

interface TechnologyCard {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  route: string;
  available: boolean;
  topicCount?: number;
  subtopicCount?: number;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {
  technologies: TechnologyCard[] = [
    {
      id: 'java',
      name: 'Java',
      icon: '☕',
      description: 'Core Java, OOP, Collections, Exception Handling',
      color: '#f89820',
      route: '/java',
      available: true
    },
    {
      id: 'spring',
      name: 'Spring Framework',
      icon: '🍃',
      description: 'Spring Core, DI, AOP, Spring MVC',
      color: '#6db33f',
      route: '/spring',
      available: true
    },
    {
      id: 'springboot',
      name: 'Spring Boot',
      icon: '🚀',
      description: 'Auto-configuration, REST APIs, Microservices',
      color: '#6db33f',
      route: '/springboot',
      available: true
    },
    {
      id: 'angular',
      name: 'Angular',
      icon: '🅰️',
      description: 'Components, Services, RxJS, Routing',
      color: '#dd0031',
      route: '/angular',
      available: false
    },
    {
      id: 'flutter',
      name: 'Flutter',
      icon: '📱',
      description: 'Dart, Widgets, State Management, UI',
      color: '#02569b',
      route: '/flutter',
      available: false
    },
    {
      id: 'android',
      name: 'Android',
      icon: '🤖',
      description: 'Kotlin, Activities, Fragments, Jetpack',
      color: '#3ddc84',
      route: '/android',
      available: false
    },
    {
      id: 'react',
      name: 'React',
      icon: '⚛️',
      description: 'Hooks, Components, Redux, Next.js',
      color: '#61dafb',
      route: '/react',
      available: false
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      icon: '📗',
      description: 'Express, REST APIs, MongoDB, Authentication',
      color: '#68a063',
      route: '/nodejs',
      available: false
    }
  ];

  constructor(
    private router: Router,
    private syllabusService: SyllabusService
  ) {}

  ngOnInit() {
    // Load topic counts for available technologies
    this.technologies.forEach(tech => {
      if (tech.available) {
        tech.topicCount = this.syllabusService.getTopicCount(tech.id);
        tech.subtopicCount = this.syllabusService.getSubtopicCount(tech.id);
      }
    });
  }

  navigateToTechnology(tech: TechnologyCard) {
    if (tech.available) {
      this.router.navigate([tech.route]);
    }
  }
}
