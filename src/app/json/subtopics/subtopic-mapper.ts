// Index file to export all subtopic contents
import fundamentalsData from './exception_handling/fundamentals.json';
import exceptionHierarchyData from './exception_handling/exception-hierarchy.json';
import historyOfJavaData from './core_java_basic/history_of_java.json';
import { SubtopicContent } from '../../models/syllabus.model';

export const fundamentalsContent = fundamentalsData as SubtopicContent;
export const exceptionHierarchyContent = exceptionHierarchyData as SubtopicContent;
export const historyOfJavaContent = historyOfJavaData as SubtopicContent;

// Add more exports as you create new category folders
// Example: ./category_name/subtopic_name/content.json
// import newTopicData from './new_category/new-topic/content.json';
// export const newTopicContent = newTopicData as SubtopicContent;
