import { SubtopicContent } from '../../models/syllabus.model';

/**
 * Template for creating new subtopic content files
 * 
 * Instructions:
 * 1. Copy this file and rename it (e.g., checked-vs-unchecked.ts)
 * 2. Update the export name (e.g., export const checkedVsUncheckedContent)
 * 3. Fill in all the content sections
 * 4. Add the import in src/app/data/subtopics/index.ts
 * 5. Add the mapping in subtopic-content.service.ts
 */

export const templateContent: SubtopicContent = {
  // Display name of the subtopic
  name: 'Your Subtopic Name',
  
  // Brief introduction (1-2 sentences)
  overview: 'Add a brief overview of this subtopic here.',
  
  // Main content sections
  sections: [
    {
      title: '1️⃣ First Main Section Title',
      content: 'Main content for this section goes here.',
      subsections: [
        {
          title: 'Subsection Title',
          content: 'Detailed explanation for this subsection.'
        },
        {
          title: 'Another Subsection',
          content: 'More details here.'
        }
      ]
    },
    {
      title: '2️⃣ Second Main Section',
      content: 'Content for second section.'
      // subsections are optional
    }
  ],
  
  // Code examples (optional but recommended)
  codeExamples: [
    {
      title: 'Example 1 Title',
      description: 'What this code demonstrates',
      code: `// Your code here
public class Example {
    public static void main(String[] args) {
        System.out.println("Example code");
    }
}`,
      language: 'java'  // java, typescript, javascript, python, etc.
    }
  ],
  
  // Images/diagrams (optional)
  images: [
    {
      url: '/assets/images/your-image.png',
      alt: 'Description of the image',
      caption: 'Figure 1: Caption for the image'
    }
  ],
  
  // Key takeaways (optional but recommended)
  keyPoints: [
    'First important point to remember',
    'Second key concept',
    'Third critical understanding'
  ],
  
  // References and resources (optional)
  references: [
    'Oracle Java Documentation - Relevant Link',
    'Book Name - Chapter Reference',
    'Tutorial or Blog Post URL'
  ],
  
  // Interview Questions & Answers (optional but recommended)
  interviewQA: [
    {
      question: 'What is...?',
      answer: 'Detailed answer explaining the concept clearly with examples if needed.',
      difficulty: 'easy',  // 'easy', 'medium', or 'hard'
      tags: ['tag1', 'tag2']  // Optional tags for categorization
    },
    {
      question: 'Explain the difference between...?',
      answer: `For multi-line answers, use template literals.
      
Point 1: Explanation
Point 2: Another explanation
      
This allows for well-formatted answers.`,
      difficulty: 'medium',
      tags: ['comparison', 'concepts']
    }
  ]
};
