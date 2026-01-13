# Java & Spring Interview Syllabus - Angular Application

This project is an Angular application that displays a comprehensive syllabus for Java, Spring Framework, and Spring Boot interviews with a modern, interactive UI.

## 🌟 Features

- **Universal Syllabus Component**: Single reusable component for all technologies
- **Technology-Specific Themes**: Unique color schemes for Java, Spring, and Spring Boot
- **Search & Filter**: Real-time search and difficulty-based filtering
- **Statistics Dashboard**: Overview of sections, topics, and subtopics
- **Accordion UI**: Collapsible sections and topics for easy navigation
- **Difficulty Badges**: Visual indicators for Basic, Intermediate, and Advanced topics
- **Responsive Design**: Seamless experience on desktop, tablet, and mobile
- **Modern Angular**: Built with Angular 15+
- **JSON-Based Content**: Easy-to-maintain data structure
- **Detailed Subtopics**: Rich content with code examples, interview Q&A

## 🗂️ Complete Project Structure

```
Syllabus/
├── src/
│   └── app/
│       ├── components/
│       │   ├── syllabus/              # Universal syllabus component
│       │   │   ├── syllabus.component.ts
│       │   │   ├── syllabus.component.html
│       │   │   └── syllabus.component.css
│       │   ├── home/                  # Landing page
│       │   ├── homepage/              # Technology selection
│       │   ├── section/               # Reusable section component
│       │   ├── topic/                 # Topic component
│       │   ├── difficulty-badge/      # Difficulty indicator
│       │   └── subtopic-detail/       # Detailed subtopic view
│       │
│       ├── json/                      # All JSON data (organized)
│       │   ├── syllabus/             # Technology syllabi
│       │   │   ├── java.json         # 24 sections
│       │   │   ├── spring.json       # 2 sections
│       │   │   └── springboot.json   # 11 sections
│       │   │
│       │   └── subtopics/            # Detailed content by category
│       │       ├── index.ts          # Export hub
│       │       ├── TEMPLATE.ts       # Developer reference
│       │       └── exception_handling/
│       │           ├── fundamentals/
│       │           │   └── content.json
│       │           └── exception-hierarchy/
│       │               └── content.json
│       │
│       ├── themes/                    # Technology-specific styles
│       │   ├── java-theme.css        # Cream/orange theme
│       │   ├── spring-theme.css      # Mint green theme
│       │   └── springboot-theme.css  # Emerald green theme
│       │
│       ├── models/
│       │   └── syllabus.model.ts     # TypeScript interfaces
│       │
│       ├── services/
│       │   ├── syllabus.service.ts          # Data service
│       │   └── subtopic-content.service.ts  # Detailed content service
│       │
│       ├── app-routing.module.ts
│       ├── app.module.ts
│       └── app.component.ts
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md (this file)
```

## 🚀 Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm start
   ```

3. **Open Browser**:
   Navigate to `http://localhost:4200/`

4. **Available Routes**:
   - `/` - Home page
   - `/syllabus` - Technology selection
   - `/java` or `/syllabus/java` - Java syllabus
   - `/spring` or `/syllabus/spring` - Spring Framework syllabus
   - `/springboot` or `/syllabus/springboot` - Spring Boot syllabus

## 🏗️ Architecture

### Single Component Design

The application uses a **single universal SyllabusComponent** that dynamically:
- Reads technology from URL parameters (`/syllabus/:technology`)
- Loads appropriate JSON data via `SyllabusService`
- Applies technology-specific theme classes
- Provides search, filter, and navigation features

**Benefits**:
- ✅ Reusable - One component for all technologies
- ✅ Maintainable - Changes apply everywhere
- ✅ Scalable - Easy to add new technologies
- ✅ Themeable - Separate CSS for each technology

### Routing

```typescript
const routes: Routes = [
  { path: 'syllabus/:technology', component: SyllabusComponent },
  { path: 'java', redirectTo: 'syllabus/java', pathMatch: 'full' },
  { path: 'spring', redirectTo: 'syllabus/spring', pathMatch: 'full' },
  { path: 'springboot', redirectTo: 'syllabus/springboot', pathMatch: 'full' }
];
```

### Theme System

Each technology has its own theme file with unique colors:
- **Java**: Light cream/beige with orange accents (`.theme-java`)
- **Spring**: Light mint green with green accents (`.theme-spring`)
- **Spring Boot**: Light emerald with dark green accents (`.theme-springboot`)

Themes are applied dynamically via `[ngClass]="themeClass"` on the container.

## 📊 Data Organization

### JSON Structure

All data is organized in `src/app/json/`:

#### Syllabus Data (`json/syllabus/`)
- **Format**: Array of Section objects
- **Naming**: `{technology}.json` (lowercase)
- **Structure**:
  ```json
  [
    {
      "id": 1,
      "title": "Section Title",
      "difficulty": "basic|intermediate|advanced",
      "topics": [
        {
          "name": "Topic Name",
          "subTopics": [{ "name": "Subtopic Name" }]
        }
      ]
    }
  ]
  ```

#### Subtopic Content (`json/subtopics/`)
- **Format**: Category-based folder structure
- **Pattern**: `category_name/subtopic_name/content.json`
- **Structure**:
  ```json
  {
    "name": "Subtopic Title",
    "overview": "Brief introduction",
    "sections": [...],
    "codeExamples": [...],
    "keyPoints": [...],
    "interviewQA": [...]
  }
  ```

**Current Categories**:
- `exception_handling/` - Exception handling topics
  - `fundamentals/` - Core concepts
  - `exception-hierarchy/` - Class hierarchy

## 📝 Adding New Content

### Adding a New Technology

