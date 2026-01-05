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
