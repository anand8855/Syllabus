// Index file to export all subtopic contents
import fundamentalsData from './exception_handling/fundamentals.json';
import exceptionHierarchyData from './exception_handling/exception-hierarchy.json';
import historyOfJavaData from './core_java_basic/history_of_java.json';
import featuresOfJavaData from './core_java_basic/features_of_java.json';
import jdkJreJvmData from './core_java_basic/jdk_jre_jvm.json';
import compilationAndExecutionData from './core_java_basic/compilation_and_execution.json';
import bytecodeAndPlatformIndependenceData from './core_java_basic/bytecode_and_platform_independence.json';
import javaEditionsData from './core_java_basic/java_editions.json';
import pathAndClasspathData from './core_java_basic/path_and_classpath.json';
import { SubtopicContent } from '../../models/syllabus.model';

export const fundamentalsContent = fundamentalsData as SubtopicContent;
export const exceptionHierarchyContent = exceptionHierarchyData as SubtopicContent;
export const historyOfJavaContent = historyOfJavaData as SubtopicContent;
export const featuresOfJavaContent = featuresOfJavaData as SubtopicContent;
export const jdkJreJvmContent = jdkJreJvmData as SubtopicContent;
export const compilationAndExecutionContent = compilationAndExecutionData as SubtopicContent;
export const bytecodeAndPlatformIndependenceContent = bytecodeAndPlatformIndependenceData as SubtopicContent;
export const javaEditionsContent = javaEditionsData as SubtopicContent;
export const pathAndClasspathContent = pathAndClasspathData as SubtopicContent;

// Add more exports as you create new category folders
// Example: ./category_name/subtopic_name/content.json
// import newTopicData from './new_category/new-topic/content.json';
// export const newTopicContent = newTopicData as SubtopicContent;
