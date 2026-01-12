import { Injectable } from '@angular/core';
import { Section } from '../models/syllabus.model';

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {

  getSections(): Section[] {
    return [
      {
        id: 1,
        title: 'Core Java Basics',
        difficulty: 'basic',
        topics: [
          {
            name: 'Introduction to Java',
            subTopics: [
              { name: 'Features of Java (Platform Independent, OOP, etc.)' },
              { name: 'JDK, JRE, JVM Architecture' },
              { name: 'Java compilation process' },
              { name: 'Bytecode and Platform Independence' }
            ]
          },
          {
            name: 'Data Types & Variables',
            subTopics: [
              { name: 'Primitive data types' },
              { name: 'Reference types' },
              { name: 'Type casting and conversion' },
              { name: 'Variables (local, instance, static)' }
            ]
          },
          {
            name: 'Operators & Control Statements',
            subTopics: [
              { name: 'Arithmetic, Logical, Relational operators' },
              { name: 'If-else, switch statements' },
              { name: 'Loops (for, while, do-while, enhanced for)' },
              { name: 'Break, continue, return statements' }
            ]
          },
          {
            name: 'Arrays',
            subTopics: [
              { name: 'Single and multidimensional arrays' },
              { name: 'Array manipulation' },
              { name: 'Jagged arrays' }
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Object-Oriented Programming (OOP)',
        difficulty: 'basic',
        topics: [
          {
            name: 'Classes and Objects',
            subTopics: [
              { name: 'Class definition and object creation' },
              { name: 'Constructors (default, parameterized, copy)' },
              { name: 'Constructor overloading' },
              { name: 'this keyword' }
            ]
          },
          {
            name: 'Encapsulation',
            subTopics: [
              { name: 'Access modifiers (private, public, protected, default)' },
              { name: 'Getters and Setters' },
              { name: 'Data hiding' }
            ]
          },
          {
            name: 'Inheritance',
            subTopics: [
              { name: 'Types of inheritance' },
              { name: 'super keyword' },
              { name: 'Method overriding' },
              { name: 'final keyword' }
            ]
          },
          {
            name: 'Polymorphism',
            subTopics: [
              { name: 'Compile-time (Method Overloading)' },
              { name: 'Runtime (Method Overriding)' },
              { name: 'Dynamic method dispatch' }
            ]
          },
          {
            name: 'Abstraction',
            subTopics: [
              { name: 'Abstract classes and methods' },
              { name: 'Interfaces' },
              { name: 'Multiple inheritance using interfaces' },
              { name: 'Marker interfaces' }
            ]
          }
        ]
      },
      {
        id: 3,
        title: 'Advanced OOP & Java Features',
        difficulty: 'intermediate',
        topics: [
          {
            name: 'Static keyword',
            subTopics: [
              { name: 'Static variables and methods' },
              { name: 'Static blocks' },
              { name: 'Static nested classes' }
            ]
          },
          {
            name: 'Inner Classes',
            subTopics: [
              { name: 'Member inner class' },
              { name: 'Static nested class' },
              { name: 'Local inner class' },
              { name: 'Anonymous inner class' }
            ]
          },
          {
            name: 'Packages',
            subTopics: [
              { name: 'Creating and using packages' },
              { name: 'Import statements' },
              { name: 'Access protection' }
            ]
          },
          {
            name: 'Object Class Methods',
            subTopics: [
              { name: 'equals() and hashCode()' },
              { name: 'toString()' },
              { name: 'clone()' },
              { name: 'finalize()' }
            ]
          }
        ]
      },
      {
        id: 4,
        title: 'Exception Handling',
        difficulty: 'intermediate',
        topics: [
          {
            name: 'Core Java Exception Handling',
            subTopics: [
              { name: 'Fundamentals' },
              { name: 'Exception Hierarchy' },
              { name: 'Checked vs Unchecked Exceptions' },
              { name: 'try–catch–finally' },
              { name: 'Multi-Catch (Java 7+)' },
              { name: 'try-with-resources' },
              { name: 'Suppressed Exceptions (Advanced)' },
              { name: 'throw vs throws' },
              { name: 'Custom Exceptions' },
              { name: 'Exception Propagation' },
              { name: 'Exception Chaining' },
              { name: 'Overriding & Exceptions' },
              { name: 'Stack Trace Internals (Advanced)' },
              { name: 'Errors You Should Never Catch' },
              { name: 'Assertions vs Exceptions' },
              { name: 'Core Java Best Practices' }
            ]
          },
          {
            name: 'Spring Framework Exception Handling',
            subTopics: [
              { name: 'Spring Exception Philosophy' },
              { name: 'DataAccessException Hierarchy' },
              { name: '@ExceptionHandler' },
              { name: '@ControllerAdvice / @RestControllerAdvice' },
              { name: 'ResponseEntityExceptionHandler' },
              { name: 'Validation Exception Handling' },
              { name: 'Transaction & Exception Handling' },
              { name: 'Exception Translation' },
              { name: 'AOP & Exception Handling' },
              { name: 'Exception Resolution Order' },
              { name: 'Async Exception Handling' },
              { name: 'Event Listener Exceptions' },
              { name: 'Proxy & Transaction Boundaries' }
            ]
          },
          {
            name: 'Spring Boot Exception Handling',
            subTopics: [
              { name: 'Default Spring Boot Error Handling' },
              { name: 'Custom REST Error Responses' },
              { name: 'ErrorAttributes Customization' },
              { name: 'server.error Configuration' },
              { name: '@ResponseStatus' },
              { name: 'Common REST Exceptions' },
              { name: 'Filter & Interceptor Exceptions' },
              { name: 'Spring Security Exception Handling' },
              { name: 'OAuth2 / JWT Errors' },
              { name: 'API Gateway Exception Handling' },
              { name: 'REST Client Exceptions' },
              { name: 'Reactive (WebFlux) Exception Handling' },
              { name: 'RFC 7807 – Problem Details' }
            ]
          },
          {
            name: 'Architecture, Design & Production',
            subTopics: [
              { name: 'Error Code Strategy' },
              { name: 'Exception Anti-Patterns' },
              { name: 'Internationalization (i18n)' },
              { name: 'Logging & Monitoring' },
              { name: 'Testing Exception Handling' },
              { name: 'Microservices Best Practices' }
            ]
          }
        ]
      },
      {
        id: 5,
        title: 'Collections Framework',
        difficulty: 'intermediate',
        topics: [
          {
            name: 'Collection Interfaces',
            subTopics: [
              { name: 'Collection, List, Set, Queue, Map' },
              { name: 'Iterator and ListIterator' }
            ]
          },
          {
            name: 'List Implementations',
            subTopics: [
              { name: 'ArrayList vs LinkedList' },
              { name: 'Vector and Stack' },
              { name: 'CopyOnWriteArrayList' }
            ]
          },
          {
            name: 'Set Implementations',
            subTopics: [
              { name: 'HashSet, LinkedHashSet, TreeSet' },
              { name: 'EnumSet, CopyOnWriteArraySet' }
            ]
          },
          {
            name: 'Queue & Deque',
            subTopics: [
              { name: 'PriorityQueue' },
              { name: 'ArrayDeque' },
              { name: 'LinkedList as Queue' }
            ]
          },
          {
            name: 'Map Implementations',
            subTopics: [
              { name: 'HashMap, LinkedHashMap, TreeMap' },
              { name: 'Hashtable vs HashMap' },
              { name: 'ConcurrentHashMap' },
              { name: 'WeakHashMap, IdentityHashMap' }
            ]
          },
          {
            name: 'Utility Classes',
            subTopics: [
              { name: 'Collections class methods' },
              { name: 'Arrays class methods' },
              { name: 'Comparable vs Comparator' }
            ]
          }
        ]
      },
      {
        id: 6,
        title: 'Generics',
        difficulty: 'intermediate',
        topics: [
          { name: 'Generic Classes and Methods' },
          { name: 'Bounded Type Parameters' },
          { name: 'Wildcards (?, extends, super)' },
          { name: 'Type Erasure' },
          { name: 'Generic Restrictions' }
        ]
      },
      {
        id: 7,
        title: 'Multithreading & Concurrency',
        difficulty: 'advanced',
        topics: [
          {
            name: 'Thread Basics',
            subTopics: [
              { name: 'Creating threads (Thread class, Runnable interface)' },
              { name: 'Thread lifecycle' },
              { name: 'Thread methods (start, run, sleep, join, yield)' },
              { name: 'Thread priority' }
            ]
          },
          {
            name: 'Synchronization',
            subTopics: [
              { name: 'synchronized keyword' },
              { name: 'Synchronized blocks and methods' },
              { name: 'Object-level vs Class-level locks' },
              { name: 'Deadlock, Livelock, Starvation' }
            ]
          },
          {
            name: 'Inter-thread Communication',
            subTopics: [
              { name: 'wait(), notify(), notifyAll()' },
              { name: 'Producer-Consumer problem' }
            ]
          },
          {
            name: 'Concurrency Utilities (java.util.concurrent)',
            subTopics: [
              { name: 'Executor framework' },
              { name: 'Thread pools (FixedThreadPool, CachedThreadPool, etc.)' },
              { name: 'Callable and Future' },
              { name: 'CompletableFuture and asynchronous programming' },
              { name: 'CountDownLatch, CyclicBarrier, Semaphore, Phaser' },
              { name: 'Locks (ReentrantLock, ReadWriteLock, StampedLock)' },
              { name: 'Atomic variables (AtomicInteger, AtomicReference)' },
              { name: 'BlockingQueue and its implementations' },
              { name: 'ForkJoinPool and parallel tasks' }
            ]
          },
          {
            name: 'Virtual Threads (Java 21+)',
            subTopics: [
              { name: 'Project Loom concepts' },
              { name: 'Creating and using virtual threads' },
              { name: 'Benefits over platform threads' }
            ]
          }
        ]
      },
      {
        id: 8,
        title: 'Java 8+ Modern Features',
        difficulty: 'intermediate',
        topics: [
          {
            name: 'Lambda Expressions',
            subTopics: [
              { name: 'Syntax and usage' },
              { name: 'Functional interfaces' },
              { name: 'Built-in functional interfaces (Predicate, Function, Consumer, Supplier)' }
            ]
          },
          {
            name: 'Stream API',
            subTopics: [
              { name: 'Creating streams' },
              { name: 'Intermediate operations (filter, map, flatMap, sorted)' },
              { name: 'Terminal operations (collect, forEach, reduce, count)' },
              { name: 'Parallel streams' }
            ]
          },
          {
            name: 'Optional Class',
            subTopics: [
              { name: 'Avoiding NullPointerException' },
              { name: 'Optional methods' }
            ]
          },
          {
            name: 'Date and Time API (java.time)',
            subTopics: [
              { name: 'LocalDate, LocalTime, LocalDateTime' },
              { name: 'ZonedDateTime' },
              { name: 'Period and Duration' }
            ]
          },
          { name: 'Default and Static Methods in Interfaces' },
          { name: 'Method References' },
          { name: 'Collectors' },
          {
            name: 'Java 9+ Features',
            subTopics: [
              { name: 'Modules (JPMS - Java Platform Module System)' },
              { name: 'JShell (REPL tool)' },
              { name: 'Factory methods for Collections (Java 9)' },
              { name: 'var keyword (Java 10)' },
              { name: 'HTTP Client API (Java 11)' },
              { name: 'Text Blocks (Java 13)' },
              { name: 'Switch Expressions (Java 12/14)' },
              { name: 'Records (Java 14/16)' },
              { name: 'Pattern Matching for instanceof (Java 14+)' },
              { name: 'Sealed Classes (Java 17)' },
              { name: 'Virtual Threads (Java 21)' },
              { name: 'Sequenced Collections (Java 21)' }
            ]
          }
        ]
      },
      {
        id: 9,
        title: 'String Handling',
        difficulty: 'basic',
        topics: [
          {
            name: 'String Class',
            subTopics: [
              { name: 'String immutability' },
              { name: 'String pool concept' },
              { name: 'Common String methods' }
            ]
          },
          {
            name: 'StringBuffer and StringBuilder',
            subTopics: [
              { name: 'Differences between String, StringBuffer, StringBuilder' },
              { name: 'When to use each' }
            ]
          },
          { name: 'String manipulation and pattern matching' },
          { name: 'Regular Expressions' }
        ]
      },
      {
        id: 10,
        title: 'File I/O & Serialization',
        difficulty: 'intermediate',
        topics: [
          {
            name: 'File Handling',
            subTopics: [
              { name: 'File class operations' },
              { name: 'Path and Paths (NIO.2)' }
            ]
          },
          {
            name: 'I/O Streams',
            subTopics: [
              { name: 'Byte streams (InputStream, OutputStream)' },
              { name: 'Character streams (Reader, Writer)' },
              { name: 'BufferedReader, BufferedWriter' },
              { name: 'FileInputStream, FileOutputStream' }
            ]
          },
          {
            name: 'Serialization',
            subTopics: [
              { name: 'Serializable interface' },
              { name: 'transient keyword' },
              { name: 'Externalization' },
              { name: 'serialVersionUID' }
            ]
          },
          {
            name: 'NIO (New I/O)',
            subTopics: [
              { name: 'Buffers, Channels, Selectors' },
              { name: 'Files class methods' }
            ]
          }
        ]
      },
      {
        id: 11,
        title: 'JDBC (Java Database Connectivity)',
        difficulty: 'intermediate',
        topics: [
          { name: 'JDBC Architecture' },
          { name: 'Driver types' },
          { name: 'Connection, Statement, PreparedStatement, CallableStatement' },
          { name: 'ResultSet and ResultSetMetaData' },
          { name: 'Transaction management' },
          { name: 'Batch processing' },
          { name: 'Connection pooling' }
        ]
      },
      {
        id: 12,
        title: 'Design Patterns',
        difficulty: 'advanced',
        topics: [
          {
            name: 'Creational Patterns',
            subTopics: [
              { name: 'Singleton' },
              { name: 'Factory Method' },
              { name: 'Abstract Factory' },
              { name: 'Builder' },
              { name: 'Prototype' }
            ]
          },
          {
            name: 'Structural Patterns',
            subTopics: [
              { name: 'Adapter' },
              { name: 'Decorator' },
              { name: 'Proxy' },
              { name: 'Facade' },
              { name: 'Composite' }
            ]
          },
          {
            name: 'Behavioral Patterns',
            subTopics: [
              { name: 'Observer' },
              { name: 'Strategy' },
              { name: 'Command' },
              { name: 'Iterator' },
              { name: 'Template Method' }
            ]
          }
        ]
      },
      {
        id: 13,
        title: 'JVM Internals & Memory Management',
        difficulty: 'advanced',
        topics: [
          {
            name: 'JVM Architecture',
            subTopics: [
              { name: 'Class loader subsystem' },
              { name: 'Runtime data areas' },
              { name: 'Execution engine' }
            ]
          },
          {
            name: 'Memory Areas',
            subTopics: [
              { name: 'Heap, Stack, Method Area' },
              { name: 'PC Register, Native Method Stack' }
            ]
          },
          {
            name: 'Garbage Collection',
            subTopics: [
              { name: 'GC algorithms' },
              { name: 'Types of GC (Serial, Parallel, CMS, G1, ZGC)' },
              { name: 'GC tuning' },
              { name: 'Memory leaks' }
            ]
          },
          {
            name: 'Class Loading',
            subTopics: [
              { name: 'Loading, Linking, Initialization' },
              { name: 'ClassLoader hierarchy' }
            ]
          }
        ]
      },
      {
        id: 14,
        title: 'Testing',
        difficulty: 'intermediate',
        topics: [
          {
            name: 'JUnit',
            subTopics: [
              { name: 'Annotations (@Test, @Before, @After, etc.)' },
              { name: 'Assertions' },
              { name: 'Test suites' },
              { name: 'Parameterized tests' }
            ]
          },
          {
            name: 'Mockito',
            subTopics: [
              { name: 'Mocking objects' },
              { name: 'Stubbing methods' },
              { name: 'Verification' }
            ]
          },
          { name: 'Test-Driven Development (TDD)' }
        ]
      },
      {
        id: 15,
        title: 'Miscellaneous Topics',
        difficulty: 'intermediate',
        topics: [
          {
            name: 'Annotations',
            subTopics: [
              { name: 'Built-in annotations' },
              { name: 'Custom annotations' },
              { name: 'Retention policies' }
            ]
          },
          {
            name: 'Reflection API',
            subTopics: [
              { name: 'Inspecting classes at runtime' },
              { name: 'Invoking methods dynamically' }
            ]
          },
          {
            name: 'Networking',
            subTopics: [
              { name: 'Socket programming' },
              { name: 'URL and URLConnection' }
            ]
          },
          {
            name: 'Cloning',
            subTopics: [
              { name: 'Shallow vs Deep copy' },
              { name: 'Cloneable interface' }
            ]
          },
          { name: 'Enum' },
          {
            name: 'Wrapper Classes and Autoboxing',
            subTopics: [
              { name: 'Autoboxing and Unboxing' },
              { name: 'Integer cache' }
            ]
          },
          {
            name: 'Internationalization (i18n)',
            subTopics: [
              { name: 'Locale and ResourceBundle' },
              { name: 'NumberFormat, DateFormat' }
            ]
          },
          {
            name: 'Java Memory Model',
            subTopics: [
              { name: 'Happens-before relationship' },
              { name: 'volatile keyword' },
              { name: 'Thread visibility' }
            ]
          }
        ]
      },
      {
        id: 16,
        title: 'RESTful APIs & Web Services',
        difficulty: 'intermediate',
        topics: [
          {
            name: 'RESTful Web Services',
            subTopics: [
              { name: 'REST principles and constraints' },
              { name: 'HTTP methods (GET, POST, PUT, DELETE, PATCH)' },
              { name: 'Status codes' },
              { name: 'JAX-RS annotations' },
              { name: 'JSON and XML processing' }
            ]
          },
          {
            name: 'API Design',
            subTopics: [
              { name: 'REST API best practices' },
              { name: 'Versioning strategies' },
              { name: 'Authentication (JWT, OAuth2)' },
              { name: 'CORS' }
            ]
          },
          {
            name: 'SOAP Web Services',
            subTopics: [
              { name: 'WSDL and XML Schema' },
              { name: 'JAX-WS' }
            ]
          }
        ]
      },
      {
        id: 17,
        title: 'Spring Framework (Overview)',
        difficulty: 'advanced',
        topics: [
          {
            name: 'Spring Core Framework',
            subTopics: [
              { name: 'Microservices vs Monolithic vs SOA' },
              { name: 'Domain-Driven Design (DDD) and bounded contexts' },
              { name: '12-Factor App methodology' }
            ]
          },
          {
            name: 'API Gateway Pattern (Intro)',
            subTopics: [
              { name: 'API Gateway vs Backend for Frontend (BFF)' },
              { name: 'Request routing and composition' }
            ]
          },
          {
            name: 'Service Discovery & Registry (Intro)',
            subTopics: [
              { name: 'Eureka Server and Client' },
              { name: 'Consul for service discovery' }
            ]
          }
        ]
      },
      {
        id: 18,
        title: 'Spring Boot (Overview)',
        difficulty: 'advanced',
        topics: [
          {
            name: 'Spring Boot Fundamentals',
            subTopics: [
              { name: 'Dependency Injection (DI)' },
              { name: 'Inversion of Control (IoC) Container' },
              { name: 'ApplicationContext vs BeanFactory' }
            ]
          }
        ]
      },
      {
        id: 19,
        title: 'Microservices Architecture (Overview)',
        difficulty: 'advanced',
        topics: [
          { name: 'Microservices Fundamentals' },
          { name: 'Configuration Management' }
        ]
      },
      {
        id: 20,
        title: 'Frameworks & Tools',
        difficulty: 'advanced',
        topics: [
          { name: 'Hibernate (ORM)' },
          { name: 'Build Tools (Maven/Gradle)' }
        ]
      },
      {
        id: 21,
        title: 'Best Practices & Coding Standards',
        difficulty: 'intermediate',
        topics: [
          { name: 'SOLID Principles' },
          { name: 'Clean Code Principles' }
        ]
      },
      {
        id: 22,
        title: 'Data Structures & Algorithms',
        difficulty: 'intermediate',
        topics: [
          { name: 'Data Structures' },
          { name: 'Algorithm Concepts' }
        ]
      },
      {
        id: 23,
        title: 'Advanced Java Topics',
        difficulty: 'advanced',
        topics: [
          { name: 'Reactive Programming' },
          { name: 'Performance Tuning' }
        ]
      },
      {
        id: 24,
        title: 'Common Interview Scenarios',
        difficulty: '',
        topics: [
          { name: 'Why String is immutable?' },
          { name: 'HashMap internal working' }
        ]
      },
      {
        id: 25,
        title: 'Core Spring Framework (Deep Dive)',
        difficulty: 'basic',
        topics: [
          {
            name: 'Inversion of Control (IoC) & Dependency Injection (DI)',
            subTopics: [
              { name: 'ApplicationContext vs BeanFactory' },
              { name: 'Bean Scopes (Singleton, Prototype, Request, Session)' },
              { name: 'Bean Lifecycle (@PostConstruct, @PreDestroy)' },
              { name: 'Configuration Styles: Java-based (@Configuration), Annotation-based (@Component), XML' },
              { name: 'Dependency Injection types: Constructor (Best Practice) vs Setter vs Field' }
            ]
          },
          { name: 'Spring Expression Language (SpEL)' },
          {
            name: 'Aspect-Oriented Programming (AOP)',
            subTopics: [
              { name: 'Cross-cutting concerns (Logging, Transaction management)' },
              { name: 'Aspect, Advice, Pointcut, JoinPoint' },
              { name: 'Annotations: @Before, @After, @Around, @AfterThrowing' }
            ]
          }
        ]
      },
      {
        id: 26,
        title: 'Spring Boot Fundamentals',
        difficulty: 'intermediate',
        topics: [
          {
            name: 'Introduction',
            subTopics: [
              { name: 'Opinionated Defaults & "Convention over Configuration"' },
              { name: 'Starters (spring-boot-starter-web, etc.)' },
              { name: 'Auto-configuration magic (@EnableAutoConfiguration)' }
            ]
          },
          {
            name: 'Configuration Management',
            subTopics: [
              { name: 'application.properties vs application.yml' },
              { name: '@Value, @ConfigurationProperties' },
              { name: 'Profiles (Dev, QA, Prod)' }
            ]
          },
          {
            name: 'Developer Tools',
            subTopics: [
              { name: 'Spring Boot DevTools (Live Reload)' },
              { name: 'Lombok integration' }
            ]
          }
        ]
      },
      {
        id: 27,
        title: 'Data Access & Persistence',
        difficulty: 'intermediate',
        topics: [
          {
            name: 'Spring JDBC',
            subTopics: [
              { name: 'JdbcTemplate & NamedParameterJdbcTemplate' }
            ]
          },
          {
            name: 'Spring Data JPA (Hibernate)',
            subTopics: [
              { name: 'Entity Mapping (@Entity, @Table, @Id, @GeneratedValue)' },
              { name: 'Repositories (CrudRepository, JpaRepository)' },
              { name: 'Query Methods (Derived queries, @Query, Native Queries)' },
              { name: 'Relationships (OneToOne, OneToMany, ManyToMany)' },
              { name: 'Pagination & Sorting' }
            ]
          },
          {
            name: 'Transaction Management',
            subTopics: [
              { name: '@Transactional (Propagation, Isolation levels, Rollback rules)' }
            ]
          },
          {
            name: 'NoSQL Integration',
            subTopics: [
              { name: 'Spring Data MongoDB' },
              { name: 'Spring Data Redis (Caching & Pub/Sub)' }
            ]
          },
          {
            name: 'Database Migration',
            subTopics: [
              { name: 'Flyway or Liquibase integration' }
            ]
          }
        ]
      },
      {
        id: 28,
        title: 'Web & REST API Development',
        difficulty: 'intermediate',
        topics: [
          {
            name: 'Spring MVC',
            subTopics: [
              { name: 'DispatcherServlet architecture' },
              { name: 'Controllers (@RestController, @RequestMapping)' },
              { name: 'Request/Response Handling (@RequestBody, @ResponseBody, @RequestParam, @PathVariable)' },
              { name: 'Status Codes & ResponseEntity' }
            ]
          },
          {
            name: 'Advanced REST',
            subTopics: [
              { name: 'Global Exception Handling (@ControllerAdvice, @ExceptionHandler)' },
              { name: 'Bean Validation (Hibernate Validator, @Valid, @NotNull, @Size)' },
              { name: 'HATEOAS (Hypermedia as the Engine of Application State)' },
              { name: 'Content Negotiation (JSON vs XML)' },
              { name: 'File Upload/Download' }
            ]
          },
          {
            name: 'API Documentation',
            subTopics: [
              { name: 'OpenAPI 3.0 / Swagger (SpringDoc)' }
            ]
          }
        ]
      },
      {
        id: 29,
        title: 'Spring Security (Security 6.x)',
        difficulty: 'advanced',
        topics: [
          {
            name: 'Core Concepts',
            subTopics: [
              { name: 'Authentication vs Authorization' },
              { name: 'SecurityFilterChain & Filters' },
              { name: 'UserDetailsService & PasswordEncoding (BCrypt)' }
            ]
          },
          {
            name: 'Authentication Mechanisms',
            subTopics: [
              { name: 'Basic Auth & Form Login' },
              { name: 'JWT (JSON Web Tokens): Implementation & Best Practices' }
            ]
          },
          {
            name: 'OAuth2 & OpenID Connect (OIDC)',
            subTopics: [
              { name: 'Resource Server, Authorization Server, Client' },
              { name: 'Social Login (Google, GitHub)' }
            ]
          },
          {
            name: 'Authorization',
            subTopics: [
              { name: 'Role-based vs Authority-based access' },
              { name: 'Method Level Security (@PreAuthorize, @PostAuthorize)' }
            ]
          },
          {
            name: 'Protection',
            subTopics: [
              { name: 'CORS (Cross-Origin Resource Sharing)' },
              { name: 'CSRF (Cross-Site Request Forgery)' }
            ]
          }
        ]
      },
      {
        id: 30,
        title: 'Microservices & Spring Cloud',
        difficulty: 'advanced',
        topics: [
          {
            name: 'Service Discovery',
            subTopics: [
              { name: 'Netflix Eureka / HashiCorp Consul' }
            ]
          },
          {
            name: 'API Gateway',
            subTopics: [
              { name: 'Spring Cloud Gateway (Routing, Filtering, Rate Limiting)' }
            ]
          },
          {
            name: 'Config Management',
            subTopics: [
              { name: 'Spring Cloud Config Server (Centralized configuration)' }
            ]
          },
          {
            name: 'Resilience & Fault Tolerance',
            subTopics: [
              { name: 'Resilience4j (Circuit Breaker, Retry, Rate Limiter, Bulkhead)' }
            ]
          },
          {
            name: 'Distributed Tracing',
            subTopics: [
              { name: 'Micrometer Tracing (formerly Sleuth) + Zipkin/Brave' }
            ]
          }
        ]
      },
      {
        id: 31,
        title: 'Spring AI (Generative AI)',
        difficulty: 'advanced',
        topics: [
          {
            name: 'Introduction to Generative AI',
            subTopics: [
              { name: 'Large Language Models (LLMs) concepts' }
            ]
          },
          {
            name: 'Spring AI Core',
            subTopics: [
              { name: 'Chat Client API: Interacting with OpenAI, Azure OpenAI, Ollama, HuggingFace' },
              { name: 'Prompts: Prompt Templates, Prompt Engineering within Java' },
              { name: 'Output Parsers: Converting AI text responses into Java Objects (POJOs)' }
            ]
          },
          {
            name: 'Embeddings & Vector Databases',
            subTopics: [
              { name: 'Text Embeddings models' },
              { name: 'Vector Store integration (PGVector, Pinecone, Milvus, Redis)' }
            ]
          },
          {
            name: 'RAG (Retrieval Augmented Generation)',
            subTopics: [
              { name: 'Document Readers (PDF, Text, JSON)' },
              { name: 'Token Splitters' },
              { name: 'Contextual search implementation' }
            ]
          },
          {
            name: 'Advanced AI',
            subTopics: [
              { name: 'Function Calling (Letting AI call your Java methods)' },
              { name: 'Image Generation (DALL-E, Stability AI)' }
            ]
          }
        ]
      },
      {
        id: 32,
        title: 'Messaging & Event-Driven Architecture',
        difficulty: 'advanced',
        topics: [
          {
            name: 'JMS (Java Message Service)',
            subTopics: [
              { name: 'ActiveMQ integration' }
            ]
          },
          {
            name: 'Apache Kafka',
            subTopics: [
              { name: 'Spring for Apache Kafka' },
              { name: 'Producers, Consumers, Consumer Groups' }
            ]
          },
          {
            name: 'RabbitMQ',
            subTopics: [
              { name: 'Exchanges, Queues, Routing Keys' }
            ]
          },
          {
            name: 'Spring Cloud Stream',
            subTopics: [
              { name: 'Binder abstraction (Switch between Kafka/RabbitMQ easily)' }
            ]
          }
        ]
      },
      {
        id: 33,
        title: 'Spring Batch & Scheduling',
        difficulty: 'advanced',
        topics: [
          {
            name: 'Scheduling',
            subTopics: [
              { name: '@Scheduled (FixedRate, FixedDelay, Cron expressions)' },
              { name: 'Quartz Scheduler integration' }
            ]
          },
          {
            name: 'Spring Batch',
            subTopics: [
              { name: 'Job, Step, JobRepository' },
              { name: 'ItemReader, ItemProcessor, ItemWriter' },
              { name: 'Chunk-oriented processing' },
              { name: 'Error handling (Skip, Retry policies)' },
              { name: 'Parallel processing & Partitioning' }
            ]
          }
        ]
      },
      {
        id: 34,
        title: 'Reactive Programming (WebFlux)',
        difficulty: 'advanced',
        topics: [
          {
            name: 'Project Reactor',
            subTopics: [
              { name: 'Mono vs Flux' },
              { name: 'Backpressure' }
            ]
          },
          {
            name: 'Spring WebFlux',
            subTopics: [
              { name: 'Non-blocking REST APIs' },
              { name: 'Netty Server' },
              { name: 'Reactive Database Access (R2DBC)' }
            ]
          }
        ]
      },
      {
        id: 35,
        title: 'Spring Boot Testing',
        difficulty: 'intermediate',
        topics: [
          {
            name: 'Unit Testing',
            subTopics: [
              { name: 'JUnit 5 & Mockito (Mocking dependencies)' }
            ]
          },
          {
            name: 'Integration Testing',
            subTopics: [
              { name: '@SpringBootTest' },
              { name: 'Test Slices (@WebMvcTest, @DataJpaTest)' }
            ]
          },
          {
            name: 'Advanced Testing',
            subTopics: [
              { name: 'Testcontainers (Spinning up real DBs/Kafka in Docker for tests)' },
              { name: 'WireMock (Mocking external APIs)' }
            ]
          }
        ]
      },
      {
        id: 36,
        title: 'Observability & Production Ready',
        difficulty: 'advanced',
        topics: [
          {
            name: 'Spring Boot Actuator',
            subTopics: [
              { name: 'Health checks, Metrics, Info, Beans endpoints' }
            ]
          },
          {
            name: 'Monitoring',
            subTopics: [
              { name: 'Micrometer (Metrics facade)' },
              { name: 'Prometheus & Grafana integration' }
            ]
          },
          {
            name: 'Logging',
            subTopics: [
              { name: 'SLF4J, Logback' },
              { name: 'Log aggregation (ELK Stack: Elasticsearch, Logstash, Kibana)' }
            ]
          },
          {
            name: 'Deployment',
            subTopics: [
              { name: 'Dockerizing Spring Boot' },
              { name: 'GraalVM Native Images (AOT Compilation for instant startup)' }
            ]
          }
        ]
      },
      {
        id: 37,
        title: 'Miscellaneous / Advanced Spring',
        difficulty: 'advanced',
        topics: [
          {
            name: 'GraphQL',
            subTopics: [
              { name: 'Spring for GraphQL (Controller, Schema, DataFetchers)' }
            ]
          },
          {
            name: 'WebSockets',
            subTopics: [
              { name: 'STOMP protocol, SockJS, Real-time chat' }
            ]
          },
          {
            name: 'Caching',
            subTopics: [
              { name: '@Cacheable, @CacheEvict' },
              { name: 'Providers: Caffeine, Redis' }
            ]
          }
        ]
      }
    ];
  }
}
