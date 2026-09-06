export const userProfile = {
  name: "Sarwvidya",
  handle: "codewithsarvy",
  role: "Full-Stack Java & React Developer",
  bio: "Hi! I'm Sarwvidya. I build scalable backend microservices with Java & Spring Boot, create sleek responsive frontends with React, and curate clean notes for lifelong engineering learners. Welcome to my personal vault.",
  github: "https://github.com/sarwvidya",
  linkedin: "https://www.linkedin.com/in/sarwvidya",
  tags: ["Java 21", "Spring Boot", "React 19", "Kafka", "PostgreSQL", "System Design", "Docker"]
};

export const learningTopics = [
  {
    id: "core-java",
    title: "Core Java",
    color: "#f59e0b",
    tag: "Backend Core",
    chaptersCount: "7 chapters",
    description: "OOPs architecture, JVM internals, JMM, Strings, Exceptions, Collections, Multithreading & GC.",
    graphic: "java",
    docCategory: "/docs/core-java/oops-concepts",
    chapters: [
      {
        id: "ch1-oops",
        title: "Chapter 1: OOPs Concepts",
        docPath: "/docs/core-java/oops-concepts"
      },
      {
        id: "ch2-overview",
        title: "Chapter 2: Java Overview",
        docPath: "/docs/core-java/java-overview"
      },
      {
        id: "ch3-optional-jmm",
        title: "Chapter 3: Optional, Object & JMM",
        docPath: "/docs/core-java/optional-object-jmm"
      },
      {
        id: "ch4-strings",
        title: "Chapter 4: Strings in Java",
        docPath: "/docs/core-java/strings"
      },
      {
        id: "ch5-exceptions",
        title: "Chapter 5: Exception Handling",
        docPath: "/docs/core-java/exception-handling"
      },
      {
        id: "ch6-collections-threads",
        title: "Chapter 6: Collections & Multithreading",
        docPath: "/docs/core-java/collections-and-multithreading"
      },
      {
        id: "ch7-gc-serialization",
        title: "Chapter 7: GC & Serialization",
        docPath: "/docs/core-java/garbage-collection-and-serialization"
      }
    ]
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    color: "#6366f1",
    tag: "Core CS",
    chaptersCount: "1 chapter",
    description: "Algorithmic patterns, Big-O complexity, and space/time analysis.",
    graphic: "dsa",
    docCategory: "/docs/category/data-structures--algorithms",
    chapters: [
      {
        id: "complexity",
        title: "Time & Space Complexity (Big-O)",
        docPath: "/docs/dsa/time-space-complexity"
      }
    ]
  },
  {
    id: "spring-boot",
    title: "Spring Boot & Microservices",
    color: "#10b981",
    tag: "Enterprise",
    chaptersCount: "1 chapter",
    description: "Inversion of Control, Dependency Injection, and enterprise patterns.",
    graphic: "spring",
    docCategory: "/docs/category/spring-boot--microservices",
    chapters: [
      {
        id: "spring-core",
        title: "Spring Core & Inversion of Control",
        docPath: "/docs/spring-boot/spring-core-ioc"
      }
    ]
  },
  {
    id: "react-js",
    title: "React.js & Frontend",
    color: "#06b6d4",
    tag: "Modern UI",
    chaptersCount: "2 chapters",
    description: "JavaScript fundamentals, core React engine mechanics, and modern UI architecture.",
    graphic: "react",
    docCategory: "/docs/category/reactjs--frontend",
    chapters: [
      {
        id: "js-fundamentals",
        title: "Chapter 1: JavaScript Fundamentals",
        docPath: "/docs/react/javascript-fundamentals"
      },
      {
        id: "react-fundamentals",
        title: "Chapter 2: React Fundamentals",
        docPath: "/docs/react/react-fundamentals"
      }
    ]
  },
  {
    id: "system-design",
    title: "System Design & Databases",
    color: "#a855f7",
    tag: "Architecture",
    chaptersCount: "1 chapter",
    description: "Database B-Tree indexing, query optimization, and execution plans.",
    graphic: "system-design",
    docCategory: "/docs/category/system-design--databases",
    chapters: [
      {
        id: "sql-indexing",
        title: "Relational DBs & B-Tree Indexing",
        docPath: "/docs/system-design/sql-indexing"
      }
    ]
  },
  {
    id: "devops-tools",
    title: "DevOps & Tools",
    color: "#f43f5e",
    tag: "DevOps",
    chaptersCount: "1 chapter",
    description: "Git branching workflows, interactive rebasing, and recovery commands.",
    graphic: "devops",
    docCategory: "/docs/category/devops--tools",
    chapters: [
      {
        id: "git",
        title: "Git Workflows & Rebasing",
        docPath: "/docs/devops/git-workflows"
      }
    ]
  }
];

export const featuredProjects = [];
