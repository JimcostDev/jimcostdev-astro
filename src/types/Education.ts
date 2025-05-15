/**
 * Elemento de educación (grado académico)
 */
export interface Grade {
  id: number;
  company: string;
  career: string;
  year: number;
}

/**
 * Elemento de certificación
 */
export interface Certification {
  id: number;
  company: string;
  certification: string;
  link: string;
}