1. Create `{technology}.json` in `src/app/json/syllabus/`
2. Update `syllabus.service.ts`:
   ```typescript
   import techData from '../json/syllabus/{tech}.json';
   private techSections: Section[] = techData as Section[];
   // Add case in getSectionsByTechnology()
   ```
3. Update `syllabus.component.ts`:
   ```typescript
   // Add case in loadTechnology() switch
   ```
4. Create `{technology}-theme.css` in `src/app/themes/`
5. Add theme to `angular.json` styles array
6. Add route in `app-routing.module.ts`

### Adding a New Subtopic

1. Create folder structure:
   ```bash
   mkdir src/app/json/subtopics/{category}/{subtopic-name}
   ```
2. Create `content.json` with full structure
3. Update `src/app/json/subtopics/index.ts`:
   ```typescript
   import dataName from './{category}/{subtopic}/content.json';
   export const contentName = dataName as SubtopicContent;
   ```
4. Register in `subtopic-content.service.ts`:
   ```typescript
   private subtopicContents = {
     'Subtopic Name': contentName
   };
   ```

## 🛠️ Technologies Used

- **Angular 15+** - Frontend framework
- **TypeScript 5.2+** - Type-safe development
- **RxJS 7.8+** - Reactive programming
- **CSS3** - Styling with Flexbox, Grid, animations
- **FormsModule** - Two-way data binding with ngModel

## 📚 Content Coverage

### Java Syllabus (24 Sections)
1. Core Java Basics
2. Object-Oriented Programming
3. Advanced OOP & Java Features
4. Exception Handling
5. Collections Framework
6. Generics
7. Multithreading & Concurrency
8. Java 8+ Modern Features (Streams, Lambda, Optional)
9. String Handling
10. File I/O & Serialization
11. JDBC
12. Design Patterns
13. JVM Internals & Memory Management
14. Testing (JUnit, Mockito)
15. Miscellaneous Topics
16. RESTful APIs & Web Services
17. Java EE Concepts
18. Build Tools & CI/CD
19. Security Best Practices
20. Performance Optimization
21. Logging & Monitoring
22. Annotations & Reflection
23. Networking
24. Advanced Topics

### Spring Framework (2 Sections)
1. Core Spring (IoC, DI, AOP, Bean Lifecycle)
2. Spring Security

### Spring Boot (11 Sections)
1. Spring Boot Fundamentals
2. Data Access (JPA, Hibernate, JDBC)
3. REST API Development
4. Spring Boot Actuator & DevTools
5. Security with Spring Boot
6. Testing in Spring Boot
7. Microservices Architecture
8. Spring Cloud & Netflix OSS
9. Messaging & Event-Driven Architecture
10. Reactive Programming
11. Spring AI & Modern Features

## ✨ UI Features

### Main Features
- **Search Bar**: Real-time search across all topics and subtopics
- **Difficulty Filters**: Filter by Basic, Intermediate, Advanced
- **Statistics Dashboard**: Display total sections, topics, subtopics
- **Expand/Collapse All**: Quick navigation controls
- **Scroll to Top**: Floating button for easy navigation
- **No Results Message**: User-friendly feedback when no matches found

### Visual Design
- **Smooth Animations**: fadeIn, slideInUp, bounceIn effects
- **Hover Effects**: Interactive feedback on buttons and cards
- **Color-Coded Difficulty**: 
  - 🟢 Green: Basic
  - 🟡 Yellow: Intermediate
  - 🔴 Red: Advanced
- **Responsive Layout**: Mobile-first design with breakpoints
- **Reading-Friendly**: Light backgrounds with excellent contrast

### Technology-Specific Branding
- **Java**: ☕ Coffee icon, cream/orange theme
- **Spring**: 🍃 Leaf icon, mint green theme
- **Spring Boot**: 🚀 Rocket icon, emerald green theme

## 🔧 Build & Deployment

**Development**:
```bash
npm start
```

**Production Build**:
```bash
npm run build
```
Build artifacts stored in `dist/` directory.

**Android Build** (Capacitor):
```bash
npm run build
npx cap sync
npx cap open android
```

## 📖 Template Reference

The `TEMPLATE.ts` file in `src/app/json/subtopics/` serves as a **developer reference** for creating new subtopic content. It shows:
- Complete SubtopicContent structure
- All available fields and formats
- Examples and inline documentation
- Not imported by the application (reference only)

## 🗂️ File Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Syllabus JSON | `{technology}.json` | `java.json`, `spring.json` |
| Subtopic Category | `{category_name}/` | `exception_handling/` |
| Subtopic Folder | `{kebab-case}/` | `fundamentals/`, `exception-hierarchy/` |
| Content File | `content.json` | Always named `content.json` |
| Theme CSS | `{technology}-theme.css` | `java-theme.css` |

## 🎯 Best Practices

### Data Management
✅ Keep technology names lowercase in filenames  
✅ Start section IDs from 1 for each technology  
✅ Make each JSON file independent (no cross-references)  
✅ Use descriptive category and subtopic names  
✅ Validate JSON before committing  

### Code Organization
✅ Use TypeScript interfaces for type safety  
✅ Keep components focused and reusable  
✅ Separate concerns (data, logic, presentation)  
✅ Document complex logic with comments  
✅ Follow Angular style guide conventions  

### Content Creation
✅ Provide clear, concise overviews  
✅ Include code examples where relevant  
✅ Add interview questions for practice  
✅ Use proper formatting and structure  
✅ Keep content up-to-date with latest standards  

## 📄 License

This project is for educational purposes.

## 👤 Author

Created for Java/Spring interview preparation - 2026

---

**Happy Learning! 🚀**
