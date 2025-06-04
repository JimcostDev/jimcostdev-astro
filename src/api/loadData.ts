// src/api/loadData.ts
export async function cargarDatos<T>(
  endpoint: string,
  suffix?: string
): Promise<T | null> {
  // user "hardcodeado" (puedes extraerlo luego a una constante o variable de entorno)
  const user = 'jimcostdev';

  // URL de producción (Koyeb)
  const urlAPI = `https://jimcostdev.koyeb.app/${endpoint}/p/${user}${
    suffix ? `/${suffix}` : ''
  }`;

  // URL de desarrollo (localhost)
  const urlAPIDev = `http://localhost:8000/${endpoint}/p/${user}${
    suffix ? `/${suffix}` : ''
  }`;

  try {
    const response = await fetch(urlAPI);
    if (!response.ok) {
      throw new Error(
        `Error al obtener datos de la API en endpoint "${endpoint}${
          suffix ? `/${suffix}` : ''
        }": ${response.status} ${response.statusText}`
      );
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error('[cargarDatos]', error);
    return null;
  }
}
