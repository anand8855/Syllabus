export interface SubTopic {
  name: string;
}

export interface Topic {
  name: string;
  subTopics?: SubTopic[];
}

export interface Section {
  id: number;
  title: string;
  difficulty: 'basic' | 'intermediate' | 'advanced' | '';
  topics: Topic[];
  isCollapsed?: boolean;
}

export interface SubtopicContent {
  name: string;
  overview: string;
  sections: ContentSection[];
  codeExamples?: CodeExample[];
  images?: ImageReference[];
  keyPoints?: string[];
  references?: string[];
  interviewQA?: InterviewQuestion[];
}

export interface ContentSection {
  title: string;
  content: string;
  subsections?: { title: string; content: string }[];
}

export interface CodeExample {
  title: string;
  description?: string;
  code: string;
  language: string;
}

export interface ImageReference {
  url: string;
  alt: string;
  caption?: string;
}

export interface InterviewQuestion {
  question: string;
  answer: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  tags?: string[];
}
