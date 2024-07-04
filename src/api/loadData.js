export async function cargarDatos(endpoint) {
    const urlAPI = `https://jimcostdev.koyeb.app/${endpoint}/jimcostdev`;
    
    try {
        const response = await fetch(urlAPI);
        if (!response.ok) {
            throw new Error(`No se pudo obtener la respuesta de la API para el endpoint ${endpoint}`);
        }
        const data = await response.json();
        return data; // Devuelve los datos para utilizarlos donde llames a esta función
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return null; // Manejo de errores, puedes retornar algo específico en caso de error
    }
}