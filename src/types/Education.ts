/**
 * Elemento de educación (grado académico)
 */
export interface Grade {
  id: number | string;
  company: string;
  career: string;
  year: number;
}

/**
 * Elemento de certificación
 */
export interface Certification {
  id: number | string;
  company: string;
  certification: string;
  link: string;
}