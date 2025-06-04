/**
 * Elemento de experiencia laboral
 */
export interface Experience {
  id: number | string;
  rol: string;
  company: string;
  location: string;
  activities: string;
  initial_date: string;      // fecha de inicio en formato YYYY-MM-DD
  end_date: string | null;   // fecha de fin o null si sigue activo
  duration: string;          // duración legible, e.g. "2 años y 7 meses"
}