// utils/dateUtils.ts
export interface DateFormats {
  full: string;      // "abril 2021"
  short: string;     // "abr 2021"
  numeric: string;   // "04/2021"
}

const MONTHS_FULL = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

const MONTHS_SHORT = [
  'ene', 'feb', 'mar', 'abr', 'may', 'jun',
  'jul', 'ago', 'sep', 'oct', 'nov', 'dic'
];

/**
 * Formatea una fecha en diferentes formatos
 */
export function formatDateMultiple(dateString: string): DateFormats {
  const date = new Date(dateString);
  const month = date.getMonth();
  const year = date.getFullYear();
  
  return {
    full: `${MONTHS_FULL[month]} ${year}`,
    short: `${MONTHS_SHORT[month]} ${year}`,
    numeric: `${String(month + 1).padStart(2, '0')}/${year}`
  };
}

/**
 * Formatea fecha simple (formato completo por defecto)
 */
export function formatDate(dateString: string, format: 'full' | 'short' | 'numeric' = 'full'): string {
  const formats = formatDateMultiple(dateString);
  return formats[format];
}

/**
 * Calcula duración entre dos fechas
 */
export function calculateDuration(startDate: string, endDate: string | null = null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44));
  
  if (diffMonths < 1) {
    return 'Menos de 1 mes';
  }
  
  if (diffMonths < 12) {
    return diffMonths === 1 ? '1 mes' : `${diffMonths} meses`;
  }
  
  const years = Math.floor(diffMonths / 12);
  const remainingMonths = diffMonths % 12;
  
  if (remainingMonths === 0) {
    return years === 1 ? '1 año' : `${years} años`;
  }
  
  const yearText = years === 1 ? '1 año' : `${years} años`;
  const monthText = remainingMonths === 1 ? '1 mes' : `${remainingMonths} meses`;
  return `${yearText} y ${monthText}`;
}

/**
 * Formatea rango de fechas completo
 */
export function formatDateRange(
  startDate: string, 
  endDate: string | null = null, 
  format: 'full' | 'short' | 'numeric' = 'full'
): {
  range: string;
  duration: string;
  startFormatted: string;
  endFormatted: string;
} {
  const startFormatted = formatDate(startDate, format);
  const endFormatted = endDate ? formatDate(endDate, format) : 'actualidad';
  const duration = calculateDuration(startDate, endDate);
  
  return {
    range: `${startFormatted} - ${endFormatted}`,
    duration,
    startFormatted,
    endFormatted
  };
}