# Creación y procesamiento de audio en entorno gráfico

**Máster en Composición Electroacústica** · Centro Superior de Enseñanza Musical Katarina Gurska · Curso 2026-27
Profesor: Anxe Faraldo · [anxefaraldo@gmail.com](mailto:anxefaraldo@gmail.com) · [anxefaraldo.lamembrana.com](http://anxefaraldo.lamembrana.com) · [Sobre mí](sobre-mi.md)

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

Pure Data es un dialecto de la familia de Max (ambos modelos los desarrolló la misma persona). A lo largo del curso compararemos versiones de funcionalidad idéntica realizadas en Max, el entorno comercial, para completar la comprensión del paradigma de programación gráfica, de su potencial y de sus limitaciones.

## Metodología

Todas las sesiones siguen la misma secuencia, para que sepas en cada momento en qué punto del día estás. Los ocho bloques giran en torno al tema de la sesión y alternan la explicación, la práctica y la escucha, de modo que ninguno se alarga más de una hora y cuarto.

**Mañana**

1. **Retorno.** Dos o tres personas, elegidas al azar, defienden su encargo: lo tocan, explican una decisión señalándola en el patch y hacen en directo una modificación que les pide el profesor. Después, el resto del grupo pregunta.
2. **Reconstrucción.** Sin apuntes, rehacemos el núcleo de la sesión anterior. Cuenta hacerla, no acertar: recuperar de memoria lo que vimos hace semanas es la forma más eficaz de que siga ahí.
3. **Bloque técnico.** Construimos un patch entre todos, en pantalla. Antes de ejecutar cada paso, la pregunta es siempre la misma: *¿qué va a pasar?*
4. **Taller de predicción.** Por parejas: escribes qué hará un patch antes de ejecutarlo, lo ejecutas y discutís la diferencia.

**Tarde**

5. **Escucha.** Una obra que plantea el problema técnico de la tarde. Se escucha dos veces: la primera sin consigna, la segunda con una pregunta concreta. La conversación posterior formula el problema que resolveremos a continuación.
6. **Bloque técnico.** La técnica que responde a ese problema, de nuevo construida entre todos.
7. **Taller de composición.** Cada alumna compone una miniatura con lo trabajado ese día.
8. **Cierre.** Escuchamos algunas miniaturas y se presenta el encargo para la sesión siguiente.

Los días con prueba de nivel (28 de noviembre y 30 de enero), la prueba ocupa el lugar del Retorno y la Reconstrucción.

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

## Guía docente oficial

[Guía docente de la asignatura](https://drive.google.com/file/d/1R7qtpDbZWyfBRPjEno9qrvXuUIJ7k38a/view?usp=drive_link) (Google Drive).
