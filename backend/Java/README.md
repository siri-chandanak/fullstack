# Java

## IDE (Integrated Development Environment)

An IDE is a software application that provides tools to write, edit, run, and debug code easily.

Popular Java IDEs:

* Eclipse
* IntelliJ IDEA
* VS Code
* NetBeans

Latest Java Version: **Java 20**

---

# Java Execution Architecture

## Bytecode

* Java source code (`.java`) is compiled into bytecode (`.class`).
* Bytecode is platform-independent.
* It can run on any system that has a JVM installed.

---

## JDK, JRE, JVM Relationship

```
JDK ⊃ JRE ⊃ JVM
```

### JVM (Java Virtual Machine)

* It is the engine that runs Java programs.
* Reads `.class` bytecode.
* Converts bytecode into machine code.
* Executes it on the system.
* Platform dependent internally, but runs platform-independent bytecode.

### JRE (Java Runtime Environment)

* JVM + Core libraries.
* Used only to RUN Java applications.
* Cannot develop Java programs.

### JDK (Java Development Kit)

* JRE + Development tools.
* Used to WRITE, COMPILE, and RUN Java programs.

JDK contains:

* javac (compiler)
* jdb (debugger)
* javap (disassembler)
* jar tool
* jconsole

---

## javap Tool

Used to inspect compiled `.class` files.

Commands:

* `javap ClassName` → Shows methods and fields
* `javap -c ClassName` → Shows bytecode instructions
* `javap -private ClassName` → Shows private members
* `javap -verbose ClassName` → Full class details

---

# Type Conversion

```
String s = "234";
int n = Integer.parseInt(s);
```

Converts string to integer.

---

# Data Types

## Primitive Data Types

### Integer Types

* byte → 1 byte
* short → 2 bytes
* int → 4 bytes
* long → 8 bytes

### Floating Types

* float → 4 bytes (6 decimal precision)
* double → 8 bytes (15 decimal precision)

### Other Types

* char → single character
* boolean → true/false

## Reference Types

* Arrays
* Strings
* Objects
* Classes

---

# Operator Precedence

Highest → Lowest

1. `(), []`
2. `++, --`
3. `*, /, %`
4. `+, -`
5. Unary → `++, --, !, ~`
6. Binary → `+, *, <, >, =, &&, ||`
7. Shift → `<<, >>, >>>`
8. Ternary → `?:`

---

# Control Statements

Decision Making:

* if
* if-else
* switch

Loops:

* while
* do-while
* for
* for-each

Jump:

* break
* continue
* return

---

# Input in Java

```
import java.util.Scanner;

Scanner sc = new Scanner(System.in);

String name = sc.nextLine();
int age = sc.nextInt();
```

Scanner Methods:

* nextInt()
* nextDouble()
* next()
* nextLine()
* nextBoolean()

---

# Arrays

## Declaration

```
int[] arr = new int[5];
int arr[] = new int[5];
int[] arr = {1,2,3,4};
```

Access length:

```
arr.length
```

## 2D Arrays

```
int[][] matrix = {{1,2},{3,4}};
```

Jagged Arrays:

```
int[][] arr = new int[3][];
arr[0] = new int[2];
arr[1] = new int[3];
arr[2] = new int[1];
```

Array Utility Methods:

* Arrays.equals()
* Arrays.deepEquals()
* Arrays.toString()
* Arrays.deepToString()

---

# ArrayList (Dynamic Array)

```
ArrayList<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);
list.add(1, 99);
list.get(0);
list.set(0, 100);
list.remove(1);
list.size();
```

---

# StringBuilder

Efficient mutable string.

```
StringBuilder sb = new StringBuilder();
sb.append("Java");
sb.reverse();
```

Operations:

* append()
* charAt()
* setCharAt()
* deleteCharAt()
* length()
* reverse()

---

# String

* Immutable (cannot change after creation)

Comparison:

```
s1 == s2        // memory
s1.equals(s2)   // content
```

Common Methods:

* length()
* substring()
* toUpperCase()
* trim()
* replace()
* split()
* isEmpty()
* isBlank()
* concat()

---

# OOP (Object Oriented Programming)

OOP models real-world entities as objects.

## 4 Pillars

1. Encapsulation
2. Inheritance
3. Polymorphism
4. Abstraction

