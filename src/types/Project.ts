/**
 * Elemento de un proyecto
 */
export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  stack: string[];
  link: string;
}