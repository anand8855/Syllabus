import { SubtopicContent } from '../../models/syllabus.model';

export const exceptionHierarchyContent: SubtopicContent = {
  name: 'Exception Hierarchy',
  overview: 'In Java, all errors and exceptions inherit from java.lang.Throwable, which has two main branches: Error (serious problems the application usually should not handle) and Exception (conditions the application can catch and recover from). Checked exceptions are subclasses of Exception (excluding RuntimeException and its subclasses) and must be declared or handled, while unchecked exceptions are RuntimeException and its subclasses, indicating programming errors such as null dereferences or invalid arguments.',
  sections: [
    {
      title: 'Introduction',
      content: 'The Java exception hierarchy is rooted at java.lang.Throwable and splits into Error and Exception. Error represents JVM-level and system problems (for example, OutOfMemoryError) that applications typically do not catch, while Exception represents abnormal conditions in normal program flow. Within Exception, checked exceptions (like IOException) enforce explicit handling via try/catch or throws clauses, and unchecked exceptions (subclasses of RuntimeException) usually signal bugs such as illegal arguments or incorrect state.'
    }
  ],
  codeExamples: [],
  keyPoints: [],
  references: []
};