---

# Classes and Objects

Class → blueprint
Object → real instance

```
Car c = new Car();
```

Types of Variables:

* Instance → each object
* Static → shared
* Local → inside method

Constructor:

* Same name as class
* Initializes object

Keywords:

* this → current object
* super → parent class

---

# Encapsulation

* Hiding data using private variables.
* Access through public methods.

Access Modifiers:

* public
* private
* protected
* default

---

# Inheritance

One class acquires properties of another.

```
class Parent {}
class Child extends Parent {}
```

Types:

* Single
* Multilevel
* Hierarchical

Java does NOT support multiple inheritance using classes.

---

# Method Overriding

Child redefines parent method.

Cannot override:

* final
* static
* private

---

# Polymorphism

One method behaves differently.

Types:

* Compile time → Overloading
* Runtime → Overriding

---

# Abstraction

Hiding implementation details.

Using:

* Abstract class
* Interface

---

# Interface

* Blueprint of behavior
* Supports multiple inheritance

```
interface Payment {
    void pay(double amount);
}
```

---

# Packages

Namespace that groups related classes.

Built-in:

* java.lang
* java.util
* java.io
* java.sql

Project Structure:

```
controller
service
repository
model
dto
util
```

---

# Exception Handling

Hierarchy:

```
Throwable
 ├── Exception
 └── Error
```

Types:

* Checked → compile time
* Unchecked → runtime
* Errors → system failure

Example:

```
try {
    int x = 5/0;
} catch(Exception e) {
    System.out.println(e);
}
```

---

# I/O Streams

Used to read/write data.

Byte Streams:

* InputStream
* OutputStream

Character Streams:

* Reader
* Writer

Classes:

* FileReader
* BufferedReader
* FileWriter
* ObjectInputStream

---

# Multithreading

Running multiple tasks at same time.

Ways:

1. Extend Thread
2. Implement Runnable

Thread Methods:

* start()
* sleep()
* join()

Lifecycle:
NEW → RUNNABLE → RUNNING → WAITING → TERMINATED

---

# Synchronization

Prevents race conditions.

```
synchronized void increment() {
    count++;
}
```

Problems:

* Deadlock
* Starvation
* Performance issues

---

# Collections Framework

Hierarchy:

```
Collection
 ├── List
 ├── Set
 └── Queue
Map (separate)
```

List:

* ArrayList
* LinkedList

Set:

* HashSet
* TreeSet

Map:

* HashMap
* TreeMap

---

# Generics

Allows type safety.

```
class Box<T> {
    T value;
}
```

---

# Reflection

Allows program to inspect classes at runtime.

---

# Lambda Expression

Short way to write functions.

```
(a,b) -> a + b
```

---

# Stream API

Used to process collections.

```
list.stream()
    .filter(n -> n > 2)
    .map(n -> n * 2)
    .forEach(System.out::println);
```

Operations:

* filter()
* map()
* sorted()
* distinct()
* limit()
* skip()

# ☕ Complete Java  Master Notes

A structured guide covering Core Java + Advanced Java + Java 8+ + JVM internals.

---

# 📌 1. Java Architecture

## Java Execution Flow

```
.java → javac → .class (Bytecode) → JVM → Machine Code
```

## JDK ⊃ JRE ⊃ JVM

### JVM

* Executes bytecode
* Converts bytecode → machine code
* Platform dependent internally

### JRE

* JVM + Libraries
* Used to run Java apps

### JDK

* JRE + Tools
* Used to develop Java apps

Tools:

* javac
* javap
* jdb
* jar

---

# 📌 2. JVM Internal Architecture (Very Important)

### Memory Areas

## Heap

* Stores objects
* Shared across threads
* GC works here

## Stack

* Stores method calls
* Local variables
* One stack per thread

## Method Area

* Class metadata
* Static variables

## PC Register

* Current executing instruction

## Native Method Stack

* Native code execution

---

# 📌 3. Garbage Collection

Automatic memory cleanup.

### GC Types

* Serial GC
* Parallel GC
* G1 GC

### Phases

* Mark
* Sweep
* Compact

---

# 📌 4. Data Types

## Primitive

* byte (1B)
* short (2B)
* int (4B)
* long (8B)
* float
* double
* char
* boolean

