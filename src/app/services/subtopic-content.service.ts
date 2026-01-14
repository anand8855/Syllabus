import { Injectable } from '@angular/core';
import { SubtopicContent } from '../models/syllabus.model';
import { 
  fundamentalsContent,
  exceptionHierarchyContent,
  historyOfJavaContent
} from '../json/subtopics/subtopic-mapper';

@Injectable({
  providedIn: 'root'
})
export class SubtopicContentService {

  private subtopicContents: { [key: string]: SubtopicContent } = {
    'Fundamentals': fundamentalsContent,
    'Exception Hierarchy': exceptionHierarchyContent,
    'History of Java': historyOfJavaContent
    // Add more mappings as you create new subtopic files:
    // 'Checked vs Unchecked Exceptions': checkedVsUncheckedContent,
    // 'try–catch–finally': tryCatchFinallyContent,
    // etc.
  };

  getSubtopicContent(subtopicName: string): SubtopicContent | null {
    return this.subtopicContents[subtopicName] || null;
  }

  getAllSubtopicNames(): string[] {
    return Object.keys(this.subtopicContents);
  }
}
