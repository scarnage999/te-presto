export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface AppInfo {
  name: string;
  tagline: string;
  description: string;
  downloadUrl: string;
  version: string;
}