## Reference

* Arrays
* Objects
* Strings

---

# 📌 5. Wrapper Classes

Primitive → Object

* int → Integer
* char → Character

### Autoboxing

```
Integer x = 10;
```

### Unboxing

```
int y = x;
```

---

# 📌 6. Operators Precedence

```
(), []
++, --
*, /, %
+, -
<, >
&&, ||
?:
```

---

# 📌 7. Control Statements

* if / else
* switch
* for
* while
* do-while
* break / continue

---

# 📌 8. Strings

* Immutable
* Stored in String pool

```
s1 == s2      → memory compare
s1.equals()   → content compare
```

### Important Methods

* substring()
* replace()
* split()
* trim()
* toUpperCase()

---

# 📌 9. StringBuilder vs String

| Feature | String | StringBuilder |
| ------- | ------ | ------------- |
| Mutable | ❌      | ✅             |
| Fast    | ❌      | ✅             |

---

# 📌 10. Arrays

```
int[] arr = {1,2,3};
arr.length
```

2D:

```
int[][] mat = {{1,2},{3,4}};
```

---

# 📌 11. ArrayList

Dynamic array.

Methods:

* add()
* get()
* set()
* remove()
* size()

---

# 📌 12. OOP Concepts (Most Important)

## 4 Pillars

### Encapsulation

* Data hiding using private variables

### Inheritance

```
class Child extends Parent
```

### Polymorphism

* Overloading (compile time)
* Overriding (runtime)

### Abstraction

* Abstract classes
* Interfaces

---

# 📌 13. Class & Object

```
Car c = new Car();
```

Variables:

* Instance
* Static
* Local

---

# 📌 14. Constructor

* Same name as class
* No return type

---

# 📌 15. this vs super

* this → current object
* super → parent class

---

# 📌 16. Method Overloading vs Overriding

| Feature | Overloading | Overriding   |
| ------- | ----------- | ------------ |
| Time    | Compile     | Runtime      |
| Class   | Same        | Parent-Child |

---

# 📌 17. final vs finally vs finalize

* final → constant / cannot override
* finally → always executes
* finalize() → before GC

---

# 📌 18. Access Modifiers

| Modifier  | Same Class | Same Package | Subclass | Everywhere |
| --------- | ---------- | ------------ | -------- | ---------- |
| private   | ✅          | ❌            | ❌        | ❌          |
| default   | ✅          | ✅            | ❌        | ❌          |
| protected | ✅          | ✅            | ✅        | ❌          |
| public    | ✅          | ✅            | ✅        | ✅          |

---

# 📌 19. Interface vs Abstract Class

| Feature              | Interface        | Abstract |
| -------------------- | ---------------- | -------- |
| Multiple inheritance | ✅                | ❌        |
| Methods              | Abstract/default | Both     |

---

# 📌 20. Collections Framework

```
Collection
 ├── List
 ├── Set
 └── Queue
Map (separate)
```

### List

* ArrayList
* LinkedList

### Set

* HashSet
* TreeSet

### Map

* HashMap
* TreeMap

---

# 📌 21. equals() vs hashCode()

Used in:

* HashMap
* HashSet

Must override both together.

---

# 📌 22. Comparable vs Comparator

Sorting objects.

* Comparable → natural order
* Comparator → custom order

---

# 📌 23. Exception Handling

Hierarchy:

```
Throwable
 ├── Exception
 └── Error
```

### Types

* Checked
* Unchecked

```
try { }
catch { }
finally { }
```

---

# 📌 24. Multithreading

Ways:

* Extend Thread
* Implement Runnable

### Lifecycle

NEW → RUNNABLE → RUNNING → WAITING → TERMINATED

---

# 📌 25. Synchronization

Prevents race condition.

```
synchronized void method(){}
```

Problems:

* Deadlock
* Starvation

---

# 📌 26. I/O Streams

Byte:

* InputStream
* OutputStream

Character:

* Reader
* Writer

---

# 📌 27. Serialization

Convert object → file/network.

```
implements Serializable
```

---

# 📌 28. Packages

Organize classes.

```
com.company.project
```

---

# 📌 29. Generics

Type safety.

```
class Box<T>
```

---

# 📌 30. Reflection

