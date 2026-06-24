// ----------------------------------------------------
// MOCK DATA (40 Preguntas de Análisis Matemático)
// ----------------------------------------------------
const questionsData = [
    // Las 20 originales con formato completo
    {
        id: 1, text: "Si tenés la función $f(x) = 3 \\cdot sen(2x + \\pi) - 1$, ¿cuál es su período ($T$)?",
        options: [ { id: "A", text: "$T = 2\\pi$" }, { id: "B", text: "$T = \\pi$" }, { id: "C", text: "$T = \\frac{\\pi}{2}$" } ],
        correctId: "B", justification: "El período de una función seno o coseno se calcula con la fórmula $T = \\frac{2\\pi}{b}$, donde $b$ es el coeficiente que acompaña a la $x$. En este caso $b = 2$, por lo tanto, $T = \\frac{2\\pi}{2} = \\pi$."
    },
    {
        id: 2, text: "¿Cuál es el conjunto imagen (rango) de la función $f(x) = -2 \\cdot cos(x) + 3$?",
        options: [ { id: "A", text: "$[-2; 2]$" }, { id: "B", text: "$[1; 5]$" }, { id: "C", text: "$[3; 5]$" } ],
        correctId: "B", justification: "La función coseno básica oscila entre $-1$ y $1$. Al multiplicarla por $-2$, la oscilación pasa a ser entre $-2$ y $2$ (amplitud $2$). El $+3$ desplaza todo hacia arriba: $3 - 2 = 1$ (mínimo) y $3 + 2 = 5$ (máximo). Intervalo $[1; 5]$."
    },
    {
        id: 3, text: "¿Cuál es el valor del límite trigonométrico $\\lim_{x \\to 0} \\frac{sen(4x)}{x}$?",
        options: [ { id: "A", text: "$1$" }, { id: "B", text: "$0$" }, { id: "C", text: "$4$" } ],
        correctId: "C", justification: "Basado en el Límite Fundamental Trigonométrico ($\\lim_{u \\to 0} \\frac{sen(u)}{u} = 1$), multiplicamos y dividimos por $4$: $\\lim_{x \\to 0} 4 \\cdot \\frac{sen(4x)}{4x} = 4 \\cdot 1 = 4$."
    },
    {
        id: 4, text: "La función tangente elemental $f(x) = tan(x)$ presenta una discontinuidad inevitable del tipo asíntota vertical en cuál de estos valores:",
        options: [ { id: "A", text: "$x = 0$" }, { id: "B", text: "$x = \\frac{\\pi}{2}$" }, { id: "C", text: "$x = \\pi$" } ],
        correctId: "B", justification: "Como $tan(x) = \\frac{sen(x)}{cos(x)}$, no existe donde el denominador es cero. El $cos(\\frac{\\pi}{2}) = 0$, generando división por cero y una asíntota vertical."
    },
    {
        id: 5, text: "Utilizando la regla de la cadena, ¿cuál es la derivada de $f(x) = cos(x^3)$?",
        options: [ { id: "A", text: "$f'(x) = -sen(x^3) \\cdot 3x^2$" }, { id: "B", text: "$f'(x) = 3x^2 \\cdot sen(x^3)$" }, { id: "C", text: "$f'(x) = -sen(3x^2)$" } ],
        correctId: "A", justification: "Regla de la cadena: derivar afuera ($-sen(u)$) manteniendo adentro ($x^3$), multiplicado por la derivada de adentro ($3x^2$). Queda $-sen(x^3) \\cdot 3x^2$."
    },
    {
        id: 6, text: "¿Cuál es la derivada de la función $f(x) = tan(x)$?",
        options: [ { id: "A", text: "$f'(x) = -sec^2(x)$" }, { id: "B", text: "$f'(x) = sec^2(x)$" }, { id: "C", text: "$f'(x) = cos^2(x)$" } ],
        correctId: "B", justification: "Por tabla de derivadas elementales, la derivada directa de la función tangente es la secante al cuadrado: $sec^2(x)$."
    },
    {
        id: 7, text: "Al resolver la integral indefinida $\\int sen(5x) \\, dx$, el resultado exacto es:",
        options: [ { id: "A", text: "$cos(5x) + C$" }, { id: "B", text: "$-\\frac{1}{5} cos(5x) + C$" }, { id: "C", text: "$-5 \\cdot cos(5x) + C$" } ],
        correctId: "B", justification: "La integral de $sen(u)$ es $-cos(u)$. Por sustitución ($u=5x, du=5dx$), el $5$ pasa dividiendo. Resultado: $-\\frac{1}{5} cos(5x) + C$."
    },
    {
        id: 8, text: "Si calculamos el límite al infinito $\\lim_{x \\to \\infty} \\frac{4x^2 - 5x + 1}{2x^2 + 3x}$, ¿cuál es el resultado?",
        options: [ { id: "A", text: "$\\infty$" }, { id: "B", text: "$0$" }, { id: "C", text: "$2$" } ],
        correctId: "C", justification: "Límite al infinito de cociente de polinomios de igual grado (grado 2). El resultado es el cociente de los coeficientes principales: $\\frac{4}{2} = 2$."
    },
    {
        id: 9, text: "¿Qué ocurre con el límite al infinito $\\lim_{x \\to \\infty} \\frac{x + 5}{x^2 - 3}$?",
        options: [ { id: "A", text: "El límite es $0$" }, { id: "B", text: "El límite es $1$" }, { id: "C", text: "El límite es $\\infty$" } ],
        correctId: "A", justification: "El grado del denominador (2) es mayor que el del numerador (1), la parte de abajo crece muchísimo más rápido, tendiendo a $0$."
    },
    {
        id: 10, text: "Si una función tiene un punto crítico en $x = 2$ donde $f'(2) = 0$ y su segunda derivada es $f''(2) = -5$, ¿qué hay en ese punto?",
        options: [ { id: "A", text: "Un mínimo relativo." }, { id: "B", text: "Un punto de inflexión." }, { id: "C", text: "Un máximo relativo." } ],
        correctId: "C", justification: "Criterio de la 2da derivada: Si en un punto crítico la 2da derivada es negativa ($f''(c) < 0$), la función es cóncava hacia abajo, indicando un Máximo Relativo."
    },
    {
        id: 11, text: "¿Cuál es la condición matemática obligatoria para encontrar los puntos críticos de una función $f(x)$?",
        options: [ { id: "A", text: "Que $f''(x) = 0$" }, { id: "B", text: "Que $f'(x) = 0$ o que $f'(x)$ no exista." }, { id: "C", text: "Que $f(x) = 0$" } ],
        correctId: "B", justification: "Los puntos críticos son valores del dominio donde la derivada es nula (recta tangente horizontal) o donde la función sufre un pico (no es derivable)."
    },
    {
        id: 12, text: "Si en el intervalo $(1; 4)$ la primera derivada es negativa ($f'(x) < 0$), ¿cómo se comporta la función original?",
        options: [ { id: "A", text: "Es creciente." }, { id: "B", text: "Es cóncava hacia arriba." }, { id: "C", text: "Es decreciente." } ],
        correctId: "C", justification: "Si la pendiente de la recta tangente (1ra derivada) es negativa, significa que a medida que x avanza, los valores de y disminuyen; la función decrece."
    },
    {
        id: 13, text: "¿Qué mide o detecta analíticamente un 'Punto de Inflexión' en una gráfica?",
        options: [ { id: "A", text: "El paso de crecimiento a decrecimiento." }, { id: "B", text: "El cambio en la concavidad de la curva." }, { id: "C", text: "El punto más alto de una función." } ],
        correctId: "B", justification: "Un punto de inflexión es el lugar exacto donde la función cambia su concavidad (de cóncava hacia arriba a abajo o viceversa), y ocurre cuando $f''(x)=0$."
    },
    {
        id: 14, text: "Aplicando la regla del producto, ¿cuál es la derivada de $f(x) = x \\cdot e^x$?",
        options: [ { id: "A", text: "$f'(x) = 1 \\cdot e^x$" }, { id: "B", text: "$f'(x) = e^x(x + 1)$" }, { id: "C", text: "$f'(x) = x^2 \\cdot e^x$" } ],
        correctId: "B", justification: "Regla: $f' \\cdot g + f \\cdot g'$. Resulta $(1 \\cdot e^x) + (x \\cdot e^x)$. Sacando factor común $e^x$, queda $e^x(1 + x)$."
    },
    {
        id: 15, text: "Usando la regla del cociente, ¿cuál es la derivada de $f(x) = \\frac{x}{x + 1}$?",
        options: [ { id: "A", text: "$f'(x) = \\frac{1}{(x + 1)^2}$" }, { id: "B", text: "$f'(x) = \\frac{2x + 1}{(x + 1)^2}$" }, { id: "C", text: "$f'(x) = 1$" } ],
        correctId: "A", justification: "Regla del cociente: $\\frac{f'g - fg'}{g^2}$. Numerador: $1(x+1) - x(1) = 1$. Denominador: $(x+1)^2$. Resultado: $\\frac{1}{(x+1)^2}$."
    },
    {
        id: 16, text: "Para resolver la integral $\\int x \\cdot cos(x) \\, dx$, ¿qué método avanzado es necesario aplicar?",
        options: [ { id: "A", text: "Sustitución directa." }, { id: "B", text: "Integración por partes." }, { id: "C", text: "Regla de Barrow." } ],
        correctId: "B", justification: "Producto de funciones algebraicas y trigonométricas sin relación de derivada. Se requiere la fórmula de partes: $\\int u \\, dv = uv - \\int v \\, du$."
    },
    {
        id: 17, text: "Si elegís hacer sustitución en $\\int 2x \\cdot e^{x^2} \\, dx$ con $u = x^2$, ¿cuál es el diferencial $du$?",
        options: [ { id: "A", text: "$du = x \\, dx$" }, { id: "B", text: "$du = 2x \\, dx$" }, { id: "C", text: "$du = e^{x^2} \\, dx$" } ],
        correctId: "B", justification: "El diferencial $du$ es la derivada de la variable elegida por $dx$. Derivada de $x^2$ es $2x$, por ende $du = 2x \\, dx$."
    },
    {
        id: 18, text: "¿Qué establece la Regla de Barrow para calcular una integral definida $\\int_{a}^{b} f(x) \\, dx$?",
        options: [ { id: "A", text: "Resultado es $F'(b) - F'(a)$." }, { id: "B", text: "Se debe restar $F(b) - F(a)$." }, { id: "C", text: "El área es siempre cero." } ],
        correctId: "B", justification: "Barrow conecta derivadas con integrales definidas. Dice que si encontrás una primitiva $F(x)$, la integral definida es $F(b) - F(a)$."
    },
    {
        id: 19, text: "¿Cuál es el valor exacto de la integral definida $\\int_{0}^{2} 3x^2 \\, dx$?",
        options: [ { id: "A", text: "$8$" }, { id: "B", text: "$6$" }, { id: "C", text: "$12$" } ],
        correctId: "A", justification: "Primitiva de $3x^2$ es $x^3$. Evaluando por Barrow entre 2 y 0: $2^3 - 0^3 = 8 - 0 = 8$."
    },
    {
        id: 20, text: "Para calcular el área encerrada entre $f(x)$ (techo) y $g(x)$ (piso), ¿cuál es el planteo correcto?",
        options: [ { id: "A", text: "$\\int (g(x) - f(x)) \\, dx$" }, { id: "B", text: "$\\int (f(x) - g(x)) \\, dx$" }, { id: "C", text: "$\\int f(x) + g(x) \\, dx$" } ],
        correctId: "B", justification: "Para que el área física sea positiva, se resta siempre la función superior ('techo') menos la inferior ('piso') en el intervalo de integración."
    },
    // Las 20 complementarias resueltas
    {
        id: 21, text: "Si una función es $f(x) = 3 \\cdot sen(2x)$, ¿cuál es su amplitud?",
        options: [ { id: "A", text: "$2$" }, { id: "B", text: "$3$" }, { id: "C", text: "$6$" } ],
        correctId: "B", justification: "La amplitud de la función trigonométrica $a \\cdot sen(bx)$ es el valor absoluto del coeficiente $a$. En este caso $|3| = 3$."
    },
    {
        id: 22, text: "¿Cuál es el período exacto de la función $f(x) = cos(4x)$?",
        options: [ { id: "A", text: "$2\\pi$" }, { id: "B", text: "$\\frac{\\pi}{2}$" }, { id: "C", text: "$4\\pi$" } ],
        correctId: "B", justification: "El período $T$ de $cos(bx)$ se calcula como $\\frac{2\\pi}{b}$. Aquí $b=4$, por lo que $T = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$."
    },
    {
        id: 23, text: "El dominio de las funciones fundamentales $f(x) = sen(x)$ y $g(x) = cos(x)$ es:",
        options: [ { id: "A", text: "$[-1, 1]$" }, { id: "B", text: "Todos los reales ($\\mathbb{R}$)" }, { id: "C", text: "$[0, 2\\pi]$" } ],
        correctId: "B", justification: "Las funciones seno y coseno elementales están definidas y son continuas para cualquier valor de $x$ en la recta real."
    },
    {
        id: 24, text: "¿Cuál es el valor máximo que puede alcanzar la función $f(x) = -5 \\cdot sen(x) + 2$?",
        options: [ { id: "A", text: "$7$" }, { id: "B", text: "$2$" }, { id: "C", text: "$-3$" } ],
        correctId: "A", justification: "$sen(x)$ oscila entre $-1$ y $1$. Multiplicado por $-5$, oscila entre $-5$ y $5$. Al sumar $2$, el máximo absoluto es $5 + 2 = 7$."
    },
    {
        id: 25, text: "Si $f(x) = sen(x - \\frac{\\pi}{2})$, ¿hacia dónde se desplaza la gráfica respecto a la original?",
        options: [ { id: "A", text: "Arriba $\\frac{\\pi}{2}$ unidades" }, { id: "B", text: "Derecha $\\frac{\\pi}{2}$ unidades" }, { id: "C", text: "Izquierda $\\frac{\\pi}{2}$ unidades" } ],
        correctId: "B", justification: "Restar un valor positivo dentro del argumento de la función, es decir $(x - c)$, desplaza la gráfica horizontalmente hacia la derecha en $c$ unidades."
    },
    {
        id: 26, text: "¿Qué parámetro de la función $f(x) = a \\cdot sen(bx + c) + d$ modifica el desplazamiento vertical?",
        options: [ { id: "A", text: "$a$" }, { id: "B", text: "$c$" }, { id: "C", text: "$d$" } ],
        correctId: "C", justification: "El parámetro $d$ se suma fuera de la función trigonométrica, lo que eleva (si es positivo) o desciende (si es negativo) toda la gráfica en el eje y."
    },
    {
        id: 27, text: "En la función $f(x) = cos(x) + 3$, ¿cuál es el rango o conjunto imagen?",
        options: [ { id: "A", text: "$[2, 4]$" }, { id: "B", text: "$[-1, 1]$" }, { id: "C", text: "$[3, 4]$" } ],
        correctId: "A", justification: "El coseno básico tiene rango $[-1, 1]$. Sumando 3 a estos extremos obtenemos el nuevo mínimo ($-1+3 = 2$) y el máximo ($1+3 = 4$)."
    },
    {
        id: 28, text: "¿En qué valor del intervalo $[0, 2\\pi]$ la función $f(x) = sen(x)$ alcanza su valor máximo?",
        options: [ { id: "A", text: "$\\pi$" }, { id: "B", text: "$\\frac{\\pi}{2}$" }, { id: "C", text: "$2\\pi$" } ],
        correctId: "B", justification: "La función seno arranca en 0, llega a su pico máximo de 1 en $90^\\circ$ o $\\frac{\\pi}{2}$ radianes, y luego vuelve a descender."
    },
    {
        id: 29, text: "Si el valor de $b$ en $f(x) = sen(bx)$ aumenta, ¿qué le ocurre al período de la función?",
        options: [ { id: "A", text: "Aumenta" }, { id: "B", text: "Disminuye" }, { id: "C", text: "Se mantiene igual" } ],
        correctId: "B", justification: "El período es $T = \\frac{2\\pi}{b}$. Como $b$ está en el denominador, si aumenta su valor, la fracción completa (el período) se hace más pequeña (ondas más comprimidas)."
    },
    {
        id: 30, text: "¿Cuál es la ordenada al origen de la función $f(x) = 2 \\cdot cos(x) - 1$?",
        options: [ { id: "A", text: "$1$" }, { id: "B", text: "$0$" }, { id: "C", text: "$-1$" } ],
        correctId: "A", justification: "La ordenada al origen es el valor donde corta al eje y, es decir, cuando $x = 0$. Operando: $f(0) = 2 \\cdot cos(0) - 1 = 2(1) - 1 = 1$."
    },
    {
        id: 31, text: "¿Cuál es el resultado del límite fundamental $\\lim_{x \\to 0} \\frac{sen(x)}{x}$?",
        options: [ { id: "A", text: "$0$" }, { id: "B", text: "$1$" }, { id: "C", text: "$\\infty$" } ],
        correctId: "B", justification: "Este es un límite notable de la trigonometría, demostrado mediante el teorema de estricción (o sándwich). A medida que $x$ se acerca a 0, $sen(x)$ y $x$ tienden a igualarse."
    },
    {
        id: 32, text: "Si calculamos $\\lim_{x \\to 0} \\frac{sen(3x)}{x}$, ¿cuál es el valor del límite?",
        options: [ { id: "A", text: "$1$" }, { id: "B", text: "$3$" }, { id: "C", text: "$\\frac{1}{3}$" } ],
        correctId: "B", justification: "Se multiplica numerador y denominador por $3$ para igualar el argumento del seno: $\\lim 3 \\cdot \\frac{sen(3x)}{3x}$. Como el cociente tiende a 1, resulta $3 \\cdot 1 = 3$."
    },
    {
        id: 33, text: "El límite $\\lim_{x \\to 0} \\frac{1 - cos(x)}{x}$ da como resultado:",
        options: [ { id: "A", text: "$0$" }, { id: "B", text: "$1$" }, { id: "C", text: "No existe" } ],
        correctId: "A", justification: "Segundo límite trigonométrico notable. Al multiplicar por el conjugado $(1+cos(x))$ y usar identidades, se demuestra que el límite converge siempre a $0$."
    },
    {
        id: 34, text: "Para que una función sea continua en un punto $x = a$, ¿qué debe ocurrir con los límites laterales?",
        options: [ { id: "A", text: "Deben ser iguales entre sí y finitos." }, { id: "B", text: "Deben ser infinitos." }, { id: "C", text: "Deben ser distintos." } ],
        correctId: "A", justification: "La existencia del límite principal en $x=a$ requiere que el límite por izquierda y el límite por derecha coincidan en un mismo número real finito."
    },
    {
        id: 35, text: "¿Cuál es la derivada de la función $f(x) = sen^2(x)$?",
        options: [ { id: "A", text: "$2 \\cdot sen(x)$" }, { id: "B", text: "$cos^2(x)$" }, { id: "C", text: "$2 \\cdot sen(x) \\cdot cos(x)$" } ],
        correctId: "C", justification: "Aplicando la regla de la cadena: primero se baja el exponente derivando la potencia ($2 \\cdot sen(x)$) y luego se multiplica por la derivada de la base ($cos(x)$)."
    },
    {
        id: 36, text: "El resultado de la integral $\\int sec^2(x) \\, dx$ es:",
        options: [ { id: "A", text: "$tan(x) + C$" }, { id: "B", text: "$sec(x) \\cdot tan(x) + C$" }, { id: "C", text: "$-cot(x) + C$" } ],
        correctId: "A", justification: "La integración es el proceso inverso de la derivación. Dado que la derivada de $tan(x)$ es $sec^2(x)$, la antiderivada directa es $tan(x)$ más la constante."
    },
    {
        id: 37, text: "Al resolver una integral indefinida, ¿qué término se debe sumar siempre al final?",
        options: [ { id: "A", text: "El valor $0$" }, { id: "B", text: "La variable $x$" }, { id: "C", text: "La constante $C$" } ],
        correctId: "C", justification: "Toda integral indefinida representa una familia infinita de funciones primitivas que solo difieren entre sí por una constante real $C$, ya que la derivada de $C$ es cero."
    },
    {
        id: 38, text: "Para eliminar la indeterminación $\\frac{0}{0}$ en límites de cocientes polinómicos, el método clásico es:",
        options: [ { id: "A", text: "Integrar la función." }, { id: "B", text: "Factorizar numerador y denominador." }, { id: "C", text: "Aplicar logaritmos." } ],
        correctId: "B", justification: "La indeterminación indica que $(x-a)$ es raíz de ambos polinomios. Al factorizarlos (ej: con Ruffini o cuadrática), se puede cancelar ese factor común problemático."
    },
    {
        id: 39, text: "Si $f''(x) > 0$ en un intervalo, la gráfica de la función es cóncava hacia:",
        options: [ { id: "A", text: "Arriba (forma de U)" }, { id: "B", text: "Abajo (campana invertida)" }, { id: "C", text: "Es recta" } ],
        correctId: "A", justification: "Una segunda derivada positiva indica que la pendiente está en constante aumento a medida que avanza $x$, lo que geométricamente se traduce en concavidad hacia arriba."
    },
    {
        id: 40, text: "El método de integración por sustitución también es conocido comúnmente como:",
        options: [ { id: "A", text: "Integración por partes" }, { id: "B", text: "Cambio de variable" }, { id: "C", text: "Fracciones simples" } ],
        correctId: "B", justification: "Al definir una función $u = g(x)$, se reemplaza literalmente la variable original $x$ por una nueva variable $u$ para transformar y simplificar la integral."
    },
    {
        id: 41, text: "Una empresa de turismo en Bariloche modela sus reservas mensuales mediante la función $R(t) = 500 \\cdot sen\\left(\\frac{\\pi}{6}t\\right) + 1200$, donde $t$ es el mes del año. ¿Cuál es la cantidad máxima de reservas que registra la empresa en su temporada alta?",
        options: [ { id: "A", text: "1200 reservas" }, { id: "B", text: "1700 reservas" }, { id: "C", text: "500 reservas" } ],
        correctId: "B", justification: "La función seno básica tiene como valor máximo"
    },
    {
        id: 42, text: "El departamento de planeamiento financiero determina que la tasa de cambio de la utilidad de una compañía de software se rige por $U'(x) = 3x^2 - 12x$, donde $x$ es la cantidad de licencias vendidas (en miles). ¿Para qué nivel de ventas la utilidad alcanza un punto crítico?",
        options: [ { id: "A", text: "$x = 4$ mil licencias" }, { id: "B", text: "$x = 2$ mil licencias" }, { id: "C", text: "$x = 0$ y $x = 4$ mil licencias" } ],
        correctId: "C", justification: "Los puntos críticos de una función se hallan igualando su primera derivada a cero ($U'(x) = 0$). Planteamos la ecuación: $3x^2 - 12x = 0$. Factorizando por factor común queda $3x(x - 4) = 0$. Esto se anula si $3x = 0 \\Rightarrow x = 0$, o si $x - 4 = 0 \\Rightarrow x = 4$."
    },
    {
        id: 43, text: "Con los datos del caso anterior ($U'(x) = 3x^2 - 12x$), el auditor externo necesita saber si vender 4 mil licencias maximiza o minimiza la utilidad. Al aplicar el criterio de la segunda derivada, se deduce que:",
        options: [ { id: "A", text: "Se maximiza la utilidad porque $U''(4) = 12 > 0$." }, { id: "B", text: "Se minimiza la utilidad porque $U''(4) = 12 > 0$." }, { id: "C", text: "Hay un punto de inflexión en los beneficios." } ],
        correctId: "B", justification: "Buscamos la segunda derivada derivando $U'(x)$, lo que nos da $U''(x) = 6x - 12$. Evaluamos en el punto crítico $x = 4$: $U''(4) = 6(4) - 12 = 24 - 12 = 12$. Como $U''(4) > 0$, la función beneficio es cóncava hacia arriba ($\\cup$), lo que significa analíticamente que $x = 4$ es un Mínimo Relativo."
    },
    {
        id: 44, text: "Una startup de delivery analiza el costo total de envíos mediante la función racional $C(x) = \\frac{5x^2 + 200}{x^2 + 2}$, donde $x$ es el número de entregas realizadas. Si la empresa crece indefinidamente ($x \\to \\infty$), ¿a qué valor se estabiliza el costo de envío?",
        options: [ { id: "A", text: "5" }, { id: "B", text: "0" }, { id: "C", text: "100" } ],
        correctId: "A", justification: "Para saber el comportamiento a largo plazo aplicamos el límite al infinito: $\\lim_{x \\to \\infty} \\frac{5x^2 + 200}{x^2 + 2}$. Al ser un cociente de polinomios del mismo grado (grado 2), el límite es igual al cociente de sus coeficientes principales: $\\frac{5}{1} = 5$. El costo se estabiliza en 5."
    },
    {
        id: 45, text: "Una fábrica textil calcula que el costo marginal de producir $x$ pantalones está dado por la función de costo marginal $CM(x) = 3x^2 - 4x + 50$. Si el costo fijo de la planta es de $5000, ¿cuál es la función de Costo Total $C(x)$?",
        options: [ { id: "A", text: "$C(x) = 6x - 4$" }, { id: "B", text: "$C(x) = x^3 - 2x^2 + 50x + 5000$" }, { id: "C", text: "$C(x) = x^3 - 2x^2 + 50x$" } ],
        correctId: "B", justification: "El costo total es la integral del costo marginal. Calculamos la integral indefinida: $\\int (3x^2 - 4x + 50) \\, dx = x^3 - 2x^2 + 50x + C$. Como los costos fijos representan el costo cuando no se produce nada ($C(0) = 5000$), la constante de integración $C$ toma de manera directa el valor de $5000$."
    },
    {
        id: 46, text: "Un sistema automático de riego para un campo de soja abre sus válvulas siguiendo un patrón de presión hidráulica modelado por $P(t) = tan(t)$ en el intervalo de tiempo $[0; \\pi]$. El ingeniero a cargo advierte que el sistema sufre una caída de presión crítica (discontinuidad infinita) en qué momento exacto:",
        options: [ { id: "A", text: "En $t = \\pi$" }, { id: "B", text: "En $t = \\frac{\\pi}{2}$" }, { id: "C", text: "En $t = 0$" } ],
        correctId: "B", justification: "La función tangente se define como $\\frac{sen(t)}{cos(t)}$. En el intervalo dado, la función no es continua donde el denominador se hace cero. Como $cos(\\frac{\\pi}{2}) = 0$, en $t = \\frac{\\pi}{2}$ se produce una división por cero que genera una asíntota vertical (discontinuidad esencial)."
    },
    {
        id: 47, text: "Un banco digital analiza la velocidad de transacciones por segundo mediante la función compuesta $V(t) = sen(t^2 + 1)$. El equipo de infraestructura informática necesita conocer la tasa de aceleración de las transacciones (la derivada). ¿Cuál es?",
        options: [ { id: "A", text: "$V'(t) = cos(t^2 + 1) \\cdot 2t$" }, { id: "B", text: "$V'(t) = cos(2t)$" }, { id: "C", text: "$V'(t) = -cos(t^2 + 1)$" } ],
        correctId: "A", justification: "Aplicamos la regla de la cadena para funciones compuestas. Derivamos la función exterior (la derivada de $sen(u)$ es $cos(u)$) manteniendo lo de adentro intacto, y luego multiplicamos por la derivada del argumento interno (la derivada de $t^2 + 1$ es $2t$). Resultado: $cos(t^2 + 1) \\cdot 2t$."
    },
    {
        id: 48, text: "Un analista de marketing determina que el flujo diario de nuevos usuarios en una plataforma web de e-commerce tras una campaña publicitaria sigue la tasa de cambio $f(t) = \\frac{ln(t)}{t}$. Para hallar la función de usuarios acumulados mediante integración, ¿qué método avanzado debe emplear?",
        options: [ { id: "A", text: "Integración por Partes" }, { id: "B", text: "Método de Sustitución" }, { id: "C", text: "Regla de Barrow directo sin pasos intermedios." } ],
        correctId: "B", justification: "Observamos que la expresión se puede reescribir como $\\int ln(t) \\cdot \\frac{1}{t} \\, dt$. Como la derivada de $ln(t)$ es exactamente $\\frac{1}{t}$, el método de sustitución es perfecto eligiendo $u = ln(t)$ y $du = \\frac{1}{t} dt$."
    },
    {
        id: 49, text: "Resolviendo la integral del caso anterior ($\\int ln(t) \\cdot \\frac{1}{t} \\, dt$) por el método de sustitución indicado, ¿cuál es la estructura de la primitiva encontrada?",
        options: [ { id: "A", text: "$\\frac{(ln(t))^2}{2} + C$" }, { id: "B", text: "$ln(t) + C$" }, { id: "C", text: "$\\frac{1}{t^2} + C$" } ],
        correctId: "A", justification: "Al sustituir $u = ln(t)$ y $du = \\frac{1}{t} dt$, la integral se transforma en $\\int u \\, du$. La primitiva de $u$ es $\\frac{u^2}{2} + C$. Volviendo a la variable original $t$, reemplazamos la $u$ y nos queda de forma exacta $\\frac{(ln(t))^2}{2} + C$."
    },
    {
        id: 50, text: "Una constructora civil necesita calcular el área de terreno plano que queda delimitado entre el suelo (eje $x$) y el arco de un puente decorativo cuya función de diseño arquitectónico es $f(x) = sen(x)$ en el intervalo $[0; \\pi]$. ¿Cuántos metros cuadrados mide esa superficie?",
        options: [ { id: "A", text: "0" }, { id: "B", text: "2" }, { id: "C", text: "1" } ],
        correctId: "B", justification: "Planteamos la integral definida del área: $\\int_{0}^{\\pi} sen(x) \\, dx$. La primitiva de $sen(x)$ es $-cos(x)$. Aplicamos la Regla de Barrow evaluando en los límites: $[-cos(\\pi)] - [-cos(0)]$. Sabiendo que $cos(\\pi) = -1$ y $cos(0) = 1$, resolvemos los signos: $[-(-1)] - [-1] = 1 + 1 = 2$."
    },
    {
        id: 51, text: "Una empresa automotriz mide la eficiencia de frenado de un nuevo prototipo. La distancia de frenado en función del tiempo viene dada por una curva, y se sabe que la segunda derivada de dicha posición es $a(t) = -6t + 12$. ¿En qué instante de tiempo se produce el punto de inflexión de la aceleración del frenado?",
        options: [ { id: "A", text: "$t = 0$" }, { id: "B", text: "$t = 2$" }, { id: "C", text: "$t = 6$" } ],
        correctId: "B", justification: "Los puntos de inflexión se encuentran donde la segunda derivada se anula y cambia de signo. Igualamos $a(t) = 0 \\Rightarrow -6t + 12 = 0 \\Rightarrow 12 = 6t \\Rightarrow t = 2$."
    },
    {
        id: 52, text: "El departamento de recursos humanos de una corporación analiza el índice de productividad de los empleados durante una jornada de 8 horas mediante la función $P(t) = -t^2 + 8t + 10$. ¿En qué hora del día se alcanza la máxima productividad del personal?",
        options: [ { id: "A", text: "A la hora $t = 4$" }, { id: "B", text: "A la hora $t = 8$" }, { id: "C", text: "A la hora $t = 10$" } ],
        correctId: "A", justification: "Para optimizar y hallar el máximo, derivamos la función e igualamos a cero: $P'(t) = -2t + 8 = 0 \\Rightarrow 8 = 2t \\Rightarrow t = 4$. Comprobamos con la segunda derivada $P''(t) = -2$. Al ser negativa ($<0$), se confirma la existencia de un máximo absoluto en la hora 4."
    },
    {
        id: 53, text: "Una compañía de logística aérea calcula el consumo de combustible de sus aviones mediante la integral $\\int x \\cdot e^{3x} \\, dx$. Para resolver esta operación y determinar el gasto operativo, el ingeniero aplica integración por partes y debe seleccionar la función $u$ siguiendo las prioridades algebraicas. ¿Cuál elige?",
        options: [ { id: "A", text: "$u = e^{3x}$" }, { id: "B", text: "$u = x$" }, { id: "C", text: "$u = 3x$" } ],
        correctId: "B", justification: "Siguiendo el método de integración por partes y la regla de prioridades (ILATE), las funciones algebraicas ($x$) tienen prioridad sobre las funciones exponenciales ($e^{3x}$) para ser seleccionadas como $u$, dado que al derivarlas se simplifica el orden del polinomio ($du = 1 \\cdot dx$)."
    },
    {
        id: 54, text: "Un fondo de inversión inmobiliario analiza la valorización de un complejo de oficinas. El valor estimado a largo plazo se rige por $V(t) = \\frac{10t^3 - 5t}{2t^3 + 4t^2 + 1}$. El asesor financiero afirma que el valor del complejo tenderá a estabilizarse en un techo fijo. ¿Cuál es ese límite?",
        options: [ { id: "A", text: "5" }, { id: "B", text: "0" }, { id: "C", text: "El valor crece indefinidamente al infinito." } ],
        correctId: "A", justification: "Calculamos el límite cuando $t \\to \\infty$ de la función de valorización. Dado que el numerador y el denominador poseen exactamente el mismo grado máximo (grado 3), dividimos sus coeficientes principales de forma directa: $\\frac{10}{2} = 5$."
    },
    {
        id: 55, text: "Una planta embotelladora de agua mineral opera una bomba de llenado cuyo caudal fluctúa periódicamente según la función $f(t) = 4 \\cdot cos(\\pi t)$. ¿Cuál es el período exacto de tiempo en el que la bomba completa un ciclo de bombeo?",
        options: [ { id: "A", text: "$T = 2\\pi$" }, { id: "B", text: "$T = 2$" }, { id: "C", text: "$T = 4$" } ],
        correctId: "B", justification: "El período de una función trigonométrica coseno viene dado de forma estricta por la fórmula matemática $T = \\frac{2\\pi}{b}$. Mirando el argumento de nuestra función, el coeficiente que acompaña a la variable temporal $t$ es $b = \\pi$. Reemplazando: $T = \\frac{2\\pi}{\\pi} = 2$."
    },
    {
        id: 56, text: "Una corporación tecnológica analiza el costo marginal de mantenimiento de sus servidores mediante la función $CM(x) = \\frac{1}{x}$. Si quieren calcular el aumento de costo total al pasar de operar 1 servidor a 4 servidores, ¿qué planteo matemático estructuran usando la Regla de Barrow?",
        options: [ { id: "A", text: "$\\int_{1}^{4} \\frac{1}{x} \\, dx = ln(4) - ln(1)$" }, { id: "B", text: "$\\int_{1}^{4} \\frac{1}{x} \\, dx = \\frac{1}{4} - 1$" }, { id: "C", text: "$\\int_{1}^{4} \\frac{1}{x} \\, dx = ln(1) - ln(4)$" } ],
        correctId: "A", justification: "Por la regla de Barrow, integramos la función de costo marginal en el intervalo definido $[1; 4]$. La primitiva de $\\frac{1}{x}$ es $ln|x|$. Al evaluar el límite superior menos el límite inferior obtenemos de manera exacta: $ln(4) - ln(1)$."
    },
    {
        id: 57, text: "Una empresa de diseño industrial proyecta una pieza mecánica cuyo perfil superior sigue la curva $f(x) = 4 - x^2$ y su perfil inferior es el eje de las abscisas (suelo). El intervalo de corte con el eje es $[-2; 2]$. Para calcular el área total de material de la pieza, se evalúa la integral definida, la cual da como resultado:",
        options: [ { id: "A", text: "$\\frac{32}{3}$" }, { id: "B", text: "$0$" }, { id: "C", text: "16" } ],
        correctId: "A", justification: "Planteamos la integral definida: $\\int_{-2}^{2} (4 - x^2) \\, dx$. Buscamos la primitiva, que es $F(x) = 4x - \\frac{x^3}{3}$. Evaluamos en el límite superior (2): $4(2) - \\frac{2^3}{3} = 8 - \\frac{8}{3} = \\frac{16}{3}$. Evaluamos en el límite inferior (-2): $4(-2) - \\frac{(-2)^3}{3} = -8 - (-\\frac{8}{3}) = -\\frac{16}{3}$. Restamos los valores según Barrow: $\\frac{16}{3} - (-\\frac{16}{3}) = \\frac{16}{3} + \\frac{16}{3} = \\frac{32}{3}$."
    },
    {
        id: 58, text: "Una multinacional de energía mide la corriente eléctrica alterna de una planta con la función $I(t) = sen(t)$. Si calculamos el límite fundamental de la corriente relativa en el instante de encendido del sistema mediante $\\lim_{t \\to 0} \\frac{sen(t)}{t}$, el resultado analítico es:",
        options: [ { id: "A", text: "0" }, { id: "B", text: "1" }, { id: "C", text: "No existe porque da una división por cero indeterminada." } ],
        correctId: "B", justification: "Aunque la sustitución directa produce la indeterminación del tipo $\\frac{0}{0}$, el Límite Fundamental Trigonométrico (demostrado analíticamente en tus apuntes de la lectura 2) establece de forma directa que cuando el argumento tiende a cero, el valor del límite de la razón es exactamente 1."
    },
    {
        id: 59, text: "El sector de control de calidad de una empresa química determina que la concentración de un reactivo decae según una tasa dada por la integral inmediata $\\int sec^2(x) \\, dx$. Al integrarla para conocer la concentración acumulada, obtenemos:",
        options: [ { id: "A", text: "$tan(x) + C$" }, { id: "B", text: "$cos^2(x) + C$" }, { id: "C", text: "$-tan(x) + C$" } ],
        correctId: "A", justification: "Por tabla de integración de funciones trigonométricas fundamentales (operación inversa directa de la derivación), sabemos que la derivada de la tangente es la secante al cuadrado. Por lo tanto, la primitiva de $sec^2(x)$ es de forma estricta $tan(x) + C$."
    },
    {
        id: 60, text: "Una startup agrícola analiza la variación estacional de crecimiento de una planta usando la derivada $f'(x) = cos(x)$. Si se sabe que en el intervalo $[0; \\frac{\\pi}{2}]$ la derivada toma valores estrictamente positivos ($f'(x) > 0$), ¿qué informe presenta el botánico sobre el crecimiento de la planta en esa etapa?",
        options: [ { id: "A", text: "El crecimiento de la planta está estancado." }, { id: "B", text: "La planta experimenta un decrecimiento en su tamaño." }, { id: "C", text: "La planta experimenta un crecimiento sostenido." } ],
        correctId: "C", justification: "El teorema del álgebra de derivadas establece que si la primera derivada de una función es mayor a cero ($f'(x) > 0$) para todos los puntos de un intervalo, la función original es estrictamente creciente en dicho tramo."
    },
    {
        id: 61, text: "El departamento de I+D de una empresa de tecnología médica modela la presión interna de un dispositivo usando la función compuesta $f(x) = ln(sen(x))$. ¿Cuál es la primera derivada $f'(x)$ de este sistema en su dominio de definición?",
        options: [ { id: "A", text: "$f'(x) = \\frac{1}{sen(x)}$" }, { id: "B", text: "$f'(x) = cot(x)$" }, { id: "C", text: "$f'(x) = -tan(x)$" } ],
        correctId: "B", justification: "Aplicamos la regla de la cadena. La función externa es el logaritmo natural, cuya derivada es $1/u$. La función interna es $sen(x)$, cuya derivada es $cos(x)$. Al multiplicar ambos componentes obtenemos: $f'(x) = \\frac{1}{sen(x)} \\cdot cos(x) = \\frac{cos(x)}{sen(x)}$. Por definición de identidad trigonométrica, el cociente del coseno sobre el seno es igual a la cotangente ($cot(x)$)."
    },
    {
        id: 62, text: "Una metalúrgica fabrica contenedores cilíndricos. La función de costo de producción respecto al radio $x$ viene dada por $C(x) = 2x^3 - 9x^2 + 12x + 500$. Si la empresa debe operar en un punto crítico que sea un mínimo local para reducir gastos, ¿qué radio $x$ debe elegir el ingeniero?",
        options: [ { id: "A", text: "$x = 1$" }, { id: "B", text: "$x = 2$" }, { id: "C", text: "$x = 1,5$" } ],
        correctId: "B", justification: "Primero hallamos los puntos críticos igualando la primera derivada a cero: $C'(x) = 6x^2 - 18x + 12 = 0$. Dividiendo todo por 6 obtenemos $x^2 - 3x + 2 = 0$, cuyas raíces son $x = 1$ y $x = 2$. Para determinar cuál es el mínimo, aplicamos el criterio de la segunda derivada: $C''(x) = 12x - 18$. Evaluamos los puntos:$C''(1) = 12(1) - 18 = -6 < 0$ (Máximo)$C''(2) = 12(2) - 18 = 6 > 0$ (Mínimo). El radio óptimo es $2$."
    },
    {
        id: 63, text: "Al evaluar el comportamiento del rendimiento de una planta química a largo plazo, el equipo de control se encuentra con el siguiente límite al infinito con raíces: $\\lim_{x \\to \\infty} \\left(\\sqrt{x^2 + 4x} - x\\right)$. ¿Cuál es el valor de estabilización del rendimiento?",
        options: [ { id: "A", text: "$\\infty$" }, { id: "B", text: "$0$" }, { id: "C", text: "$2$" } ],
        correctId: "C", justification: "Al evaluar directo da la indeterminación $\\infty - \\infty$. Para resolverlo, multiplicamos y dividimos por el conjugado de la expresión:$\\lim_{x \\to \\infty} \\frac{(\\sqrt{x^2 + 4x} - x)(\\sqrt{x^2 + 4x} + x)}{\\sqrt{x^2 + 4x} + x} = \\lim_{x \\to \\infty} \\frac{(x^2 + 4x) - x^2}{\\sqrt{x^2 + 4x} + x} = \\lim_{x \\to \\infty} \\frac{4x}{\\sqrt{x^2 + 4x} + x}$Dividiendo todo por el mayor grado efectivo ($x$), en el denominador la raíz nos queda como $\\sqrt{1 + 4/x} \\to 1$. El límite se reduce a $\\frac{4}{1 + 1} = \\frac{4}{2} = 2$."
    },
    {
        id: 64, text: "Una startup de aplicaciones móviles analiza la tasa de retención de usuarios mediante la integral indefinida $\\int x^2 \\cdot ln(x) \\, dx$. Al aplicar el método de integración por partes, ¿cómo queda estructurada la primera parte de la fórmula ($u \\cdot v$)?",
        options: [ { id: "A", text: "$\\frac{x^3}{3} \\cdot ln(x)$" }, { id: "B", text: "$x^2 \\cdot \\frac{1}{x}$" }, { id: "C", text: "$\\frac{x^2}{2} \\cdot ln(x)$" } ],
        correctId: "A", justification: "Siguiendo la regla ILATE, seleccionamos como $u = ln(x)$, por lo que su derivada es $du = \\frac{1}{x} dx$. El término restante es $dv = x^2 dx$, lo que significa que su integral es $v = \\frac{x^3}{3}$. La estructura inicial del método por partes determina que el primer bloque es $u \\cdot v$, es decir, $ln(x) \\cdot \\frac{x^3}{3}$, ordenado estéticamente como $\\frac{x^3}{3} \\cdot ln(x)$."
    },
    {
        id: 65, text: "Un tanque industrial de refinamiento de petróleo tiene una fuga. La tasa de pérdida de volumen en metros cúbicos por hora está dada por la función $f(t) = \\frac{2t}{t^2 + 9}$. Si queremos calcular el volumen total perdido entre las horas $t = 0$ y $t = 4$, ¿cuál es el resultado exacto mediante Barrow?",
        options: [ { id: "A", text: "$ln(25)$" }, { id: "B", text: "$ln\\left(\\frac{25}{9}\\right)$" }, { id: "C", text: "$ln(16)$" } ],
        correctId: "B", justification: "Planteamos la integral definida $\\int_{0}^{4} \\frac{2t}{t^2 + 9} \\, dt$. Usamos el método de sustitución con $u = t^2 + 9$, de donde $du = 2t \\, dt$. La primitiva inmediata es $ln|t^2 + 9|$. Aplicando la Regla de Barrow evaluamos en los límites:Límite superior (4): $ln(4^2 + 9) = ln(25)$Límite inferior (0): $ln(0^2 + 9) = ln(9)$Restando las evaluaciones por propiedad de logaritmos ($ln(a) - ln(b) = ln(a/b)$), obtenemos de forma exacta $ln\\left(\\frac{25}{9}\\right)$."
    },
    {
        id: 66, text: "Un ingeniero civil diseña un canal de desagüe cuyo perfil transversal está definido por la región encerrada entre las curvas $f(x) = 2x$ y $g(x) = x^2$. ¿Cuál es el área total de la sección transversal del canal?",
        options: [ { id: "A", text: "$\\frac{4}{3}$" }, { id: "B", text: "$\\frac{2}{3}$" }, { id: "C", text: "$2$" } ],
        correctId: "A", justification: "Primero buscamos los puntos de intersección igualando las funciones: $2x = x^2 \\Rightarrow x^2 - 2x = 0 \\Rightarrow x(x - 2) = 0$. Los límites de integración son $0$ y $2$. En ese intervalo, la recta $2x$ va por arriba de la parábola $x^2$ (es el techo). Planteamos la integral del área:$\\int_{0}^{2} (2x - x^2) \\, dx = \\left[ x^2 - \\frac{x^3}{3} \\right]_{0}^{2}$Evaluando en 2: $2^2 - \\frac{2^3}{3} = 4 - \\frac{8}{3} = \\frac{4}{3}$. Evaluando en 0 da"
    },
    {
        id: 67, text: "Una empresa de telecomunicaciones analiza la intensidad de una señal de radiofrecuencia mediante la función $f(x) = 4 \\cdot sen^2(3x)$. Aplicando la regla de la cadena para múltiples capas, ¿cuál es su derivada $f'(x)$?",
        options: [ { id: "A", text: "$f'(x) = 24 \\cdot sen(3x) \\cdot cos(3x)$" }, { id: "B", text: "$f'(x) = 8 \\cdot sen(3x)$" }, { id: "C", text: "$f'(x) = 12 \\cdot cos^2(3x)$" } ],
        correctId: "A", justification: "La función se desglosa como $4 \\cdot (sen(3x))^2$. Derivamos por capas desde afuera hacia adentro:Capa de la potencia: $4 \\cdot 2(sen(3x))^{2-1} = 8 \\cdot sen(3x)$Capa del seno: multiplicamos por $cos(3x)$Capa del argumento angular ($3x$): multiplicamos por $3$.Multiplicando las constantes: $8 \\cdot 3 = 24$. El resultado es $24 \\cdot sen(3x) \\cdot cos(3x)$."
    },
    {
        id: 68, text: "Evaluando los costos de una cadena logística, un analista se encuentra con la función de costo total $C(x) = x \\cdot e^{-x}$. Para detectar si el modelo posee un Punto de Inflexión en su estructura de eficiencia, se debe calcular la segunda derivada e igualar a cero. ¿En qué valor de $x$ cambia la concavidad?",
        options: [ { id: "A", text: "$x = 1$" }, { id: "B", text: "$x = 2$" }, { id: "C", text: "$x = 0$" } ],
        correctId: "B", justification: "Buscamos la primera derivada usando la regla del producto: $C'(x) = 1 \\cdot e^{-x} + x \\cdot (-e^{-x}) = e^{-x}(1 - x)$. Ahora calculamos la segunda derivada volviendo a aplicar el producto: $C''(x) = -e^{-x}(1 - x) + e^{-x}(-1) = e^{-x}(-1 + x - 1) = e^{-x}(x - 2)$. Igualando a cero: $e^{-x}(x - 2) = 0$. Como la exponencial nunca es cero, la condición se cumple de forma estricta en $x = 2$."
    },
    {
        id: 69, text: "Durante una auditoría financiera, se detecta que el índice de riesgo de una cartera de inversiones genera una indeterminación del tipo $0/0$ al evaluar un límite crítico: $\\lim_{x \\to 1} \\frac{x^3 - 3x + 2}{x^2 - 1}$. ¿A qué valor real converge el riesgo de la cartera?",
        options: [ { id: "A", text: "$0$" }, { id: "B", text: "No existe el límite." }, { id: "C", text: "$\\frac{0}{2} = 0$ (es un distractor, resolvamos por factorización)Opción correcta alternativa no listada directamente, calculemos el valor analítico real: El valor exacto es $0$." } ],
        correctId: "A", justification: "Evaluando directo nos da $0/0$. Factorizamos el numerador por Ruffini o división polinómica sabiendo que $x=1$ es raíz, lo que nos da $(x-1)^2(x+2)$. El denominador es una diferencia de cuadrados: $(x-1)(x+1)$. Simplificamos un término $(x-1)$ arriba y abajo:$\\lim_{x \\to 1} \\frac{(x-1)(x+2)}{x+1}$Evaluando nuevamente el límite cuando $x \\to 1$: $\\frac{(1-1)(1+2)}{1+1} = \\frac{0 \\cdot 3}{2} = 0$. El límite converge exactamente a 0."
    },
    {
        id: 70, text: "Un laboratorio farmacéutico analiza la velocidad de reacción de un compuesto químico mediante la integral avanzada $\\int \\frac{e^x}{e^{2x} + 1} \\, dx$. ¿Qué estructura trigonométrica inversa surge como primitiva al resolver por sustitución?",
        options: [ { id: "A", text: "$ln|e^{2x} + 1| + C$" }, { id: "B", text: "$arctan(e^x) + C$" }, { id: "C", text: "$arcsen(e^x) + C$" } ],
        correctId: "B", justification: "Reescribimos el denominador de la integral como $(e^x)^2 + 1$. Aplicamos el método de sustitución eligiendo $u = e^x$, por lo que su diferencial es $du = e^x dx$. Reemplazando estos componentes, la integral se transforma de manera limpia en $\\int \\frac{1}{u^2 + 1} \\, du$. Por tabla de integrales inmediatas avanzadas, esta forma corresponde a la función arcotangente ($arctan(u) + C$). Volviendo a la variable original, el resultado es $arctan(e^x) + C$."
    },
    {
        id: 71, text: "Un economista analiza la elasticidad de la demanda de un producto premium y modela la variación marginal mediante la función $f(x) = \\frac{cos(x)}{2 + sen(x)}$. ¿Cuál es la primitiva general de esta función al aplicar el método de sustitución?",
        options: [ { id: "A", text: "$ln|2 + sen(x)| + C$" }, { id: "B", text: "$ln|cos(x)| + C$" }, { id: "C", text: "$arctan(sen(x)) + C$" } ],
        correctId: "A", justification: "Elegimos como variable de sustitución el denominador completo: $u = 2 + sen(x)$. Al derivarlo para obtener el diferencial, calculamos $du = cos(x) dx$, lo cual coincide exactamente con todo el numerador de nuestra integral. La expresión se reduce a $\\int \\frac{1}{u} \\, du$, cuyo resultado por tabla es $ln|u| + C$. Restituyendo la variable original, obtenemos $ln|2 + sen(x)| + C$."
    },
    {
        id: 72, text: "Un software de simulación física para ingeniería mecánica analiza un armónico de vibración amortiguada que genera la expresión de límite indeterminado $\\lim_{x \\to 0} \\frac{x \\cdot sen(x)}{1 - cos(x)}$. ¿A qué valor numérico preciso converge la vibración en el origen?",
        options: [ { id: "A", text: "$1$" }, { id: "B", text: "$2$" }, { id: "C", text: "$0$" } ],
        correctId: "B", justification: "Es una indeterminación $0/0$. Para resolverlo sin aplicar L'Hôpital (manteniendo el álgebra clásica de tus módulos), multiplicamos arriba y abajo por el conjugado del denominador $(1 + cos(x))$:$\\lim_{x \\to 0} \\frac{x \\cdot sen(x) \\cdot (1 + cos(x))}{1 - cos^2(x)} = \\lim_{x \\to 0} \\frac{x \\cdot sen(x) \\cdot (1 + cos(x))}{sen^2(x)}$Simplificamos un $sen(x)$ del numerador con uno del denominador, quedando: $\\lim_{x \\to 0} \\frac{x}{sen(x)} \\cdot (1 + cos(x))$. Sabiendo que el límite fundamental invertido $\\frac{x}{sen(x)} \\to 1$ y que $cos(0) = 1$, la operación final es $1 \\cdot (1 + 1) = 2$."
    },
    {
        id: 73, text: "Una planta de energía solar registra la fluctuación de inyección a la red mediante la función $f(x) = sen(x) \\cdot cos(x)$. El técnico necesita encontrar los puntos críticos en el intervalo $[0; \\pi]$ para predecir los picos de energía. ¿Cuáles son?",
        options: [ { id: "A", text: "$x = \\frac{\\pi}{4}$ y $x = \\frac{3\\pi}{4}$" }, { id: "B", text: "$x = \\frac{\\pi}{2}$" }, { id: "C", text: "$x = 0$ y $x = \\pi$" } ],
        correctId: "A", justification: "Por identidad trigonométrica de ángulo doble, podemos simplificar la función original como $f(x) = \\frac{1}{2} sen(2x)$. Derivamos para hallar los puntos críticos: $f'(x) = \\frac{1}{2} \\cdot cos(2x) \\cdot 2 = cos(2x)$. Igualamos a cero la primera derivada en el intervalo dado: $cos(2x) = 0$. El coseno se anula en los múltiplos impares de $\\frac{\\pi}{2}$, por lo tanto, $2x = \\frac{\\pi}{2} \\Rightarrow x = \\frac{\\pi}{4}$, y $2x = \\frac{3\\pi}{2} \\Rightarrow x = \\frac{3\\pi}{4}$."
    },
    {
        id: 74, text: "Una corporación de logística internacional optimiza el volumen de carga de sus contenedores. La función de rendimiento marginal está dada por la integral por partes $\\int x^2 \\cdot e^x \\, dx$. Tras aplicar el método por primera vez, vuelve a quedar una integral interna que requiere una segunda aplicación del método. ¿Cuál es esa integral interna remanente?",
        options: [ { id: "A", text: "$\\int 2x \\cdot e^x \\, dx$" }, { id: "B", text: "$\\int x \\cdot e^x \\, dx$" }, { id: "C", text: "$\\int e^x \\, dx$" } ],
        correctId: "A", justification: "Seleccionamos para la primera etapa de integración por partes: $u = x^2 \\Rightarrow du = 2x \\, dx$, y $dv = e^x \\, dx \\Rightarrow v = e^x$. Aplicando la fórmula estructurada $\\int u \\, dv = u \\cdot v - \\int v \\, du$, el desarrollo analítico nos da como resultado exacto: $x^2 \\cdot e^x - \\int e^x \\cdot 2x \\, dx$. La integral interna remanente que requiere reactivar el método es $\\int 2x \\cdot e^x \\, dx$."
    },
    {
        id: 75, text: "Un algoritmo de inteligencia artificial analiza la dispersión de datos de un servidor mediante la función racional $f(x) = \\frac{x^2 - 1}{x^3}$. El equipo de arquitectura de datos necesita saber en qué punto exacto la función tiene un valor máximo relativo para evitar la saturación del sistema. ¿En qué valor ocurre?",
        options: [ { id: "A", text: "$x = \\sqrt{3}$" }, { id: "B", text: "$x = 1$" }, { id: "C", text: "$x = \\sqrt{2}$" } ],
        correctId: "A", justification: "Reescribimos la función distribuyendo el denominador para facilitar la derivación: $f(x) = \\frac{x^2}{x^3} - \\frac{1}{x^3} = x^{-1} - x^{-3}$. Calculamos la primera derivada: $f'(x) = -1x^{-2} - (-3x^{-4}) = -\\frac{1}{x^2} + \\frac{3}{x^4}$. Igualamos a cero para hallar los puntos críticos: $\\frac{3}{x^4} = \\frac{1}{x^2} \\Rightarrow 3x^2 = x^4 \\Rightarrow x^2(x^2 - 3) = 0$. Excluyendo el cero por el dominio, los puntos críticos son $x = \\sqrt{3}$ y $x = -\\sqrt{3}$. Evaluando el cambio de signos confirmamos el máximo en $x = \\sqrt{3}$."
    },
    {
        id: 76, text: "El departamento de planeamiento urbano calcula el área de una plaza verde delimitada superiormente por la función de onda $f(x) = sen(x)$ e inferiormente por la función de onda invertida $g(x) = -sen(x)$ en el intervalo cerrado $[0; \\pi]$. ¿Cuántas unidades de área mide la plaza?",
        options: [ { id: "A", text: "$2$" }, { id: "B", text: "$4$" }, { id: "C", text: "$0$" } ],
        correctId: "B", justification: "Planteamos la integral definida restando la función techo menos la función piso:$\\int_{0}^{\\pi} (sen(x) - (-sen(x))) \\, dx = \\int_{0}^{\\pi} 2 \\cdot sen(x) \\, dx$Calculamos la primitiva de la expresión, que es $-2 \\cdot cos(x)$. Evaluamos los límites mediante la Regla de Barrow:$[-2 \\cdot cos(\\pi)] - [-2 \\cdot cos(0)] = [-2 \\cdot (-1)] - [-2 \\cdot 1] = 2 - (-2) = 2 + 2 = 4$."
    },
    {
        id: 77, text: "Un fondo de cobertura analiza la volatilidad de un activo financiero a través de una función cuya tasa de aceleración (segunda derivada) es $f''(x) = 12x^2 - 2$. Si se sabe que la primera derivada en el origen es nula ($f'(0) = 0$) y que la función pasa por el origen ($f(0) = 0$), ¿cuál es la función original de volatilidad $f(x)$?",
        options: [ { id: "A", text: "$f(x) = x^4 - x^2$" }, { id: "B", text: "$f(x) = 4x^3 - 2x$" }, { id: "C", text: "$f(x) = x^4 - 2x^2$" } ],
        correctId: "A", justification: "Integramos la segunda derivada para recuperar la primera derivada: $f'(x) = \\int (12x^2 - 2) \\, dx = 4x^3 - 2x + C_1$. Como se nos indica que $f'(0) = 0$, la primera constante de integración es $C_1 = 0$. Ahora, volvemos a integrar para hallar la función original: $f(x) = \\int (4x^3 - 2x) \\, dx = x^4 - x^2 + C_2$. Como la función pasa por el origen ($f(0) = 0$), la segunda constante es $C_2 = 0$. La función es $x^4 - x^2$."
    },
    {
        id: 78, text: "Una empresa de e-commerce analiza la velocidad de carga de su servidor. El comportamiento crítico viene determinado por el límite con indeterminación del tipo lógicamatemática: $\\lim_{x \\to 0} \\frac{1 - cos^2(x)}{x^2}$. ¿A qué valor finito converge de forma exacta?",
        options: [ { id: "A", text: "$0$" }, { id: "B", text: "$1$" }, { id: "C", text: "No existe." } ],
        correctId: "B", justification: "Aplicamos de forma directa la identidad trigonométrica fundamental de tus apuntes ($sen^2(x) + cos^2(x) = 1$), lo que nos permite sustituir el numerador de la expresión: $1 - cos^2(x) = sen^2(x)$. El límite se reescribe de la siguiente manera: $\\lim_{x \\to 0} \\frac{sen^2(x)}{x^2} = \\lim_{x \\to 0} \\left(\\frac{sen(x)}{x}\\right)^2$. Sabiendo que el límite fundamental interno tiende a 1, resolvemos la potencia: $1^2 = 1$."
    },
    {
        id: 79, text: "Un equipo de ingenieros químicos optimiza el aislamiento térmico de un reactor. La variación de temperatura responde a la integral por sustitución avanzada $\\int x \\cdot \\sqrt{x - 1} \\, dx$. Si realizamos un cambio de variable eligiendo $u = x - 1$ (lo que implica que $x = u + 1$ y $dx = du$), ¿en qué expresión integrada en términos de $u$ se transforma el sistema?",
        options: [ { id: "A", text: "$\\int (u^{3/2} + u^{1/2}) \\, du$" }, { id: "B", text: "$\\int u^{3/2} \\, du$" }, { id: "C", text: "$\\int (u^2 + u) \\, du$" } ],
        correctId: "A", justification: "Reemplazamos los componentes de la sustitución propuesta dentro de la integral original: $\\int (u + 1) \\cdot \\sqrt{u} \\, du$. Expresamos la raíz cuadrada como una potencia fraccionaria: $\\int (u + 1) \\cdot u^{1/2} \\, du$. Aplicando la propiedad distributiva algebraica término a término obtenemos: $\\int (u \\cdot u^{1/2} + 1 \\cdot u^{1/2}) \\, du = \\int (u^{3/2} + u^{1/2}) \\, du$."
    },
    {
        id: 80, text: "Una multinacional de logística evalúa la degradación de sus neumáticos en flotas de camiones. La función de desgaste acumulado es $f(x) = \\frac{x^2}{x-1}$. El auditor técnico necesita conocer la ecuación de la Asíntota Oblicua ($y = mx + b$) de este modelo para predecir el desgaste a muy largo plazo ($x \\to \\infty$). ¿Cuál es?",
        options: [ { id: "A", text: "$y = x$" }, { id: "B", text: "$y = x + 1$" }, { id: "C", text: "$y = x - 1$" } ],
        correctId: "B", justification: "Para hallar una asíntota oblicua calculamos primero la pendiente $m = \\lim_{x \\to \\infty} \\frac{f(x)}{x} = \\lim_{x \\to \\infty} \\frac{x^2}{x^2 - x} = 1$. Ahora calculamos la ordenada al origen $b = \\lim_{x \\to \\infty} (f(x) - mx) = \\lim_{x \\to \\infty} \\left(\\frac{x^2}{x-1} - x\\right)$. Resolviendo la resta de fracciones: $\\lim_{x \\to \\infty} \\frac{x^2 - x^2 + x}{x-1} = \\lim_{x \\to \\infty} \\frac{x}{x-1} = 1$. Juntando los parámetros en la ecuación de la recta de la asíntota obtenemos de forma exacta: $y = x + 1$."
    }
];
