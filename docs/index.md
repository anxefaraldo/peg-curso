# Creación y procesamiento de audio en entorno gráfico

<p class="cab-enlace">Enlace corto a esta web: <code>bit.ly/anxe-peg</code></p>

<div class="cabecera" markdown>
<p class="cab-master">Máster en Composición Electroacústica</p>
<p class="cab-centro">Centro Superior de Enseñanza Musical Katarina Gurska · Curso 2026-27</p>
<p class="cab-profe">Anxe Faraldo</p>
<p class="cab-contacto" markdown="span">[anxefaraldo@gmail.com](mailto:anxefaraldo@gmail.com) · [lamembrana.com/anxefaraldo](https://lamembrana.com/anxefaraldo) · [Sobre mí](sobre-mi.md)</p>
</div>

## Descripción

Los entornos gráficos de programación de sonido y música (como Max o Pd) son una de las vías más efectivas para crear y transformar el sonido e integrarlo en la composición. En esta asignatura desmenuzaremos sus principios, y las estrategias para implementar técnicas de síntesis y transformación del sonido, para que cada alumna domine un entorno con el que desarrollar obra propia.

## Objetivos

- Desarrollar de forma autónoma entornos de programación de sonido.
- Aplicar de manera creativa los principios técnicos aprendidos.
- Desarrollar y derivar nuevos principios técnico-creativos a partir de los presentados en clase.
- Dominar el entorno de programación para desarrollar obra propia.

## Estructura

La asignatura se organiza en ocho sesiones intensivas de 7 horas en sábados alternos, más una sesión de creación de vídeo a cargo de Manuel de Pablos. Cada sesión gira en torno a un tema, abordado desde sus contextos sociales, artísticos y tecno-científicos, y combina cuatro tipos de actividad: la defensa en clase del trabajo entregado, la construcción colectiva de patches, la escucha comentada de obras, y un taller de composición en el que cada alumna crea una pequeña pieza con lo trabajado ese día.

!!! info "Horario"
    Sábados alternos, de 11:30 a 14:30 y de 15:30 a 19:30 h. Excepción: el domingo 8 de noviembre, de 11:30 a 14:30 y de 15:30 a 18:00 h.

## Entorno de trabajo

El entorno de programación de la asignatura es Pure Data (Pd), un lenguaje de código abierto y gratuito.

- Pd funciona en los tres sistemas operativos mayoritarios (Mac, Windows, Linux), en smartphones (iOS, Android) y en la web.
- Pd se puede insertar como motor de audio en otros lenguajes de programación (Python, C++, Unity, Processing, etc.).
- Pd, vía plugdata, puede funcionar dentro de cualquier DAW como plugin de audio o MIDI en la mayoría de formatos (VST3, AU, LV2, CLAP).
- Pd es un lenguaje pequeño (pocos objetos), y por eso resulta idóneo en contextos de aprendizaje.
- Pd consume muy pocos recursos, así que puede correr en ordenadores poco potentes (smartphones, Raspberry Pi). Esto lo hace especialmente idóneo para creaciones colaborativas o instalaciones sonoras.

Trabajaremos con [plugdata](https://plugdata.org/) (última versión estable), una distribución de Pure Data que funciona como aplicación independiente y como plugin dentro de cualquier DAW. Usaremos el vocabulario que plugdata incluye de serie: Pd vanilla y las librerías ELSE y cyclone. Muchos objetos de ELSE resuelven en una sola caja lo que en vanilla requiere varios; en clase construiremos primero la versión desplegada, para saber qué hay dentro de la caja, y a partir de ahí usaremos la caja.

Pd y Max pertenecen a la misma familia de lenguajes; ambos parten del trabajo de Miller Puckette. En ocasiones abriremos Max para mostrar diferencias o hacer comparaciones.

## Metodología

Las sesiones son largas y espaciadas, así que cada una alterna distintos tipos de trabajo en lugar de concentrarse en la explicación:

- **Defensa de encargos.** Algunas personas presentan y defienden el trabajo hecho entre sesiones.
- **Recuperación de lo anterior.** Volvemos sobre la sesión previa antes de construir encima.
- **Construcción colectiva.** Los patches se construyen entre todos, en pantalla, y antes de ejecutar algo intentamos predecir qué va a pasar.
- **Escucha comentada.** Obras que plantean los problemas técnicos y estéticos de la sesión.
- **Taller.** Cada alumna implementa, experimenta y compone con lo trabajado ese día.

El orden y el peso de cada actividad irán ajustándose a lo largo del curso.

## Evaluación

La evaluación es continua. Al final de cada sesión se plantea un encargo: una miniatura compositiva que cada alumna realiza de manera individual antes de la sesión siguiente. Cada sesión comienza con la defensa en clase de algunos de estos encargos: se escucha la pieza, se explica una decisión señalándola en el patch y se realiza en directo una modificación propuesta por el profesor. Quienes defienden se eligen al azar al inicio de la sesión, y todas las alumnas defenderán varias veces a lo largo del curso.

Además, se realizarán dos pruebas de nivel en el aula, de dos horas y sin conexión a internet: el 28 de noviembre y el 30 de enero.

| Criterio | Ponderación |
|---|---|
| Asistencia y participación activa en las sesiones | 20 % |
| Pruebas de nivel (2) | 40 % |
| Encargos: entrega y defensa en clase | 40 % |

## Uso de inteligencia artificial

El uso de herramientas de IA no está prohibido en esta asignatura. Pero lo que se evalúa es precisamente lo que la IA no puede hacer por ti:

- predecir qué hará un patch antes de ejecutarlo;
- encontrar y explicar un error;
- defender tu propio trabajo en directo y modificarlo delante de la clase.

Todo lo que entregues lo tendrás que explicar y modificar en clase. Si en tu patch hay un objeto o una conexión que no sabes explicar, todavía no es tuyo.

Tampoco es un tema tabú. La IA puede ser una buena compañera de experimentación: probar variantes, abrir caminos que no se te habrían ocurrido. Pero la decisión estética es tuya. Lo que nos interesa es tu manera de pensar el sonido, no la respuesta más probable. Qué aportan estas herramientas, qué esconden y cómo se toca con ellas lo trabajaremos a fondo en Música Electrónica en Vivo.

## Guía docente oficial

[Guía docente de la asignatura](https://drive.google.com/file/d/1R7qtpDbZWyfBRPjEno9qrvXuUIJ7k38a/view?usp=drive_link) (Google Drive).