Access class details at runtime.

---

# 📌 31. Java 8 Features (VERY IMPORTANT)

## Lambda

```
(a,b) -> a+b
```

## Functional Interfaces

* Predicate
* Consumer
* Supplier
* Function

## Stream API

```
list.stream()
    .filter()
    .map()
    .forEach()
```

---

# 📌 32. Optional Class

Avoid NullPointerException.

```
Optional<String>
```

---

# 📌 33. Date & Time API

* LocalDate
* LocalTime
* LocalDateTime

---

# 📌 34. JDBC Basics

Steps:

1. Load driver
2. Create connection
3. Execute query
4. Close connection

---

# 📌 35. Design Principles

* SOLID
* DRY
* KISS

---

# 📌 36. Design Patterns (Must Know)

* Singleton
* Factory
* Builder
* Observer

---

# 📌 37. Enum

```
enum Status { ACTIVE, INACTIVE }
```

---

# 📌 38. Marker Interfaces

* Serializable
* Cloneable

---

# 📌 39. Cloning

* Shallow copy
* Deep copy

---

# 📌 40. Memory Management

Stack:

* Local variables
* Method calls

Heap:

* Objects

# ☕ Java Versions Explained 

This section covers the evolution of Java versions — a very common interview topic, especially questions like:

* What is new in Java 8?
* Difference between Java 8 vs 11 vs 17?
* Which Java version is most used in industry?

---

# 📅 Java Version Timeline (Important Ones Only)

| Version    | Year      | Importance                    |
| ---------- | --------- | ----------------------------- |
| Java 1.0   | 1996      | First release                 |
| Java 5     | 2004      | Major language upgrade        |
| Java 6     | 2006      | Performance improvements      |
| Java 7     | 2011      | Small feature additions       |
| ⭐ Java 8   | 2014      | Most important version        |
| Java 9     | 2017      | Module system                 |
| Java 10    | 2018      | Local variable type inference |
| ⭐ Java 11  | 2018      | LTS (widely used)             |
| Java 12–15 | 2019–2020 | Experimental features         |
| ⭐ Java 17  | 2021      | LTS (modern standard)         |
| Java 21    | 2023      | Latest LTS                    |
| Java 20    | 2023      | Short-term release            |

⭐ = Most asked in interviews

---

# 🧠 What is LTS?

LTS = Long Term Support

* Stable version
* Used by companies
* Gets long-term security updates

Most used LTS versions:

* Java 8
* Java 11
* Java 17
* Java 21

---

# 🚀 Java 5 (2004) – Major Upgrade

Introduced:

* Generics
* Autoboxing / Unboxing
* Enum
* Enhanced for-each loop
* Varargs
* Annotations

Example:

```
List<Integer> list = new ArrayList<>();
```

---

# 🚀 Java 7 (2011)

Introduced:

* Try-with-resources
* Diamond operator
* String in switch
* Multi-catch exceptions

Example:

```
try (FileReader fr = new FileReader("a.txt")) {
}
```

---

# 🚀 Java 8 (MOST IMPORTANT – MUST KNOW)

Biggest revolution in Java history.

### Introduced:

## 1️⃣ Lambda Expressions

```
(a,b) -> a+b
```

## 2️⃣ Stream API

```
list.stream()
    .filter(x -> x > 5)
    .forEach(System.out::println);
```

## 3️⃣ Functional Interfaces

* Predicate
* Consumer
* Supplier
* Function

## 4️⃣ Default Methods in Interfaces

Interfaces can now have method bodies.

## 5️⃣ Optional Class

Avoid NullPointerException.

## 6️⃣ Date & Time API

* LocalDate
* LocalDateTime
* Instant

---

# 🚀 Java 9 (2017)

Introduced:

## Module System (JPMS)

* Divide big applications into modules

## Other Features:

* JShell (interactive Java shell)
* Private methods in interfaces

---

# 🚀 Java 10 (2018)

Introduced:

## var Keyword

Local variable type inference.

```
var name = "Java";
```

---

# 🚀 Java 11 (LTS – VERY IMPORTANT)

Most used in enterprise projects.

### Added:

* String methods:

  * isBlank()
  * lines()
  * repeat()

* New HTTP Client API

```
HttpClient client = HttpClient.newHttpClient();
```

