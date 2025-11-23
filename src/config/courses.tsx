/* eslint-disable */

// Course data structure
export interface Lesson {
  id: string;
  title: string;
  duration: number; // in minutes
  content: string; // markdown or HTML content
  completed?: boolean;
}

export interface Chapter {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  image: string;
  duration: number; // total duration in minutes
  chapters: Chapter[];
  isFree: boolean;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All levels';
  studentsEnrolled?: number;
  lastUpdated?: string;
}

export const COURSES_DATA: Course[] = [
  {
    id: 'docker-for-newbs',
    title: 'Docker for Newbs',
    description: 'Welcome to the "Introduction to Docker" course on Typecraft',
    longDescription: 'Docker is an essential tool for modern software development. This course is designed to guide you through the fundamentals of containerization, helping you understand what Docker is, why it matters, and how to use it effectively in your development workflow.',
    category: 'Docker',
    image: '/images/docker-course.jpg',
    duration: 40,
    isFree: true,
    level: 'All levels',
    studentsEnrolled: 246,
    lastUpdated: '4 months ago',
    chapters: [
      {
        id: 'docker-fundamentals',
        title: 'Docker Fundamentals',
        description: 'Learn about docker fundamentals',
        lessons: [
          {
            id: 'what-and-why',
            title: 'What and Why?',
            duration: 5,
            content: `If you're new to containers, you might wonder "why Docker"? After all, we shouldn't just use tools because someone else said so. What exactly are we getting by using Docker?

After all, you may have been slinging code for years, developing on your local machine without issue. You've navigated upgrades to your operating system, your database, your languages, and frameworks, and this has never caused a problem.

Right?`,
            completed: true,
          },
          {
            id: 'installing-docker',
            title: 'Installing Docker',
            duration: 10,
            content: `In this lesson, we'll walk through installing Docker on your system. Docker is available for Windows, macOS, and Linux. We'll cover the installation process for each platform and verify that Docker is working correctly.`,
            completed: true,
          },
          {
            id: 'does-it-work',
            title: 'Does It Work?',
            duration: 5,
            content: `Let's verify that Docker is installed correctly and working on your system. We'll run a simple test to ensure everything is set up properly.`,
            completed: false,
          },
          {
            id: 'images-containers-docker',
            title: 'Images, Containers, and Docker',
            duration: 10,
            content: `Understanding the core concepts of Docker: images, containers, and how they work together. We'll explore the relationship between these concepts and how they enable containerization.`,
            completed: false,
          },
          {
            id: 'first-docker-image',
            title: 'Your Very First Docker Image',
            duration: 10,
            content: `Let's create your first Docker image! We'll start with a simple example and build from there.`,
            completed: false,
          },
        ],
      },
      {
        id: 'advanced-docker-concepts',
        title: 'Advanced Docker Concepts',
        description: 'Dive deeper into Docker',
        lessons: [
          {
            id: 'containerized-postgres',
            title: 'Containerized Postgres',
            duration: 15,
            content: `Learn how to run PostgreSQL in a Docker container. We'll cover database setup, data persistence, and connecting applications to containerized databases.`,
            completed: false,
          },
          {
            id: 'docker-data-storage',
            title: 'Docker data storage',
            duration: 10,
            content: `Understanding Docker volumes and data persistence. Learn how to manage data in Docker containers and ensure your data survives container restarts.`,
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: 'hyprland-for-newbs',
    title: 'Hyprland for Newbs',
    description: 'Welcome to the "Hyprland For Newbs" Series',
    longDescription: 'Learn how to configure and use Hyprland, a modern Wayland compositor for Linux. This course will guide you through installation, configuration, and customization.',
    category: 'Linux',
    image: '/images/hyprland-course.jpg',
    duration: 15,
    isFree: true,
    level: 'Intermediate',
    studentsEnrolled: 89,
    lastUpdated: '2 months ago',
    chapters: [
      {
        id: 'hyprland-basics',
        title: 'Hyprland Basics',
        description: 'Getting started with Hyprland',
        lessons: [
          {
            id: 'introduction-hyprland',
            title: 'Introduction to Hyprland',
            duration: 5,
            content: `Hyprland is a dynamic tiling Wayland compositor that's written in C++. It's designed to be fast, efficient, and highly customizable.`,
            completed: false,
          },
          {
            id: 'installing-hyprland',
            title: 'Installing Hyprland',
            duration: 5,
            content: `Learn how to install Hyprland on your Linux distribution. We'll cover installation methods for different package managers.`,
            completed: false,
          },
          {
            id: 'basic-configuration',
            title: 'Basic Configuration',
            duration: 5,
            content: `Configure Hyprland to suit your workflow. We'll cover window management, keybindings, and basic customization options.`,
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: 'neovim-for-newbs',
    title: 'Neovim for Newbs',
    description: 'Learn how to configure Neovim from Scratch!',
    longDescription: 'Master Neovim, a powerful text editor that can transform your coding workflow. This course covers everything from basic navigation to advanced configuration and plugin management.',
    category: 'Vim',
    image: '/images/neovim-course.jpg',
    duration: 125,
    isFree: true,
    level: 'All levels',
    studentsEnrolled: 512,
    lastUpdated: '1 month ago',
    chapters: [
      {
        id: 'neovim-introduction',
        title: 'Introduction to Neovim',
        description: 'Getting started with Neovim',
        lessons: [
          {
            id: 'what-is-neovim',
            title: 'What is Neovim?',
            duration: 10,
            content: `Neovim is a hyperextensible Vim-based text editor. It's designed to enable new applications without compromising Vim's traditional roles.`,
            completed: false,
          },
          {
            id: 'installing-neovim',
            title: 'Installing Neovim',
            duration: 15,
            content: `Install Neovim on your system. We'll cover installation for Windows, macOS, and Linux.`,
            completed: false,
          },
          {
            id: 'basic-navigation',
            title: 'Basic Navigation',
            duration: 20,
            content: `Learn the fundamental navigation commands in Neovim. Master h, j, k, l movements and understand modal editing.`,
            completed: false,
          },
        ],
      },
      {
        id: 'neovim-configuration',
        title: 'Neovim Configuration',
        description: 'Configure Neovim to your needs',
        lessons: [
          {
            id: 'init-file-basics',
            title: 'init.lua Basics',
            duration: 25,
            content: `Learn how to configure Neovim using init.lua. We'll cover basic settings, key mappings, and plugin management.`,
            completed: false,
          },
          {
            id: 'plugin-management',
            title: 'Plugin Management with Lazy.nvim',
            duration: 30,
            content: `Set up and manage plugins using Lazy.nvim, a modern plugin manager for Neovim.`,
            completed: false,
          },
        ],
      },
      {
        id: 'advanced-neovim',
        title: 'Advanced Neovim',
        description: 'Advanced techniques and workflows',
        lessons: [
          {
            id: 'custom-keybindings',
            title: 'Custom Keybindings',
            duration: 15,
            content: `Create custom keybindings to streamline your workflow. Learn about leader keys and mode-specific mappings.`,
            completed: false,
          },
          {
            id: 'lsp-setup',
            title: 'LSP Setup',
            duration: 20,
            content: `Configure Language Server Protocol (LSP) for code completion, diagnostics, and more.`,
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: 'linux-basics',
    title: 'Linux Basics',
    description: 'Learn the fundamentals of Linux',
    longDescription: 'A comprehensive introduction to Linux for beginners. Learn essential commands, file system navigation, and basic system administration.',
    category: 'Linux',
    image: '/images/linux-course.jpg',
    duration: 60,
    isFree: false,
    level: 'Beginner',
    studentsEnrolled: 178,
    lastUpdated: '3 months ago',
    chapters: [
      {
        id: 'linux-introduction',
        title: 'Linux Introduction',
        description: 'Getting started with Linux',
        lessons: [
          {
            id: 'what-is-linux',
            title: 'What is Linux?',
            duration: 10,
            content: `Linux is an open-source operating system kernel. Learn about its history, philosophy, and why it's widely used.`,
            completed: false,
          },
          {
            id: 'file-system',
            title: 'Linux File System',
            duration: 15,
            content: `Understand the Linux file system hierarchy. Learn about directories like /home, /etc, /var, and more.`,
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: 'vim-essentials',
    title: 'Vim Essentials',
    description: 'Master the Vim text editor',
    longDescription: 'Learn Vim from the ground up. This course covers everything you need to become proficient with Vim.',
    category: 'Vim',
    image: '/images/vim-course.jpg',
    duration: 90,
    isFree: false,
    level: 'Beginner',
    studentsEnrolled: 234,
    lastUpdated: '2 months ago',
    chapters: [
      {
        id: 'vim-basics',
        title: 'Vim Basics',
        description: 'Essential Vim commands',
        lessons: [
          {
            id: 'vim-modes',
            title: 'Understanding Vim Modes',
            duration: 15,
            content: `Vim has multiple modes: Normal, Insert, Visual, and Command-line. Learn when and how to use each mode.`,
            completed: false,
          },
          {
            id: 'basic-editing',
            title: 'Basic Editing Commands',
            duration: 20,
            content: `Master essential editing commands: delete, copy, paste, undo, and redo.`,
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: 'docker-advanced',
    title: 'Docker Advanced',
    description: 'Advanced Docker techniques and best practices',
    longDescription: 'Take your Docker skills to the next level. Learn about Docker Compose, multi-stage builds, networking, and production best practices.',
    category: 'Docker',
    image: '/images/docker-advanced.jpg',
    duration: 120,
    isFree: false,
    level: 'Advanced',
    studentsEnrolled: 156,
    lastUpdated: '1 month ago',
    chapters: [
      {
        id: 'docker-compose',
        title: 'Docker Compose',
        description: 'Orchestrating multi-container applications',
        lessons: [
          {
            id: 'compose-basics',
            title: 'Docker Compose Basics',
            duration: 20,
            content: `Learn how to use Docker Compose to define and run multi-container Docker applications.`,
            completed: false,
          },
        ],
      },
    ],
  },
];

