import { Course, CommunitySpace, RecentPost, Resource, Topic, NavItem, FooterLink } from '../types';

export const navItems: NavItem[] = [
  { label: 'Forums', href: '#forums' },
  { label: "What's New", href: '#news' },
  { label: 'Downloads', href: '#downloads' },
  { label: 'Tutorials', href: '#tutorials' },
  { label: 'Guides', href: '#guides' },
  { label: 'Anticheat', href: '#anticheat' },
  { label: 'Info', href: '#info' },
];

export const footerLinks: FooterLink[] = [
  { label: 'Contact', href: '#contact' },
  { label: 'Terms', href: '#terms' },
  { label: 'Privacy', href: '#privacy' },
];

export const courses: Course[] = [
  {
    id: 'course-1',
    title: 'Reverse Engineering Master Path',
    description: 'A comprehensive learning path from fundamentals to advanced reverse engineering techniques and lab practices.',
    threads: 342,
    messages: 2156,
    lastUpdated: '2026-01-15',
    category: 'Reverse Engineering',
  },
  {
    id: 'course-2',
    title: 'CS Foundations 420',
    description: 'Memory, data types, and assembly fundamentals essential for security research and reverse engineering.',
    threads: 189,
    messages: 1243,
    lastUpdated: '2026-01-10',
    category: 'Foundations',
  },
  {
    id: 'course-3',
    title: 'Exploit Development Essentials',
    description: 'Understanding exploitation concepts in controlled lab environments with safe and educational practices.',
    threads: 156,
    messages: 987,
    lastUpdated: '2026-01-08',
    category: 'Exploitation',
  },
  {
    id: 'course-4',
    title: 'Instrumentation & Debug Tooling',
    description: 'Master debugger workflows, tracers, and profiling tools for security analysis and research.',
    threads: 98,
    messages: 654,
    lastUpdated: '2026-01-05',
    category: 'Tooling',
  },
  {
    id: 'course-5',
    title: 'Python Security Automation',
    description: 'Automate security analysis workflows with Python: fuzzing, patching, and binary instrumentation.',
    threads: 234,
    messages: 1567,
    lastUpdated: '2026-01-12',
    category: 'Automation',
  },
  {
    id: 'course-6',
    title: 'Web Security Basics',
    description: 'Client-side debugging, secure coding principles, and common web vulnerability patterns.',
    threads: 167,
    messages: 1123,
    lastUpdated: '2026-01-07',
    category: 'Web Security',
  },
];

export const topics: Topic[] = [
  {
    id: 'topic-1',
    title: 'Malware Analysis',
    description: 'Static and dynamic analysis techniques, sandbox environments, and behavioral analysis.',
    threads: 234,
    messages: 1567,
  },
  {
    id: 'topic-2',
    title: 'Penetration Testing',
    description: 'Security assessment methodologies, tools, and reporting for authorized testing.',
    threads: 189,
    messages: 1234,
  },
  {
    id: 'topic-3',
    title: 'Security Fundamentals',
    description: 'Core security concepts, cryptography basics, and secure architecture principles.',
    threads: 312,
    messages: 2103,
  },
  {
    id: 'topic-4',
    title: 'Reverse Engineering',
    description: 'Binary analysis, code reconstruction, and understanding program behavior.',
    threads: 278,
    messages: 1876,
  },
  {
    id: 'topic-5',
    title: 'Defensive Engineering & Secure Coding',
    description: 'Building secure systems, vulnerability mitigation, and defense-in-depth strategies.',
    threads: 145,
    messages: 987,
  },
  {
    id: 'topic-6',
    title: 'Debugging / Profiling / Tooling',
    description: 'Advanced debugging techniques, performance profiling, and custom tool development.',
    threads: 167,
    messages: 1123,
  },
];

export const communitySpaces: CommunitySpace[] = [
  {
    id: 'space-1',
    title: 'SecGuided Meta',
    description: 'Discussion about the platform, community guidelines, and announcements.',
    threads: 45,
    messages: 234,
    latestPost: 'Platform updates for Q1 2026',
    latestAuthor: 'Admin',
    latestTime: '2 hours ago',
  },
  {
    id: 'space-2',
    title: 'General Chat',
    description: 'Off-topic discussions and community introductions.',
    threads: 567,
    messages: 3456,
    latestPost: 'What are you working on this week?',
    latestAuthor: 'SecurityEnthusiast',
    latestTime: '15 minutes ago',
  },
  {
    id: 'space-3',
    title: 'Security News',
    description: 'Latest security research, vulnerabilities, and industry developments.',
    threads: 234,
    messages: 1567,
    latestPost: 'New paper on binary diffing techniques',
    latestAuthor: 'ResearchLead',
    latestTime: '4 hours ago',
  },
  {
    id: 'space-4',
    title: 'Q&A Help Desk',
    description: 'Get help with security concepts, tools, and learning paths.',
    threads: 456,
    messages: 2876,
    latestPost: 'Question about dynamic instrumentation',
    latestAuthor: 'NewLearner42',
    latestTime: '30 minutes ago',
  },
  {
    id: 'space-5',
    title: 'Common Issues & Fixes',
    description: 'Troubleshooting guides and solutions for common problems.',
    threads: 123,
    messages: 654,
    latestPost: 'Debugger crash on Windows 11',
    latestAuthor: 'ToolMaster',
    latestTime: '1 hour ago',
  },
];

export const recentPosts: RecentPost[] = [
  {
    id: 'post-1',
    title: 'Building a Practical RE Workflow',
    author: 'BinaryNinjaUser',
    time: '3 hours ago',
    category: 'Reverse Engineering',
  },
  {
    id: 'post-2',
    title: 'Intro to Windows Heap Concepts',
    author: 'HeapExpert',
    time: '5 hours ago',
    category: 'Memory',
  },
  {
    id: 'post-3',
    title: 'Debugging Traps You\'ll See Often',
    author: 'DebuggerFan',
    time: '8 hours ago',
    category: 'Debugging',
  },
  {
    id: 'post-4',
    title: 'User-mode vs Kernel: Conceptual Tradeoffs',
    author: 'KernelDev',
    time: '12 hours ago',
    category: 'Architecture',
  },
];

export const resources: Resource[] = [
  {
    id: 'res-1',
    title: 'Memory Scanner Demo (Educational)',
    description: 'A simple memory scanner implementation for learning binary analysis concepts.',
    updated: '2026-01-18',
    category: 'Tool',
  },
  {
    id: 'res-2',
    title: 'ImGui UI Starter Template',
    description: 'Quick-start template for building analysis tools with ImGui.',
    updated: '2026-01-15',
    category: 'Template',
  },
  {
    id: 'res-3',
    title: 'Binary Parsing Cheatsheet',
    description: 'Quick reference for common binary formats and parsing patterns.',
    updated: '2026-01-12',
    category: 'Reference',
  },
  {
    id: 'res-4',
    title: 'Debug Checklist for Analysts',
    description: 'Systematic approach to debugging and analysis workflows.',
    updated: '2026-01-10',
    category: 'Guide',
  },
];
