export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  additionalImages?: string[];
  technologies: string[];
}