---

# 🚀 Java 14

Introduced:

## Switch Expressions

Cleaner switch syntax.

---

# 🚀 Java 15

Introduced:

## Text Blocks

Multi-line strings.

```
String json = """
{
  "name": "Java"
}
""";
```

---

# 🚀 Java 16

Introduced:

## Records

Auto-generate:

* getters
* constructor
* equals
* toString

```
record Person(String name, int age) {}
```

---

# 🚀 Java 17 (LTS – MODERN INDUSTRY STANDARD)

Important features:

## Sealed Classes

Control which classes can extend.

```
sealed class Shape permits Circle, Square {}
```

## Pattern Matching (instanceof improved)

```
if (obj instanceof String s) {
    System.out.println(s.length());
}
```

---

# 🚀 Java 19–21 (Modern Enhancements)

## Virtual Threads (Java 21)

Huge for scalability.

## Performance improvements

## Security upgrades

---

# 🏢 Which Java Versions Companies Use?

Most common in real projects:

1. Java 8 (still huge usage)
2. Java 11 (enterprise standard)
3. Java 17 (modern enterprise)
4. Java 21 (new LTS)

---

### Q1: Why is Java 8 important?

Because it introduced:

* Lambda
* Streams
* Functional programming

### Q2: Difference between Java 8 & 11?

Java 11:

* New HTTP client
* More string methods
* Better performance

### Q3: What is var in Java 10?

Local variable type inference.

---

# 🧾 Simple Way to Remember

* Java 5 → Generics
* Java 7 → Try-with-resources
* Java 8 → Lambda + Streams ⭐
* Java 9 → Modules
* Java 10 → var
* Java 11 → LTS
* Java 17 → Sealed classes + LTS
* Java 21 → Virtual threads

---

# ☕ Additional Java Notes

This section adds the remaining important Java concepts that are commonly used but are often missed in core notes.

---

# 📌 41. ClassLoader (JVM Deep Concept)

ClassLoader loads `.class` files into memory.

### Types of ClassLoaders

1. Bootstrap ClassLoader

   * Loads core Java classes (java.lang.*)

2. Extension ClassLoader

   * Loads classes from `ext` folder

3. Application ClassLoader

   * Loads classes from classpath

### Flow:

```
Bootstrap → Extension → Application
```

---

# 📌 42. Java Memory Model (JMM)

Defines how threads interact with memory.

Concepts:

* Heap shared between threads
* Stack is thread-specific
* Visibility problem in multithreading

Keywords:

* volatile → ensures visibility
* synchronized → ensures atomicity + visibility

---

# 📌 43. volatile Keyword

Used in multithreading.

Purpose:

* Ensures variable updates are visible across threads.
* Prevents caching issues.

```
volatile boolean flag = true;
```

---

# 📌 44. transient Keyword

Used in serialization.

* transient variables are NOT saved during serialization.

```
transient int password;
```

---

# 📌 45. static Keyword (Deep Understanding)

Used for:

* Variables
* Methods
* Blocks
* Nested classes

### Static Variable

* Shared across all objects.

### Static Method

* Can be called without object.

```
ClassName.methodName();
```

### Static Block

* Runs once when class loads.

---

# 📌 46. Immutable Class

A class whose objects cannot be modified.

Example: String

How to make class immutable:

* Make class final
* Make fields private
* No setters
* Initialize via constructor

---

# 📌 47. Shallow Copy vs Deep Copy

### Shallow Copy

* Copies references
* Changes affect original

### Deep Copy

* Copies actual objects
* Independent copies

---

# 📌 48. Thread Communication

Methods:

* wait()
* notify()
* notifyAll()

Used for:

* Producer–Consumer problem

---

# 📌 49. Executor Framework (Important)

Better way to manage threads.

```
ExecutorService ex = Executors.newFixedThreadPool(3);
ex.submit(() -> System.out.println("Task"));
ex.shutdown();
```

Advantages:

* Thread pooling
* Better performance
* Easy management

---

# 📌 50. Concurrent Collections

Thread-safe collections:

* ConcurrentHashMap
* CopyOnWriteArrayList
* BlockingQueue

Used in multithreading applications.

---

# 📌 51. NIO (New Input Output)

Faster file handling.

Packages:

