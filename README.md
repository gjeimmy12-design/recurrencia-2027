# Recurrencia 2027 · SDIS

Aplicativo móvil para revisar si las niñas y los niños que hoy están en el
servicio desean continuar en 2027 en el nivel que les corresponde por su edad.

Subdirección para la Infancia · Secretaría Distrital de Integración Social · Bogotá D.C.

---

## Cómo está armado

| Parte | Dónde vive | Qué hace |
|---|---|---|
| Frontend | GitHub Pages | Las pantallas que ve quien diligencia |
| Base de niñas y niños | Carpeta `data/` en el mismo repositorio | 40.746 registros, en 17 archivos JSON |
| Backend | Google Apps Script | Recibe los formularios |
| Consolidado | Google Sheets en Drive | Una fila por niña o niño |

No hay usuario ni contraseña: quien abre el enlace entra directo y escribe su
nombre en la pantalla de búsqueda.

---

## Archivos del repositorio

```
index.html                     Las tres pantallas
styles.css                     Estilos (tema institucional azul #0E2A5C)
app.js                         Toda la lógica
config.js                      ÚNICO archivo que se edita después de publicar
data/
  index.json                   Subdirecciones -> jardines -> niveles
  sl/
    slis-bosa.json             Niñas y niños de cada subdirección local
    slis-kennedy.json
    ... (16 archivos en total)
apps-script/
  Codigo.gs                    Se pega en Google Apps Script (NO va en GitHub Pages)
```

---

## Lo único que hay que configurar

En `config.js`, reemplazar:

```js
URL_APPS_SCRIPT: 'PEGA_AQUI_TU_URL_DE_APPS_SCRIPT',
```

por la URL de la implementación de Apps Script, que termina en `/exec`:

```js
URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfy.../exec',
```

---

## Las tres pantallas

**1. Búsqueda.** Subdirección Local → Jardín Infantil → Nivel → nombre de quien
diligencia. Cada desplegable se habilita solo cuando el anterior está elegido, y
el botón *INICIAR DILIGENCIAMIENTO DE RECURRENCIA* permanece bloqueado hasta que
se escriba el nombre.

**2. Diligenciamiento.** La lista de todas las niñas y los niños de ese nivel.
Las casillas verdes vienen del Excel y no se pueden editar: nombres y apellidos,
fecha de nacimiento, edad a 31 de marzo de 2027, nivel actual y nivel 2027 por
edad. Debajo, lo que hay que responder:

- *¿Desea continuar con el cupo en el mismo jardín?* → SÍ / NO
- Si responde **NO** → *Hará tránsito a*: Colegio Sed. · Opción Privada ·
  Traslado a otro lugar del país · Jardín SDIS
- Si elige **Jardín SDIS** → Subdirección Local y Jardín Infantil de destino
  (el segundo desplegable solo muestra los jardines de esa subdirección)

**3. Confirmación.** Resumen de lo enviado.

---

## Pre-guardado

Todo lo que se diligencia se guarda solo en el celular, sin internet. Si se
cierra el navegador, se va la señal o se apaga el equipo, el avance aparece en la
pantalla de inicio como *«Tiene avances sin enviar»* y se puede continuar donde
quedó. La información llega a Drive **únicamente** al presionar ENVIAR.

---

## Sin duplicados

Cada envío lleva un identificador único. Además, en la hoja Consolidado la clave
es `código de jardín + nivel + número de documento`: si la misma niña o el mismo
niño se vuelve a enviar, la fila se **actualiza** en lugar de duplicarse. Por eso
es seguro enviar un nivel a medias y completarlo después, o reenviar si falló la
conexión.

---

## Actualizar la base de datos

Si cambia el Excel de origen, hay que regenerar los JSON con `gen_data.py` y
reemplazar la carpeta `data/` del repositorio. El resto del aplicativo no se
toca.

---

## Hoja Consolidado

| Columna | Origen |
|---|---|
| FECHA_HORA_ENVIO | Automática |
| DILIGENCIADO_POR | Pantalla 1 |
| SUBDIRECCION_LOCAL · COD_JARDIN · JARDIN_INFANTIL · NIVEL_ACTUAL | Pantalla 1 |
| TIPO_DOC · NUM_DOC · NOMBRES_Y_APELLIDOS · FECHA_NACIMIENTO · EDAD_31_MARZO_2027 · NIVEL_2027_POR_EDAD | Base de datos |
| CONTINUA_MISMO_JARDIN | Respuesta SÍ / NO |
| HARA_TRANSITO_A | Respuesta (solo si contestó NO) |
| TRANSITO_SUBDIRECCION_LOCAL · TRANSITO_JARDIN_INFANTIL | Respuesta (solo si eligió Jardín SDIS) |
| ID_ENVIO · CLAVE | Control interno |
