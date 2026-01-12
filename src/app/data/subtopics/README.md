# Subtopic Content Files

This folder contains individual content files for each subtopic in the syllabus.

## 📁 File Structure

```
subtopics/
├── index.ts                 # Exports all subtopic contents
├── TEMPLATE.ts             # Template for creating new files
├── fundamentals.ts         # Fundamentals content
├── exception-hierarchy.ts  # Exception Hierarchy content
└── ... (add more as needed)
```

## 📝 How to Add a New Subtopic

### Step 1: Create the Content File

1. Copy `TEMPLATE.ts` and rename it (use kebab-case)
   - Example: `checked-vs-unchecked.ts`

2. Update the export name
   ```typescript
   export const checkedVsUncheckedContent: SubtopicContent = {
     // your content
   };
   ```

3. Fill in all the sections:
   - `name`: Display title
   - `overview`: Brief introduction
   - `sections`: Main content with subsections
   - `codeExamples`: Code snippets (optional)
   - `images`: Diagrams/screenshots (optional)
   - `keyPoints`: Summary bullets (optional)
   - `references`: Links and resources (optional)

### Step 2: Export from Index

Add your export to `index.ts`:

```typescript
export { checkedVsUncheckedContent } from './checked-vs-unchecked';
```

### Step 3: Register in Service

Add the mapping in `subtopic-content.service.ts`:

```typescript
import { 
  fundamentalsContent,
  exceptionHierarchyContent,
  checkedVsUncheckedContent  // Add your import
} from '../data/subtopics';

private subtopicContents: { [key: string]: SubtopicContent } = {
  'Fundamentals': fundamentalsContent,
  'Exception Hierarchy': exceptionHierarchyContent,
  'Checked vs Unchecked Exceptions': checkedVsUncheckedContent  // Add mapping
};
```

### Step 4: Test

Click on the subtopic in the UI to see your content displayed.

## 💡 Tips

- Use emojis to make content engaging (1️⃣, 2️⃣, ✅, ❌, 💡, etc.)
- Break long content into sections and subsections
- Add code examples for technical topics
- Include diagrams when explaining complex concepts
- Keep key points concise and memorable
- Provide references for further learning

## 🖼️ Adding Images

1. Place images in: `src/assets/images/`
2. Reference as: `/assets/images/your-image.png`
3. Always include `alt` text and optional `caption`

## 📋 Content Structure

Each subtopic file exports a `SubtopicContent` object with:

```typescript
{
  name: string;              // Display title
  overview: string;          // Brief intro
  sections: Section[];       // Main content
  codeExamples?: CodeExample[];
  images?: ImageReference[];
  keyPoints?: string[];
  references?: string[];
}
```

## ✅ Current Subtopics

- ✅ Fundamentals (Complete)
- 🚧 Exception Hierarchy (Template only)
- ⏳ More to be added...
