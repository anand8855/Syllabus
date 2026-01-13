// Index file to export all subtopic contents
import fundamentalsData from './exception_handling/fundamentals/content.json';
import exceptionHierarchyData from './exception_handling/exception-hierarchy/content.json';
import { SubtopicContent } from '../../models/syllabus.model';

export const fundamentalsContent = fundamentalsData as SubtopicContent;
export const exceptionHierarchyContent = exceptionHierarchyData as SubtopicContent;

// Add more exports as you create new category folders
// Example: ./category_name/subtopic_name/content.json
// import newTopicData from './new_category/new-topic/content.json';
// export const newTopicContent = newTopicData as SubtopicContent;
