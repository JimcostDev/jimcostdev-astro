
/** Datos de perfil obtenidos del endpoint "/perfil" */
export interface Profile {
  id: number | string;
  rol: string;
  description: string;
  skills: string[];
  username: string;
  avatar: string;
}

/** Información de contacto obtenida del endpoint "/contact" */
export interface Contact {
  id: number | string;
  nationality: string;
  i_live_in: string;
}

/**
 * Perfil extendido con años de experiencia y datos de contacto
 * para mostrar en la sección About
 */
export interface AboutProfile extends Profile {
  totalYears: number;
  nationality: string;
  iLiveIn: string;
}