* java.nio.file
* java.nio.channels

Key Classes:

* Path
* Files
* Buffer
* Channel

---

# 📌 52. File Class (Important)

Used for file operations.

```
File f = new File("test.txt");
f.createNewFile();
f.exists();
f.delete();
```

---

# 📌 53. Annotations (Deep Understanding)

Metadata for classes/methods.

Built-in:

* @Override
* @Deprecated
* @SuppressWarnings

Custom Annotation:

```
@interface MyAnnotation {}
```

---

# 📌 54. Marker Interfaces

Interfaces with no methods.

Examples:

* Serializable
* Cloneable
* RandomAccess

Purpose:

* Provide special behavior to JVM.

---

# 📌 55. Reflection API (Advanced)

Access private data at runtime.

Uses:

* Frameworks (Spring, Hibernate)
* Dynamic object creation

```
Class c = Class.forName("Student");
```

---

# 📌 56. Security in Java

Key features:

* Bytecode verification
* ClassLoader security
* Sandboxing

Packages:

* java.security
* javax.crypto

---

# 📌 57. JVM Performance Tuning (Basic Knowledge)

Concepts:

* Heap size tuning
* GC tuning
* Thread tuning

Common JVM Options:

```
-Xms256m
-Xmx1024m
```

---

# 📌 58. Build Tools (Industry Use)

Not core Java but important.

### Maven

* Dependency management
* Project build automation

### Gradle

* Faster than Maven
* Used in modern projects

---

# 📌 59. Logging (Very Important in Real Projects)

Libraries:

* Log4j
* SLF4J
* java.util.logging

Example:

```
logger.info("Application started");
```

---

# 📌 60. Unit Testing (Common Interview Topic)

Frameworks:

* JUnit
* Mockito

Purpose:

* Test methods automatically

---

# 📌 61. Java Modules (Java 9)

```
module my.app {
    requires java.sql;
}
```

Benefits:

* Better structure
* Security
* Faster startup

---

# 📌 62. Functional Programming in Java

Concepts:

* Lambda
* Streams
* Method references

```
list.forEach(System.out::println);
```

---

# 📌 63. Method References

Shorter lambda form.

Types:

* Static method reference
* Instance method reference
* Constructor reference

```
System.out::println
```

---

# 📌 64. Parallel Streams

Used for faster processing.

```
list.parallelStream().forEach(System.out::println);
```

---

# 📌 65. Java vs C++ (Interview Classic)

| Feature              | Java                 | C++                |
| -------------------- | -------------------- | ------------------ |
| Platform             | Platform independent | Platform dependent |
| Memory               | Automatic GC         | Manual             |
| Multiple inheritance | Interfaces only      | Supported          |

---

# 📌 66. Stack vs Heap (Must Know)

Stack:

* Local variables
* Fast
* Thread-specific

Heap:

* Objects
* Shared
* GC managed

---

# 📌 67. Common Java Traps

Know differences:

* == vs equals()
* String vs StringBuilder
* ArrayList vs LinkedList
* HashMap vs ConcurrentHashMap
* Overloading vs Overriding

---

# 📌 68. Final Checklist

Make sure you are strong in:

* OOP concepts
* JVM internals
* Collections
* Multithreading
* Exception handling
* Java 8 features
* Memory management
* Strings
* HashMap internal working
* Synchronization

---
# ☕ Final Missing Java Topics (Ultra-Advanced)

These are the last concepts after Core + Advanced Java.
Mostly asked in senior interviews or product companies.

---

# 📌 69. HashMap Internal Working (VERY IMPORTANT)

Most asked Java interview question.

## How HashMap Works Internally

Steps:

1. Key → hashCode()
2. Hash → index calculation
3. Stored in bucket
4. If collision → LinkedList / Tree

### Java 8 Optimization

* LinkedList → converted to Red-Black Tree if many collisions

### Important Points

* Not thread-safe
* Allows one null key
* Multiple null values allowed

---

# 📌 70. ConcurrentHashMap vs HashMap

| Feature        | HashMap | ConcurrentHashMap |
| -------------- | ------- | ----------------- |
| Thread safe    | ❌       | ✅                 |
| Performance    | Fast    | Moderate          |
| Null key/value | Allowed | NOT allowed       |

