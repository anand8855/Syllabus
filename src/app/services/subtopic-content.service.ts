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
  pathAndClasspathContent,
  firstJavaProgramContent,
  keywordsAndIdentifiersContent,
  iocAndWhySpringUsesItContent,
  dependencyInjectionContent,
  springBeenLifecycleInternalContent,
  applicationContextVsBeanFactoryContent,
  eagerVsLazyLoadingContent,
  beanScopeContent
} from './subtopic-mapper';

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
    'Path and Classpath (Environment Variables)': pathAndClasspathContent,
    'First Java Program structure and main method': firstJavaProgramContent,
    'Java Keywords and Identifiers': keywordsAndIdentifiersContent,


    // Spring 
    'What is IoC and why Spring uses it': iocAndWhySpringUsesItContent,
    'What problem does DI solve?': dependencyInjectionContent,
    'How Spring creates and injects beans internally': springBeenLifecycleInternalContent,
    'ApplicationContext vs BeanFactory': applicationContextVsBeanFactoryContent,
    'Eager vs Lazy loading - When to use which?':eagerVsLazyLoadingContent,
    'Bean Scopes (Singleton, Prototype, Request, Session, Application)': beanScopeContent,
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
