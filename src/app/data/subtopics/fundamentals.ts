import { SubtopicContent } from '../../models/syllabus.model';

export const fundamentalsContent: SubtopicContent = {
  name: 'Core Java Exception Handling — Fundamentals',
  overview: 'Understanding the fundamental concepts of exception handling in Java, including what exceptions are, why they exist, and how Java handles them internally.',
  sections: [
    {
      title: 'What Is an Exception?',
      content: 'An exception is an abnormal condition that occurs during program execution and disrupts the normal flow of instructions. In simple terms: An exception is a runtime problem that Java can detect and represent as an object.',
      subsections: [
        {
          title: 'Common Examples',
          content: `• Dividing by zero
• Accessing an array out of bounds
• Reading a missing file
• Calling a method on a null object`
        }
      ]
    },
    {
      title: 'Why Exception Handling Exists',
      content: 'Exception handling is crucial for building robust and reliable applications.',
      subsections: [
        {
          title: 'Without Exception Handling',
          content: `• Program crashes abruptly
• Resources are not released
• No meaningful error message for users
• Difficult debugging`
        },
        {
          title: 'With Exception Handling',
          content: `• Program fails gracefully
• Errors are reported clearly
• Resources are safely cleaned
• System remains stable

💡 Goal: Separate error-handling logic from business logic`
        }
      ]
    },
    {
      title: 'Error vs Exception (VERY IMPORTANT)',
      content: 'Understanding the difference between Error and Exception is fundamental to proper exception handling in Java.',
      subsections: [
        {
          title: '🔴 Error',
          content: `• Serious problems outside application control
• Usually caused by JVM or system
• Applications should NOT catch these
• Examples: OutOfMemoryError, StackOverflowError`
        },
        {
          title: '🟡 Exception',
          content: `• Problems within application control
• Can be handled and recovered
• Part of normal program design`
        },
        {
          title: 'Comparison Table',
          content: `Aspect | Error | Exception
Recoverable | ❌ No | ✅ Yes
Caused by | JVM/System | Application logic
Should be handled | ❌ No | ✅ Yes
Package | java.lang | java.lang`
        }
      ]
    },
    {
      title: 'Compile-Time vs Runtime Errors',
      content: 'Java distinguishes between errors that occur during compilation and those that occur during execution.',
      subsections: [
        {
          title: '❌ Compile-Time Error',
          content: `• Detected before execution
• Caused by syntax mistakes
• Must be fixed before program can run`
        },
        {
          title: '❌ Runtime Error',
          content: `• Happens during execution
• Represented by exceptions
• Can be handled using try-catch blocks`
        }
      ]
    },
    {
      title: 'What Happens When an Exception Occurs? (JVM Flow)',
      content: 'This is core conceptual knowledge about how the JVM handles exceptions.',
      subsections: [
        {
          title: 'JVM Steps',
          content: `1. Exception occurs
2. JVM creates an Exception Object
3. Normal execution stops
4. JVM searches for a matching catch block
5. If found → handled
6. If not → program terminates`
        }
      ]
    },
    {
      title: 'Exception Is an Object (Key Concept)',
      content: 'In Java, every exception is an object. All exceptions inherit from Throwable. This allows passing exceptions, catching by type, and accessing messages & stack traces.'
    },
    {
      title: 'The Call Stack & Exception Propagation',
      content: 'When an exception occurs, it propagates up the call stack until it finds a handler or terminates the program.',
      subsections: [
        {
          title: 'Propagation Process',
          content: `1. Exception occurs in methodB
2. JVM looks for handler in methodB
3. Not found → goes to methodA
4. Not found → goes to main
5. Still not found → JVM terminates program

This process is called stack unwinding.`
        }
      ]
    },
    {
      title: 'Default Exception Handling (Without try-catch)',
      content: 'If no handling is provided, the JVM prints exception name, error message, and stack trace, then terminates the program.'
    },
    {
      title: 'Why Java Forces Exception Handling',
      content: 'Java was designed for robust systems, enterprise applications, and long-running servers.',
      subsections: [
        {
          title: 'Java Enforces',
          content: `• Checked exception handling
• Clear error contracts
• Predictable failure behavior`
        },
        {
          title: 'Why Java is Preferred For',
          content: `• Banking
• Telecom
• Backend systems
• Distributed applications`
        }
      ]
    },
    {
      title: 'Exception Handling vs Normal Control Flow',
      content: '👉 Exceptions are for exceptional cases, not normal logic. Use proper validation for expected conditions.'
    }
  ],
  codeExamples: [
    {
      title: 'Basic Exception Example',
      description: 'ArithmeticException when dividing by zero',
      code: `int a = 10 / 0;  // ArithmeticException`,
      language: 'java'
    },
    {
      title: 'Compile-Time Error Example',
      description: 'Syntax error detected before execution',
      code: `int a = ; // compilation error`,
      language: 'java'
    },
    {
      title: 'Runtime Error Example',
      description: 'ArrayIndexOutOfBoundsException during execution',
      code: `int[] arr = new int[2];
arr[5] = 10; // runtime exception`,
      language: 'java'
    },
    {
      title: 'Exception as Object',
      description: 'Creating and using exception objects',
      code: `ArithmeticException e = new ArithmeticException("Divide by zero");`,
      language: 'java'
    },
    {
      title: 'Call Stack Example',
      description: 'How exceptions propagate through method calls',
      code: `void methodA() {
    methodB();
}

void methodB() {
    int x = 10 / 0;
}`,
      language: 'java'
    },
    {
      title: 'Default Exception Output',
      description: 'What happens when exception is not caught',
      code: `Exception in thread "main" java.lang.ArithmeticException: / by zero
    at Test.methodB(Test.java:10)
    at Test.methodA(Test.java:5)`,
      language: 'text'
    },
    {
      title: '🚫 BAD PRACTICE',
      description: 'Using exceptions for normal control flow',
      code: `try {
    int value = Integer.parseInt(str);
} catch (Exception e) {
    // Empty catch block - bad practice
}`,
      language: 'java'
    },
    {
      title: '✅ GOOD PRACTICE',
      description: 'Proper validation before parsing',
      code: `if (str != null && str.matches("\\\\d+")) {
    int value = Integer.parseInt(str);
}`,
      language: 'java'
    }
  ],
  keyPoints: [
    'An exception is a runtime problem that Java represents as an object',
    'Exception handling separates error logic from business logic',
    'Errors are serious JVM/system problems and should NOT be caught',
    'Exceptions are application problems that CAN and SHOULD be handled',
    'Compile-time errors are syntax issues; runtime errors are exceptions',
    'When an exception occurs, JVM creates an object and searches for a handler',
    'All exceptions are objects that inherit from Throwable',
    'Exceptions propagate up the call stack until handled or program terminates',
    'Without handling, JVM prints stack trace and terminates the program',
    'Java forces exception handling for enterprise-grade robustness',
    'Use exceptions for exceptional cases, not normal control flow'
  ],
  references: [
    'Oracle Java Documentation - Exception Handling',
    'Effective Java by Joshua Bloch - Exception Handling Best Practices',
    'Java Language Specification - Chapter 11: Exceptions'
  ],
  interviewQA: [
    {
      question: 'What is an exception in Java?',
      answer: 'An exception is an abnormal condition or event that occurs during program execution and disrupts the normal flow of instructions. It is a runtime problem that Java detects and represents as an object. All exceptions inherit from the Throwable class.',
      difficulty: 'easy',
      tags: ['basics', 'definition']
    },
    {
      question: 'What is the difference between Error and Exception in Java?',
      answer: `Error:
• Serious problems outside application control
• Usually caused by JVM or system failures
• Applications should NOT catch these
• Examples: OutOfMemoryError, StackOverflowError
• Not recoverable

Exception:
• Problems within application control
• Can be handled and recovered
• Part of normal program design
• Examples: NullPointerException, IOException
• Recoverable through proper exception handling`,
      difficulty: 'medium',
      tags: ['error', 'exception', 'comparison']
    },
    {
      question: 'What happens when an exception occurs in Java?',
      answer: `When an exception occurs, the JVM follows these steps:
1. Exception object is created
2. Normal execution stops immediately
3. JVM searches for a matching catch block in the current method
4. If not found, it propagates to the calling method (stack unwinding)
5. This continues up the call stack
6. If a matching handler is found, it executes the catch block
7. If no handler is found anywhere, the program terminates and prints the stack trace`,
      difficulty: 'medium',
      tags: ['jvm', 'flow', 'propagation']
    },
    {
      question: 'What is the difference between compile-time and runtime errors?',
      answer: `Compile-Time Error:
• Detected before program execution
• Caused by syntax mistakes
• Must be fixed before the program can run
• Examples: missing semicolon, type mismatch
• Caught by the compiler

Runtime Error:
• Occurs during program execution
• Represented by exceptions
• Can be handled using try-catch blocks
• Examples: division by zero, array index out of bounds
• Detected by the JVM at runtime`,
      difficulty: 'easy',
      tags: ['compile-time', 'runtime', 'errors']
    },
    {
      question: 'Why does Java force exception handling?',
      answer: `Java enforces exception handling because it was designed for:
• Robust enterprise systems
• Long-running server applications
• Banking and telecom systems
• Distributed applications

Benefits:
• Clear error contracts through method signatures
• Predictable failure behavior
• Forces developers to think about error scenarios
• Ensures resources are properly cleaned up
• Prevents silent failures
• Makes code more maintainable and reliable`,
      difficulty: 'medium',
      tags: ['design', 'robustness', 'enterprise']
    },
    {
      question: 'What is exception propagation and stack unwinding?',
      answer: `Exception Propagation: When an exception occurs in a method and is not caught there, it propagates up the call stack to the calling method.

Stack Unwinding: The process of traversing back through the call stack looking for an exception handler.

Example:
main() → methodA() → methodB() → exception occurs

The exception propagates: methodB → methodA → main
If not handled anywhere, the JVM terminates the program.

This automatic propagation allows centralized exception handling at appropriate levels.`,
      difficulty: 'hard',
      tags: ['propagation', 'stack', 'call-stack']
    },
    {
      question: 'Is it a good practice to use exceptions for normal control flow?',
      answer: `No, it is NOT a good practice. 

Bad Practice:
try {
    int value = Integer.parseInt(str);
} catch (Exception e) {
    // handle
}

Good Practice:
if (str != null && str.matches("\\d+")) {
    int value = Integer.parseInt(str);
}

Reasons:
• Exceptions are expensive (creating stack traces)
• Makes code harder to read and maintain
• Hides actual exceptional conditions
• Poor performance
• Violates principle of least surprise

Rule: Use exceptions for exceptional cases, use validation for expected conditions.`,
      difficulty: 'medium',
      tags: ['best-practices', 'control-flow', 'performance']
    },
    {
      question: 'Why is an exception an object in Java?',
      answer: `Every exception in Java is an object because:

1. Enables passing exceptions between methods
2. Allows catching by specific type
3. Provides access to error information (message, stack trace)
4. Supports inheritance hierarchy for exception types
5. Can store additional context about the error

Example:
ArithmeticException e = new ArithmeticException("Divide by zero");

Benefits:
• getMessage() - get error message
• printStackTrace() - debug information
• getCause() - exception chaining
• Type-specific handling based on exception class`,
      difficulty: 'medium',
      tags: ['object', 'oop', 'design']
    },
    {
      question: 'What is the output when an exception is not caught?',
      answer: `When an exception is not caught, the JVM:

1. Prints the exception name
2. Prints the error message
3. Prints the complete stack trace
4. Terminates the program

Example Output:
Exception in thread "main" java.lang.ArithmeticException: / by zero
    at Test.methodB(Test.java:10)
    at Test.methodA(Test.java:5)
    at Test.main(Test.java:2)

The stack trace shows:
• Exception type and message
• Exact line where exception occurred
• Complete method call chain
• Line numbers for debugging`,
      difficulty: 'easy',
      tags: ['stack-trace', 'default-handling', 'output']
    },
    {
      question: 'Can you catch an Error in Java? Should you?',
      answer: `Can you? Technically YES - Errors extend Throwable, so they can be caught.

Should you? NO - You should NOT catch Errors.

Reasons:
• Errors indicate serious JVM or system problems
• Usually irrecoverable (OutOfMemoryError, StackOverflowError)
• Application cannot meaningfully handle them
• Catching may hide critical system issues
• JVM might be in an unstable state

Exception: In very rare cases like custom class loaders or testing frameworks, you might catch specific Errors, but this is advanced and unusual.

Best Practice: Let Errors propagate and terminate the application, then fix the root cause.`,
      difficulty: 'hard',
      tags: ['error', 'best-practices', 'advanced']
    }
  ]
};
