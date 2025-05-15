export async function cargarDatos<T>(endpoint: string): Promise<T | null> {
  const urlAPI = `https://jimcostdev.koyeb.app/${endpoint}/jimcostdev`;

  try {
    const response = await fetch(urlAPI);
    if (!response.ok) {
      throw new Error(
        `Error al obtener datos de la API en endpoint "${endpoint}": ${response.status} ${response.statusText}`
      );
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("[cargarDatos]", error);
    return null;
  }
}