---

# 📌 71. Fail-Fast vs Fail-Safe Iterators

## Fail-Fast

* Throws ConcurrentModificationException
* Example:

  * ArrayList
  * HashMap

## Fail-Safe

* Works on copy
* No exception
* Example:

  * ConcurrentHashMap
  * CopyOnWriteArrayList

---

# 📌 72. Deadlock (Very Important)

When two threads wait for each other forever.

Example:
Thread 1 → needs Lock A
Thread 2 → needs Lock B

Both stuck.

### Prevention:

* Lock ordering
* Timeout locks
* Avoid nested locks

---

# 📌 73. Starvation

A thread never gets CPU time.

Cause:

* High priority threads dominating

---

# 📌 74. Livelock

Threads keep responding to each other but do no work.

---

# 📌 75. Thread Pools (Deep Level)

Types:

* FixedThreadPool
* CachedThreadPool
* SingleThreadExecutor
* ScheduledThreadPool

---

# 📌 76. Callable vs Runnable

| Feature      | Runnable | Callable |
| ------------ | -------- | -------- |
| Return value | ❌        | ✅        |
| Exception    | ❌        | ✅        |
| Method       | run()    | call()   |

---

# 📌 77. Future Interface

Used to get result from thread.

```
Future<Integer> f = executor.submit(task);
f.get();
```

---

# 📌 78. Fork/Join Framework

Used for:

* Parallel processing
* Big computations

---

# 📌 79. WeakHashMap

Special Map:

* Keys auto removed when no reference exists
* Used in caching

---

# 📌 80. IdentityHashMap

Compares keys using:

```
== instead of equals()
```

---

# 📌 81. LinkedHashMap

Maintains:

* Insertion order

---

# 📌 82. TreeMap Internal

* Based on Red-Black Tree
* Sorted keys
* O(log n)

---

# 📌 83. Comparator Chain

Multi-field sorting.

Example:

* Sort by name
* Then by age

---

# 📌 84. Java Bean

A class with:

* Private fields
* Public getters/setters
* No-arg constructor

Used in:

* Spring
* Hibernate

---

# 📌 85. POJO Class

Plain Old Java Object.

Just a simple class:

* No restrictions
* No framework dependency

---

# 📌 86. DTO (Data Transfer Object)

Used to transfer data between layers.

---

# 📌 87. Serialization Deep Concepts

Concepts:

* serialVersionUID
* transient fields
* Externalizable interface

---

# 📌 88. Class vs Object Memory Allocation

Object created in:

* Heap

Reference stored in:

* Stack

---

# 📌 89. Method Area vs Metaspace

Java 8 change:

* PermGen → Removed
* Metaspace → Introduced

---

# 📌 90. Native Methods

Methods written in:

* C
* C++

Used via:

* JNI (Java Native Interface)

---

# 📌 91. JNI (Java Native Interface)

Allows Java to call:

* C/C++ code

---

# 📌 92. JIT Compiler

Inside JVM.

Converts:

* Bytecode → Native code at runtime

Improves performance.

---

# 📌 93. HotSpot JVM

Most used JVM implementation.

Features:

* Adaptive optimization
* JIT compilation

---

# 📌 94. Escape Analysis

Optimization by JVM.

If object used only inside method:

* Allocated in stack
* Faster execution

---

# 📌 95. Constant Pool

Stored in Method Area.

Contains:

* String literals
* Class metadata
* Method references

---

# 📌 96. String Pool

Special memory for strings.

```
String s1 = "Java";
String s2 = "Java";
```

Both point to same memory.

---

# 📌 97. JVM Languages

Languages running on JVM:

* Kotlin
* Scala
* Groovy

---

# 📌 98. Java Coding Best Practices

* Prefer immutability
* Use interfaces
* Avoid deep inheritance
* Use composition over inheritance

---

# 📌 99. SOLID Principles (Senior-Level Must)

* S → Single Responsibility
* O → Open/Closed
* L → Liskov Substitution
* I → Interface Segregation
* D → Dependency Injection

---

# 📌 Master Topics

If you know these well, you're strong in Java:

* OOP
* Collections deep internals
* JVM memory
* Multithreading
* Java 8+
* HashMap internal working
* Synchronization
* GC basics
* Design principles

---

