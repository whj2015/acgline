export interface NavItem {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  year: string;
}