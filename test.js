const text = '1. ¿Cuál es el río más ancho del mundo?A) aB) bRespuesta correcta: CJustificación: x.2. ¿Qué eminente?A) aB) bRespuesta: A';
const qs = text.split(/(Pregunta\s*\d+\.?|(?<=\D|^)\d+\.\s+)/gi).filter(q => q && q.trim().length > 0);
console.log(qs);
