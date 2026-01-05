# Java & Spring Interview Syllabus - Angular Application

This project is an Angular application that displays a comprehensive syllabus for Java and Spring Framework interviews.

## Features

- **37 Comprehensive Sections**: Covering Core Java, Spring Framework, Spring Boot, Microservices, and more
- **Accordion UI**: Collapsible sections and topics for easy navigation
- **Difficulty Badges**: Visual indicators for Basic, Intermediate, and Advanced topics
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern Angular**: Built with Angular 17+

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── homepage/          # Main homepage component
│   │   ├── section/           # Section component (reusable)
│   │   ├── topic/             # Topic component with subtopics
│   │   └── difficulty-badge/  # Difficulty level badge
│   ├── models/
│   │   └── syllabus.model.ts  # TypeScript interfaces
│   ├── services/
│   │   └── syllabus.service.ts # Data service
│   ├── app.component.ts
│   └── app.module.ts
├── index.html
├── main.ts
└── styles.css
```

## Installation

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

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Technologies Used

- Angular 17+
- TypeScript 5.2+
- RxJS 7.8+
- CSS3 with Flexbox and Grid

## Topics Covered

The syllabus includes 37 major sections covering:

1. Core Java Basics
2. Object-Oriented Programming
3. Advanced OOP & Java Features
4. Exception Handling
5. Collections Framework
6. Generics
7. Multithreading & Concurrency
8. Java 8+ Modern Features
9. String Handling
10. File I/O & Serialization
11. JDBC
12. Design Patterns
13. JVM Internals & Memory Management
14. Testing
15. Miscellaneous Topics
16. RESTful APIs & Web Services
17-24. Spring Framework & Related Technologies
25-37. Comprehensive Spring & Spring Boot (including Spring AI)

## UI Features

- **Accordion Behavior**: Click on any section header to expand/collapse
- **Nested Accordion**: Topics with subtopics can also be expanded/collapsed
- **Smooth Animations**: CSS transitions for a polished user experience
- **Hover Effects**: Interactive feedback on hoverable elements
- **Color-Coded Difficulty**: 
  - 🟢 Green: Basic
  - 🟡 Yellow: Intermediate
  - 🔴 Red: Advanced

## License

This project is for educational purposes.

## Author

Created for Java interview preparation - 2025
