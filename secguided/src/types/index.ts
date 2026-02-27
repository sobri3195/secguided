export interface Course {
  id: string;
  title: string;
  description: string;
  threads: number;
  messages: number;
  lastUpdated: string;
  category: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  threads: number;
  messages: number;
}

export interface CommunitySpace {
  id: string;
  title: string;
  description: string;
  threads: number;
  messages: number;
  latestPost: string;
  latestAuthor: string;
  latestTime: string;
}

export interface RecentPost {
  id: string;
  title: string;
  author: string;
  time: string;
  category: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  updated: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}
