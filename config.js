/* ============================================================================
 *  CONFIGURACION DEL APLICATIVO  -  Recurrencia 2027 SDIS
 * ============================================================================
 *
 *  Este es el UNICO archivo que necesitas editar despues de publicar.
 *  Pega abajo la URL de tu implementacion de Google Apps Script
 *  (la que termina en /exec).
 *
 * ==========================================================================*/

var CONFIG = {

  // 1) URL de la aplicacion web de Google Apps Script (debe terminar en /exec)
  URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbz3g_izeq6V2QZMjBvA9D7JAn2_XqEVs703sAVNrYDL27JTluf1NbZoKOSVoVbjvUAD/exec',

  // 2) Titulo que se muestra en el encabezado
  TITULO: 'Recurrencia 2027',
  SUBTITULO: 'Subdirección para la Infancia · SDIS',

  // 3) Texto de la pantalla de inicio
  INTRO: 'Este formulario permite revisar si las niñas y los niños que hoy se ' +
         'encuentran en el servicio desean continuar en 2027 en el nivel que ' +
         'les corresponde por su edad.',

  // 4) Opciones del desplegable "HARÁ TRÁNSITO A"
  OPCIONES_TRANSITO: [
    '1. Colegio Sed.',
    '2. Opción Privada',
    '3. Traslado a otro lugar del país',
    '4. Jardín SDIS'
  ],

  // 5) Texto de la opcion que abre los desplegables de tránsito a otro jardín
  OPCION_JARDIN_SDIS: '4. Jardín SDIS',

  // 6) Ruta del índice de datos (no cambiar salvo que muevas la carpeta /data)
  RUTA_INDICE: 'data/index.json',

  // 7) Minimo de letras exigido en el nombre de quien diligencia
  MIN_LETRAS_NOMBRE: 5,

  // 8) Segundos de espera maxima al enviar al servidor
  TIMEOUT_ENVIO_SEG: 60
};
