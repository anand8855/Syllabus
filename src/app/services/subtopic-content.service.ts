import { Injectable } from '@angular/core';
import { SubtopicContent } from '../models/syllabus.model';
import { 
  fundamentalsContent,
  exceptionHierarchyContent,
  historyOfJavaContent,
  featuresOfJavaContent,
  jdkJreJvmContent,
  compilationAndExecutionContent,
  bytecodeAndPlatformIndependenceContent,
  javaEditionsContent,
  pathAndClasspathContent
} from '../json/subtopics/subtopic-mapper';

@Injectable({
  providedIn: 'root'
})
export class SubtopicContentService {

  private subtopicContents: { [key: string]: SubtopicContent } = {
    'Fundamentals': fundamentalsContent,
    'Exception Hierarchy': exceptionHierarchyContent,
    'History of Java': historyOfJavaContent,
    'Features of Java (Platform Independent, OOP, etc.)': featuresOfJavaContent,
    'JDK, JRE, JVM Architecture': jdkJreJvmContent,
    'Compilation and Execution Process': compilationAndExecutionContent,
    'Bytecode and Platform Independence': bytecodeAndPlatformIndependenceContent,
    'Java Editions (SE, EE, ME)': javaEditionsContent,
    'Path and Classpath (Environment Variables)': pathAndClasspathContent
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
