import { Injectable } from '@angular/core';
import { Section } from '../models/syllabus.model';
import javaSyllabusData from '../json/syllabus/java.json';
import springSyllabusData from '../json/syllabus/spring.json';
import springbootSyllabusData from '../json/syllabus/springboot.json';

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {
  private javaSections: Section[] = javaSyllabusData as Section[];
  private springSections: Section[] = springSyllabusData as Section[];
  private springbootSections: Section[] = springbootSyllabusData as Section[];

  getSections(): Section[] {
    return [
      ...this.javaSections,
      ...this.springSections,
      ...this.springbootSections
    ];
  }

  // Get sections filtered by technology
  getSectionsByTechnology(tech: string): Section[] {
    switch(tech.toLowerCase()) {
      case 'java':
        return this.javaSections;
      
      case 'spring':
        return this.springSections;
      
      case 'springboot':
        return this.springbootSections;
      
      default:
        return [];
    }
  }

  // Get topic count for a technology
  getTopicCount(tech: string): number {
    const sections = this.getSectionsByTechnology(tech);
    return sections.reduce((count, section) => {
      return count + section.topics.length;
    }, 0);
  }

  // Get subtopic count for a technology
  getSubtopicCount(tech: string): number {
    const sections = this.getSectionsByTechnology(tech);
    return sections.reduce((count, section) => {
      return count + section.topics.reduce((topicCount, topic) => {
        return topicCount + (topic.subTopics?.length || 0);
      }, 0);
    }, 0);
  }
}
