/**
 * Elemento de un proyecto
 */
export interface Project {
  id: number | string;
  image: string;
  title: string;
  description: string;
  stack: string[];
  link: string;
}