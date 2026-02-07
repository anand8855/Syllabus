// Index file to export all subtopic contents
import fundamentalsData from '../json/subtopics/java/exception_handling/fundamentals.json';
import exceptionHierarchyData from '../json/subtopics/java/exception_handling/exception-hierarchy.json';
import historyOfJavaData from '../json/subtopics/java/core_java_basic/history_of_java.json';
import featuresOfJavaData from '../json/subtopics/java/core_java_basic/features_of_java.json';
import jdkJreJvmData from '../json/subtopics/java/core_java_basic/jdk_jre_jvm.json';
import compilationAndExecutionData from '../json/subtopics/java/core_java_basic/compilation_and_execution.json';
import bytecodeAndPlatformIndependenceData from '../json/subtopics/java/core_java_basic/bytecode_and_platform_independence.json';
import javaEditionsData from '../json/subtopics/java/core_java_basic/java_editions.json';
import pathAndClasspathData from '../json/subtopics/java/core_java_basic/path_and_classpath.json';
import firstJavaProgram from '../json/subtopics/java/core_java_basic/first_java_program_structure.json';
import keywordsAndIdentifiersData from '../json/subtopics/java/core_java_basic/keywords_and_identifiers.json';
// Spring imports will be added here as content is created
import iocAndWhySpringUsesItData from '../json/subtopics/spring/ioc_and_why_spring_uses_it.json';
import dependencyInjection from '../json/subtopics/spring/dependency_injection_problems_and_solutions.json'
import springBeenLifecycleInternal  from '../json/subtopics/spring/spring_bean_lifecycle_internals.json'
import applicationContextVsBeanFactory from '../json/subtopics/spring/applicationcontext_vs_beanfactory.json'
import eagerVsLazyLoading from '../json/subtopics/spring/eager_vs_lazy_loading.json'
import beanScope from '../json/subtopics/spring/bean_scopes.json'
import { SubtopicContent } from '../models/syllabus.model';

export const fundamentalsContent = fundamentalsData as SubtopicContent;
export const exceptionHierarchyContent = exceptionHierarchyData as SubtopicContent;
export const historyOfJavaContent = historyOfJavaData as SubtopicContent;
export const featuresOfJavaContent = featuresOfJavaData as SubtopicContent;
export const jdkJreJvmContent = jdkJreJvmData as SubtopicContent;
export const compilationAndExecutionContent = compilationAndExecutionData as SubtopicContent;
export const bytecodeAndPlatformIndependenceContent = bytecodeAndPlatformIndependenceData as SubtopicContent;
export const javaEditionsContent = javaEditionsData as SubtopicContent;
export const pathAndClasspathContent = pathAndClasspathData as SubtopicContent;
export const firstJavaProgramContent = firstJavaProgram as SubtopicContent;
export const keywordsAndIdentifiersContent = keywordsAndIdentifiersData as SubtopicContent;
// Spring exports will be added here
export const iocAndWhySpringUsesItContent = iocAndWhySpringUsesItData as SubtopicContent;
export const dependencyInjectionContent = dependencyInjection as SubtopicContent;
export const springBeenLifecycleInternalContent = springBeenLifecycleInternal as SubtopicContent;
export const applicationContextVsBeanFactoryContent = applicationContextVsBeanFactory as SubtopicContent;
export const eagerVsLazyLoadingContent = eagerVsLazyLoading as SubtopicContent;
export const beanScopeContent = beanScope as SubtopicContent;

// Add more exports as you create new category folders
// Example: ./category_name/subtopic_name/content.json
// import newTopicData from './new_category/new-topic/content.json';
// export const newTopicContent = newTopicData as SubtopicContent;
