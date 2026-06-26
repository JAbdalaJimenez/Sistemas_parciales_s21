window.algebraQuestions = [
    {
        "id": 1,
        "text": "Si una matriz cuadrada $A$ de orden 3 tiene un determinante igual a 5 ($|A| = 5$), ¿cuál es el determinante de su transpuesta $|A^T|$?",
        "options": [
            {
                "id": "A",
                "text": "-5"
            },
            {
                "id": "B",
                "text": "5"
            },
            {
                "id": "C",
                "text": "15"
            },
            {
                "id": "D",
                "text": "1/5"
            }
        ],
        "correctId": "B",
        "justification": "Por propiedades de los determinantes, el determinante de la matriz transpuesta es exactamente igual al determinante de la matriz original ($|A^T| = |A|$)."
    },
    {
        "id": 2,
        "text": "Si multiplicamos todos los elementos de una matriz cuadrada $A$ de orden $n=3$ por una constante $\\alpha = 2$, sabiendo que $|A| = 10$, el determinante de la nueva matriz $|2 \\cdot A|$ será:",
        "options": [
            {
                "id": "A",
                "text": "20"
            },
            {
                "id": "B",
                "text": "30"
            },
            {
                "id": "C",
                "text": "80"
            },
            {
                "id": "D",
                "text": "60"
            }
        ],
        "correctId": "C",
        "justification": "Si se multiplica a todos los elementos de una matriz de orden $n$ por una constante $\\alpha$, el determinante queda multiplicado por $\\alpha^n$. En este caso, $2^3 \\cdot 10 = 8 \\cdot 10 = 80$."
    },
    {
        "id": 3,
        "text": "¿Qué le ocurre al determinante de una matriz si se intercambian entre sí dos de sus filas paralelas?",
        "options": [
            {
                "id": "A",
                "text": "No se modifica."
            },
            {
                "id": "B",
                "text": "Se multiplica por cero."
            },
            {
                "id": "C",
                "text": "Cambia de signo."
            },
            {
                "id": "D",
                "text": "Se eleva al cuadrado."
            }
        ],
        "correctId": "C",
        "justification": "Por propiedad, si en una matriz se cambian dos líneas paralelas entre sí (filas o columnas), el determinante cambia de signo."
    },
    {
        "id": 4,
        "text": "Si en un examen te presentan una matriz rectangular de orden $3 \\times 4$, ¿cuál es su determinante?",
        "options": [
            {
                "id": "A",
                "text": "Es igual a 0."
            },
            {
                "id": "B",
                "text": "No se puede calcular porque el determinante está asociado únicamente a matrices cuadradas."
            },
            {
                "id": "C",
                "text": "Es igual al rango de la matriz."
            },
            {
                "id": "D",
                "text": "Depende de los términos independientes."
            }
        ],
        "correctId": "B",
        "justification": "La definición formal establece que el determinante es un número real asociado única y exclusivamente a una matriz cuadrada."
    },
    {
        "id": 5,
        "text": "Dada una matriz triangular superior $A$ de orden 3 cuyos elementos en la diagonal principal son $a_{11}=2$, $a_{22}=-3$ y $a_{33}=4$, su determinante es:",
        "options": [
            {
                "id": "A",
                "text": "3"
            },
            {
                "id": "B",
                "text": "0"
            },
            {
                "id": "C",
                "text": "-24"
            },
            {
                "id": "D",
                "text": "24"
            }
        ],
        "correctId": "C",
        "justification": "El determinante de una matriz diagonal o de una matriz triangular es igual al producto de los elementos de la diagonal principal. En este caso, $2 \\cdot (-3) \\cdot 4 = -24$."
    },
    {
        "id": 6,
        "text": "Si a la fila 2 de una matriz cuadrada $A$ le sumamos la fila 1 previamente multiplicada por una constante $\\alpha = 5$, ¿qué le ocurre al valor del determinante de la nueva matriz resultante?",
        "options": [
            {
                "id": "A",
                "text": "Queda multiplicado por 5."
            },
            {
                "id": "B",
                "text": "No se modifica."
            },
            {
                "id": "C",
                "text": "Cambia de signo."
            },
            {
                "id": "D",
                "text": "Se vuelve cero."
            }
        ],
        "correctId": "B",
        "justification": "Si a los elementos de una línea cualquiera les sumamos los elementos de otra línea paralela multiplicada por una constante, el determinante no se modifica."
    },
    {
        "id": 7,
        "text": "El determinante de una matriz cuadrada es cero si y solo si sus líneas paralelas constituyen un conjunto de vectores:",
        "options": [
            {
                "id": "A",
                "text": "Linealmente Independientes (L.I.)."
            },
            {
                "id": "B",
                "text": "Linealmente Dependientes (L.D.)."
            },
            {
                "id": "C",
                "text": "Ortogonales."
            },
            {
                "id": "D",
                "text": "Nulos."
            }
        ],
        "correctId": "B",
        "justification": "La propiedad indica que el determinante es cero si y solo si sus líneas paralelas constituyen un conjunto de vectores linealmente dependientes (L.D.)."
    },
    {
        "id": 8,
        "text": "¿Cuál de las siguientes situaciones garantiza que el determinante de una matriz cuadrada sea igual a cero de forma inmediata?",
        "options": [
            {
                "id": "A",
                "text": "Que tenga todos los elementos de la diagonal principal iguales a 1."
            },
            {
                "id": "B",
                "text": "Que tenga una línea completa nula (de ceros)."
            },
            {
                "id": "C",
                "text": "Que sea una matriz invertible."
            },
            {
                "id": "D",
                "text": "Que sea una matriz transpuesta."
            }
        ],
        "correctId": "B",
        "justification": "El determinante será cero si la matriz tiene una línea nula, si tiene dos líneas proporcionales o si una línea es combinación lineal de otras."
    },
    {
        "id": 9,
        "text": "Dadas dos matrices cuadradas del mismo orden $B$ y $C$, donde $|B| = 4$ y $|C| = -2$, el determinante del producto $|B \\cdot C|$ es:",
        "options": [
            {
                "id": "A",
                "text": "2"
            },
            {
                "id": "B",
                "text": "-8"
            },
            {
                "id": "C",
                "text": "-2"
            },
            {
                "id": "D",
                "text": "8"
            }
        ],
        "correctId": "B",
        "justification": "El determinante de un producto de matrices cuadradas es igual al producto de los determinantes de dichas matrices ($|B \\cdot C| = |B| \\cdot |C|$). Por ende, $4 \\cdot (-2) = -8$."
    },
    {
        "id": 10,
        "text": "Si multiplicamos una sola fila de una matriz $A$ por una constante $\\alpha = -3$, sabiendo que el determinante original era $|A| = 5$, el nuevo determinante será:",
        "options": [
            {
                "id": "A",
                "text": "-15"
            },
            {
                "id": "B",
                "text": "-45"
            },
            {
                "id": "C",
                "text": "5"
            },
            {
                "id": "D",
                "text": "-5"
            }
        ],
        "correctId": "A",
        "justification": "Si se multiplica a todos los elementos de una sola línea (fila o columna) de una matriz por una constante, el determinante queda multiplicado por dicha constante. Entonces, $-3 \\cdot 5 = -15$."
    },
    {
        "id": 11,
        "text": "La Regla de Cramer es un método matricial utilizable para resolver sistemas de ecuaciones lineales que cumplen con la siguiente condición estructural básica:",
        "options": [
            {
                "id": "A",
                "text": "Deben tener más ecuaciones que incógnitas."
            },
            {
                "id": "B",
                "text": "Deben ser sistemas donde el número de ecuaciones es igual al número de incógnitas (sistemas cuadrados)."
            },
            {
                "id": "C",
                "text": "Deben ser sistemas homogéneos obligatoriamente."
            },
            {
                "id": "D",
                "text": "Deben poseer una matriz de coeficientes rectangular."
            }
        ],
        "correctId": "B",
        "justification": "Para aplicar este método, el número de ecuaciones debe ser igual al número de incógnitas, conformando un sistema cuadrado."
    },
    {
        "id": 12,
        "text": "Para poder asegurar que un sistema cuadrado tiene una solución única mediante la Regla de Cramer, el determinante de la matriz de coeficientes ($\\Delta$) debe ser:",
        "options": [
            {
                "id": "A",
                "text": "Igual a cero."
            },
            {
                "id": "B",
                "text": "Menor a cero."
            },
            {
                "id": "C",
                "text": "Distinto de cero ($\\Delta \\neq 0$)."
            },
            {
                "id": "D",
                "text": "Mayor a uno."
            }
        ],
        "correctId": "C",
        "justification": "El sistema tendrá solución única (compatible determinado) si y solo si el determinante asociado a la matriz de coeficientes es distinto de cero."
    },
    {
        "id": 13,
        "text": "En la Regla de Cramer, ¿cómo se construye el determinante modificado $\\Delta_y$ correspondiente a la variable $y$?",
        "options": [
            {
                "id": "A",
                "text": "Multiplicando la matriz de coeficientes por el vector de términos independientes."
            },
            {
                "id": "B",
                "text": "Reemplazando la columna de los coeficientes de la variable $y$ por el vector de términos independientes."
            },
            {
                "id": "C",
                "text": "Reemplazando la fila 1 de la matriz por ceros."
            },
            {
                "id": "D",
                "text": "Calculando la transpuesta de la matriz de coeficientes."
            }
        ],
        "correctId": "B",
        "justification": "El determinante $\\Delta_y$ se obtiene de reemplazar específicamente la columna de los coeficientes de la variable $y$ por los términos independientes del sistema."
    },
    {
        "id": 14,
        "text": "Si al intentar aplicar la Regla de Cramer en un sistema de $3 \\times 3$ obtenemos que $\\Delta = 0$, y además los determinantes modificados son $\\Delta_x = 0$, $\\Delta_y = 0$ y $\\Delta_z = 0$, podemos concluir que:",
        "options": [
            {
                "id": "A",
                "text": "El sistema tiene una solución única."
            },
            {
                "id": "B",
                "text": "El sistema no tiene solución (es incompatible)."
            },
            {
                "id": "C",
                "text": "El sistema tiene un número infinito de soluciones."
            },
            {
                "id": "D",
                "text": "Se copió mal un número en la matriz."
            }
        ],
        "correctId": "C",
        "justification": "Si el determinante principal es cero y todos los determinantes modificados también son cero, el sistema tiene un número infinito de soluciones (SCI)."
    },
    {
        "id": 15,
        "text": "Si en un sistema de ecuaciones cuadrados encontrás que $\\Delta = 0$ pero al menos uno de los determinantes modificados (por ejemplo, $\\Delta_x$) es distinto de cero ($\\Delta_x \\neq 0$), el sistema se clasifica como:",
        "options": [
            {
                "id": "A",
                "text": "Compatible Determinado."
            },
            {
                "id": "B",
                "text": "Incompatible (no tiene solución)."
            },
            {
                "id": "C",
                "text": "Compatible Indeterminado."
            },
            {
                "id": "D",
                "text": "Homogéneo Trivial."
            }
        ],
        "correctId": "B",
        "justification": "Si $\\Delta = 0$, el sistema no tiene solución única. Al haber un determinante modificado distinto de cero, la división matemática daría un número dividido cero (indefinido), lo que caracteriza a un sistema Incompatible (SI)."
    },
    {
        "id": 16,
        "text": "¿Cuáles de los siguientes cambios representa una operación elemental por fila válida sobre una matriz?",
        "options": [
            {
                "id": "A",
                "text": "Sumar una constante no nula a cada elemento de una fila."
            },
            {
                "id": "B",
                "text": "Multiplicar una fila por una constante igual a cero."
            },
            {
                "id": "C",
                "text": "Intercambiar la posición de dos filas paralelas."
            },
            {
                "id": "D",
                "text": "Multiplicar una fila por otra fila paralela."
            }
        ],
        "correctId": "C",
        "justification": "Las operaciones elementales por fila permitidas son tres: intercambio de dos filas, multiplicación de una fila por una constante no nula, y adición a una fila de otra paralela multiplicada por un escalar."
    },
    {
        "id": 17,
        "text": "Si te dicen que la operación elemental realizada es $f_2 : f_2 + (-2) \\cdot f_1$, ¿cuál es la fila que resulta modificada en la matriz resultante?",
        "options": [
            {
                "id": "A",
                "text": "La fila 1."
            },
            {
                "id": "B",
                "text": "La fila 2."
            },
            {
                "id": "C",
                "text": "Ambas filas cambian sus valores."
            },
            {
                "id": "D",
                "text": "Ninguna, el determinante se mantiene igual."
            }
        ],
        "correctId": "B",
        "justification": "En la notación de operaciones elementales de adición, la fila que se modifica es la que recibe la suma (en este caso la fila 2), mientras que la fila utilizada como pivote (fila 1) permanece intacta."
    },
    {
        "id": 18,
        "text": "¿Qué es una matriz elemental?",
        "options": [
            {
                "id": "A",
                "text": "Cualquier matriz que tiene ceros y unos en sus elementos."
            },
            {
                "id": "B",
                "text": "Una matriz cuadrada que surge de aplicar una única operación elemental por fila a la matriz identidad."
            },
            {
                "id": "C",
                "text": "La matriz inversa de una matriz rectangular."
            },
            {
                "id": "D",
                "text": "Una matriz que tiene determinante igual a cero."
            }
        ],
        "correctId": "B",
        "justification": "Se denominan matrices elementales a aquellas que se obtienen a partir de la matriz identidad realizando solo una de las operaciones elementales por fila."
    },
    {
        "id": 19,
        "text": "Dada la siguiente matriz $E = \\begin{pmatrix} 1 & 0 \\\\ 0 & -3 \\end{pmatrix}$, ¿podemos afirmar que es una matriz elemental?",
        "options": [
            {
                "id": "A",
                "text": "No, porque tiene un número negativo."
            },
            {
                "id": "B",
                "text": "Sí, porque surge de aplicar la operación elemental de multiplicar la fila 2 de la identidad por la constante -3."
            },
            {
                "id": "C",
                "text": "No, porque no es equivalente a la identidad."
            },
            {
                "id": "D",
                "text": "Sí, porque su determinante es cero."
            }
        ],
        "correctId": "B",
        "justification": "La matriz identidad de $2 \\times 2$ es $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$. Si multiplicamos su fila 2 por -3 (operación elemental válida), obtenemos exactamente la matriz $E$, por lo que califica como matriz elemental."
    },
    {
        "id": 20,
        "text": "Dada la matriz $H = \\begin{pmatrix} 0 & 1 \\\\ -3 & 0 \\end{pmatrix}$, ¿por qué el texto afirma que NO es una matriz elemental, aunque sea equivalente a la identidad?",
        "options": [
            {
                "id": "A",
                "text": "Porque su determinante es nulo."
            },
            {
                "id": "B",
                "text": "Porque no es una matriz cuadrada."
            },
            {
                "id": "C",
                "text": "Porque para llegar a ella desde la identidad se requiere efectuar más de una operación elemental por fila."
            },
            {
                "id": "D",
                "text": "Porque no tiene un pivote igual a 1 en la primera fila."
            }
        ],
        "correctId": "C",
        "justification": "Una matriz elemental debe surgir de efectuar una única operación elemental sobre la identidad. Para transformar la identidad en $H$, se debió hacer un intercambio de filas y además una multiplicación por un escalar, por ende, es equivalente pero no elemental."
    },
    {
        "id": 21,
        "text": "Se dice que una matriz cuadrada $A$ es \"regular\" si cumple con la condición de tener:",
        "options": [
            {
                "id": "A",
                "text": "Un determinante igual a cero."
            },
            {
                "id": "B",
                "text": "Un determinante distinto de cero, lo que implica que admite matriz inversa."
            },
            {
                "id": "C",
                "text": "Únicamente números reales positivos en su interior."
            },
            {
                "id": "D",
                "text": "El mismo número de filas que de columnas únicamente."
            }
        ],
        "correctId": "B",
        "justification": "Una matriz es regular si su determinante es distinto de cero, lo cual es la condición necesaria y suficiente para que sea inversible (admita inversa)."
    },
    {
        "id": 22,
        "text": "Si una matriz cuadrada $A$ tiene un determinante igual a cero ($|A| = 0$), se la denomina:",
        "options": [
            {
                "id": "A",
                "text": "Regular."
            },
            {
                "id": "B",
                "text": "Triangular."
            },
            {
                "id": "C",
                "text": "Singular."
            },
            {
                "id": "D",
                "text": "Elemental."
            }
        ],
        "correctId": "C",
        "justification": "Por definición, se dice que una matriz $A$ es singular si su determinante es igual a cero. Las matrices singulares no tienen inversa."
    },
    {
        "id": 23,
        "text": "¿Cuál es la propiedad fundamental que define la relación entre una matriz cuadrada $A$ y su matriz inversa $A^{-1}$?",
        "options": [
            {
                "id": "A",
                "text": "$A + A^{-1} = I$"
            },
            {
                "id": "B",
                "text": "$A \\cdot A^{-1} = A^{-1} \\cdot A = I$"
            },
            {
                "id": "C",
                "text": "$A \\cdot A^{-1} = \\emptyset$"
            },
            {
                "id": "D",
                "text": "$(A^{-1})^{-1} = I$"
            }
        ],
        "correctId": "B",
        "justification": "Por definición de matriz inversa, el producto de una matriz por su inversa en cualquier orden debe dar como resultado la matriz identidad ($I$)."
    },
    {
        "id": 24,
        "text": "Por propiedad de la inversa de un producto de matrices inversibles, la expresión $(A \\cdot B)^{-1}$ es igual a:",
        "options": [
            {
                "id": "A",
                "text": "$A^{-1} \\cdot B^{-1}$"
            },
            {
                "id": "B",
                "text": "$B^{-1} \\cdot A^{-1}$"
            },
            {
                "id": "C",
                "text": "$(B \\cdot A)^T$"
            },
            {
                "id": "D",
                "text": "$A \\cdot B \\cdot I$"
            }
        ],
        "correctId": "B",
        "justification": "La inversa de un producto de matrices inversibles es igual al producto de las inversas en el orden invertido: $(A \\cdot B)^{-1} = B^{-1} \\cdot A^{-1}$."
    },
    {
        "id": 25,
        "text": "Si el determinante de una matriz regular es $|A| = 4$, el determinante de su matriz inversa $|A^{-1}|$ será:",
        "options": [
            {
                "id": "A",
                "text": "-4"
            },
            {
                "id": "B",
                "text": "1/4"
            },
            {
                "id": "C",
                "text": "16"
            },
            {
                "id": "D",
                "text": "2"
            }
        ],
        "correctId": "B",
        "justification": "Por propiedad, el determinante de la matriz inversa es igual al recíproco del determinante de la matriz original: $|A^{-1}| = \\frac{1}{|A|}$. En este caso, $1/4$."
    },
    {
        "id": 26,
        "text": "Dada una matriz diagonal regular cuyos elementos en la diagonal principal son $d_{11}=3$ y $d_{22}=-4$, su matriz inversa tendrá en la diagonal principal los valores:",
        "options": [
            {
                "id": "A",
                "text": "-3 y 4"
            },
            {
                "id": "B",
                "text": "3 y -4"
            },
            {
                "id": "C",
                "text": "1/3 y -1/4"
            },
            {
                "id": "D",
                "text": "9 y 16"
            }
        ],
        "correctId": "C",
        "justification": "La inversa de una matriz diagonal regular es otra matriz diagonal que tiene en su diagonal principal a los recíprocos de los elementos originales. Por lo tanto, quedan $1/3$ y $-1/4$."
    },
    {
        "id": 27,
        "text": "El método de Jordan para obtener la inversa de una matriz se basa en armar una matriz ampliada con la estructura:",
        "options": [
            {
                "id": "A",
                "text": "$(A | B)$, donde $B$ es el vector de términos independientes."
            },
            {
                "id": "B",
                "text": "$(A | I)$, donde $I$ es la matriz identidad del mismo orden."
            },
            {
                "id": "C",
                "text": "$(A | A^T)$, donde $A^T$ es la transpuesta."
            },
            {
                "id": "D",
                "text": "$(I | B)$, donde $I$ es la identidad."
            }
        ],
        "correctId": "B",
        "justification": "El procedimiento parte de la matriz $A$ ampliada con la matriz identidad del mismo orden $(A | I)$, y se le aplican operaciones elementales hasta lograr que la izquierda se convierta en la identidad, quedando la inversa a la derecha."
    },
    {
        "id": 28,
        "text": "Si estás resolviendo un sistema compatible determinado expresado como $A \\cdot X = B$ usando el método de la inversa, la solución para el vector de incógnitas $X$ se calcula como:",
        "options": [
            {
                "id": "A",
                "text": "$X = B \\cdot A^{-1}$"
            },
            {
                "id": "B",
                "text": "$X = A^{-1} \\cdot B$"
            },
            {
                "id": "C",
                "text": "$X = A \\cdot B$"
            },
            {
                "id": "D",
                "text": "$X = \\frac{B}{A}$"
            }
        ],
        "correctId": "B",
        "justification": "Multiplicando por la izquierda por $A^{-1}$ en ambos miembros de la ecuación matricial, se llega a que la solución única está dada por $X = A^{-1} \\cdot B$."
    },
    {
        "id": 29,
        "text": "Si en un sistema de ecuaciones de orden 3 se verifica que la fila 3 es una combinación lineal de las filas 1 y 2 ($f_3 = 2 \\cdot f_1 + f_2$), ¿se puede aplicar el método de la inversa para resolverlo?",
        "options": [
            {
                "id": "A",
                "text": "Sí, porque el sistema tiene 3 ecuaciones."
            },
            {
                "id": "B",
                "text": "No, porque al ser una fila combinación lineal de las otras, el determinante de $A$ es cero, no admite inversa y el método falla."
            },
            {
                "id": "C",
                "text": "Sí, porque las operaciones elementales acomodan la fila."
            },
            {
                "id": "D",
                "text": "Depende de los valores de los términos independientes."
            }
        ],
        "correctId": "B",
        "justification": "Si una fila es combinación lineal de otras paralelas, el conjunto es linealmente dependiente (L.D.), lo que hace que el determinante de la matriz sea cero (matriz singular), impidiendo la existencia de $A^{-1}$."
    },
    {
        "id": 30,
        "text": "¿Cuál de las siguientes expresiones teóricas es FALSA respecto a las propiedades de las matrices inversas?",
        "options": [
            {
                "id": "A",
                "text": "$((A)^{-1})^{-1} = A$"
            },
            {
                "id": "B",
                "text": "$(k \\cdot A)^{-1} = \\frac{1}{k} \\cdot A^{-1}$ (con $k \\neq 0$)"
            },
            {
                "id": "C",
                "text": "$(A \\cdot B)^{-1} = A^{-1} \\cdot B^{-1}$"
            },
            {
                "id": "D",
                "text": "$A \\cdot A^{-1} = I$"
            }
        ],
        "correctId": "C",
        "justification": "Como se vio en la propiedad, $(A \\cdot B)^{-1}$ debe dar el producto con el orden invertido ($B^{-1} \\cdot A^{-1}$). La opción C muestra el orden directo, lo cual es matemáticamente incorrecto en matrices ya que el producto no es conmutativo general."
    },
    {
        "id": 31,
        "text": "El rango de una matriz $A$ de orden $m \\times n$ se define formalmente como:",
        "options": [
            {
                "id": "A",
                "text": "El número total de elementos no nulos de la matriz."
            },
            {
                "id": "B",
                "text": "El número máximo de líneas paralelas (filas o columnas) linealmente independientes que posee la matriz."
            },
            {
                "id": "C",
                "text": "La multiplicación del número de filas por el número de columnas."
            },
            {
                "id": "D",
                "text": "El valor de su determinante principal."
            }
        ],
        "correctId": "B",
        "justification": "El rango de una matriz está dado de forma estricta por el número máximo de líneas paralelas linealmente independientes que posee."
    },
    {
        "id": 32,
        "text": "Si una matriz escalonada y reducida por filas tiene dos filas con valores numéricos y una tercera fila compuesta completamente por ceros (fila nula), su rango es:",
        "options": [
            {
                "id": "A",
                "text": "3"
            },
            {
                "id": "B",
                "text": "1"
            },
            {
                "id": "C",
                "text": "2"
            },
            {
                "id": "D",
                "text": "0"
            }
        ],
        "correctId": "C",
        "justification": "Al llevar una matriz a su forma escalonada, el rango es exactamente igual a la cantidad de filas no nulas de dicha matriz. Como hay dos filas no nulas, el rango es 2."
    },
    {
        "id": 33,
        "text": "Si tenemos una matriz rectangular de orden $4 \\times 3$, ¿cuál es el rango máximo teórico que podría llegar a tener?",
        "options": [
            {
                "id": "A",
                "text": "4"
            },
            {
                "id": "B",
                "text": "3"
            },
            {
                "id": "C",
                "text": "7"
            },
            {
                "id": "D",
                "text": "1"
            }
        ],
        "correctId": "B",
        "justification": "Por propiedad, el rango de una matriz no puede exceder al mínimo entre el número de filas y el número de columnas que posee ($r(A) \\le \\min(m, n)$). El mínimo entre 4 y 3 es 3."
    },
    {
        "id": 34,
        "text": "¿Qué le sucede al rango de una matriz si realizamos operaciones elementales por fila sobre ella?",
        "options": [
            {
                "id": "A",
                "text": "El rango aumenta según el valor del escalar utilizado."
            },
            {
                "id": "B",
                "text": "El rango disminuye si se intercambian las filas."
            },
            {
                "id": "C",
                "text": "Las matrices equivalentes por filas tienen el mismo rango (no cambia)."
            },
            {
                "id": "D",
                "text": "El rango se vuelve cero automáticamente."
            }
        ],
        "correctId": "C",
        "justification": "Un teorema fundamental establece que al realizar operaciones elementales por fila la matriz cambia de forma pero conserva de manera intacta su rango."
    },
    {
        "id": 35,
        "text": "¿Cuál es el rango de la matriz identidad de orden 3 ($I_3$)?",
        "options": [
            {
                "id": "A",
                "text": "1"
            },
            {
                "id": "B",
                "text": "0"
            },
            {
                "id": "C",
                "text": "3"
            },
            {
                "id": "D",
                "text": "Indeterminado."
            }
        ],
        "correctId": "C",
        "justification": "Por propiedad, el rango de la matriz identidad es siempre igual al orden de la misma: $r(I_n) = n$. Para $I_3$, el rango es 3."
    },
    {
        "id": 36,
        "text": "Si calculamos el rango de una matriz $A$ y luego el rango de su transpuesta $A^T$, podemos asegurar que:",
        "options": [
            {
                "id": "A",
                "text": "$r(A) > r(A^T)$"
            },
            {
                "id": "B",
                "text": "$r(A) = r(A^T)$"
            },
            {
                "id": "C",
                "text": "$r(A) < r(A^T)$"
            },
            {
                "id": "D",
                "text": "El rango de la transpuesta siempre es igual al orden de la matriz."
            }
        ],
        "correctId": "B",
        "justification": "El rango de una matriz es igual al rango de su transpuesta ($r(A) = r(A^T)$), ya que el rango fila es matemáticamente igual al rango columna."
    },
    {
        "id": 37,
        "text": "Si el determinante de una matriz cuadrada de orden $n=3$ es igual a cero ($|A| = 0$), ¿qué podemos afirmar sobre su rango?",
        "options": [
            {
                "id": "A",
                "text": "Que su rango es máximo e igual a 3."
            },
            {
                "id": "B",
                "text": "Que su rango es estrictamente menor a 3 ($r(A) < 3$)."
            },
            {
                "id": "C",
                "text": "Que su rango es igual a 0."
            },
            {
                "id": "D",
                "text": "Que no se puede calcular el rango."
            }
        ],
        "correctId": "B",
        "justification": "Si una matriz es singular ($|A| = 0$), el conjunto de vectores filas es linealmente dependiente, lo que implica que su rango es menor que el orden de la matriz ($r(A) < n$)."
    },
    {
        "id": 38,
        "text": "¿Qué es la \"matriz ampliada\" de un sistema de ecuaciones lineales?",
        "options": [
            {
                "id": "A",
                "text": "La matriz que resulta de multiplicar la matriz de coeficientes por la transpuesta."
            },
            {
                "id": "B",
                "text": "La matriz que surge de agregar la columna del vector de términos independientes a la derecha de la matriz de coeficientes."
            },
            {
                "id": "C",
                "text": "Una matriz que tiene el doble de filas que la matriz original."
            },
            {
                "id": "D",
                "text": "La matriz identidad que se usa en el método de la inversa."
            }
        ],
        "correctId": "B",
        "justification": "La matriz ampliada del sistema (denotada $A|B$) surge de agregar el vector de términos independientes a la matriz de coeficientes."
    },
    {
        "id": 39,
        "text": "Dos sistemas de ecuaciones lineales se clasifican formalmente como \"equivalentes\" si cumplen con la condición de tener:",
        "options": [
            {
                "id": "A",
                "text": "El mismo número de ecuaciones y de incógnitas."
            },
            {
                "id": "B",
                "text": "Los mismos coeficientes numéricos exactos."
            },
            {
                "id": "C",
                "text": "El mismo conjunto solución."
            },
            {
                "id": "D",
                "text": "Matrices de coeficientes simétricas."
            }
        ],
        "correctId": "C",
        "justification": "Dos o más sistemas se dicen equivalentes si y solo si comparten exactamente el mismo conjunto solución."
    },
    {
        "id": 40,
        "text": "Si un sistema de ecuaciones tiene la estructura $A \\cdot X = B$ y el vector de términos independientes $B$ está compuesto completamente por ceros ($B = \\emptyset$), el sistema se denomina:",
        "options": [
            {
                "id": "A",
                "text": "No homogéneo."
            },
            {
                "id": "B",
                "text": "Cuadrado regular."
            },
            {
                "id": "C",
                "text": "Homogéneo."
            },
            {
                "id": "D",
                "text": "Incompatible."
            }
        ],
        "correctId": "C",
        "justification": "Un sistema es homogéneo si sus términos independientes son todos iguales a cero."
    },
    {
        "id": 41,
        "text": "El enunciado del Teorema de Rouché-Frobenius establece textualmente que un sistema de ecuaciones lineales será compatible (tiene solución) si y solo si:",
        "options": [
            {
                "id": "A",
                "text": "El determinante de la matriz de coeficientes es mayor a cero."
            },
            {
                "id": "B",
                "text": "El rango de la matriz de coeficientes es igual al rango de la matriz ampliada ($r(A) = r(A|B)$)."
            },
            {
                "id": "C",
                "text": "El sistema es cuadrado y regular."
            },
            {
                "id": "D",
                "text": "Tiene el mismo número de ecuaciones que de incógnitas."
            }
        ],
        "correctId": "B",
        "justification": "El teorema indica que el sistema es compatible si y solo si el rango de la matriz de coeficientes coincide con el rango de la matriz ampliada correspondiente."
    },
    {
        "id": 42,
        "text": "Según el corolario del Teorema de Rouché-Frobenius, ¿cuándo un sistema es Compatible Determinado (solución única)?",
        "options": [
            {
                "id": "A",
                "text": "Cuando $r(A) = r(A|"
            },
            {
                "id": "B",
                "text": "< n$ (siendo $n$ el número de incógnitas).B) Cuando $r(A) < r(A|B)$."
            },
            {
                "id": "C",
                "text": "Cuando el rango de la matriz del sistema y de la ampliada es igual al número de incógnitas ($r(A) = r(A|B) = n$)."
            },
            {
                "id": "D",
                "text": "Cuando el sistema es homogéneo únicamente."
            }
        ],
        "correctId": "C",
        "justification": "El sistema tiene solución única (compatible determinado) si y solo si ambos rangos son iguales y además coinciden con el número total de incógnitas del problema."
    },
    {
        "id": 43,
        "text": "Si al reducir la matriz ampliada de un sistema obtenés que $r(",
        "options": [
            {
                "id": "A",
                "text": "= 2$ y $r(A|"
            },
            {
                "id": "B",
                "text": "= 3$, ¿cómo se clasifica el sistema según el teorema?\nA) Compatible Determinado.B) Compatible Indeterminado."
            },
            {
                "id": "C",
                "text": "Incompatible (no tiene solución)."
            },
            {
                "id": "D",
                "text": "Homogéneo."
            }
        ],
        "correctId": "C",
        "justification": "Si el rango de la matriz de coeficientes es menor que el rango de la matriz ampliada ($r(A) < r(A|B)$), el sistema se clasifica como incompatible, es decir, carece de solución."
    },
    {
        "id": 44,
        "text": "Si un sistema de 3 incógnitas tiene rangos $r(",
        "options": [
            {
                "id": "A",
                "text": "= r(A|"
            },
            {
                "id": "B",
                "text": "= 2$, el sistema es:\nA) Compatible Determinado.B) Compatible Indeterminado (tiene infinitas soluciones)."
            },
            {
                "id": "C",
                "text": "Incompatible."
            },
            {
                "id": "D",
                "text": "Singular elemental."
            }
        ],
        "correctId": "B",
        "justification": "Al ser los rangos iguales, el sistema tiene solución (compatible), pero como el valor numérico del rango (2) es menor que el número de incógnitas ($n=3$), el sistema cuenta con infinitas soluciones (indeterminado)."
    },
    {
        "id": 45,
        "text": "¿Por qué es imposible que en un análisis de sistemas se dé el caso de que $r(",
        "options": [
            {
                "id": "A",
                "text": "> r(A|B)$?\nA) Porque la matriz de coeficientes siempre tiene más columnas."
            },
            {
                "id": "B",
                "text": "Porque la matriz ampliada contiene a toda la matriz de coeficientes más una columna extra, por lo que su rango nunca puede ser menor."
            },
            {
                "id": "C",
                "text": "Porque el teorema de Rouché-Frobenius lo prohíbe explícitamente."
            },
            {
                "id": "D",
                "text": "Porque los términos independientes nunca valen cero."
            }
        ],
        "correctId": "B",
        "justification": "Al agregar una columna a una matriz, el número de vectores linealmente independientes puede mantenerse igual o aumentar, pero jamás disminuir. Por lo tanto, el rango de la ampliada siempre es mayor o igual al rango de $A$."
    },
    {
        "id": 46,
        "text": "Un sistema lineal de tipo Homogéneo ($A \\cdot X = \\emptyset$) tiene la particularidad de que:",
        "options": [
            {
                "id": "A",
                "text": "Siempre es incompatible."
            },
            {
                "id": "B",
                "text": "Nunca puede ser incompatible, ya que los rangos de $A$ y de la ampliada siempre van a ser exactamente iguales."
            },
            {
                "id": "C",
                "text": "Solo admite soluciones negativas."
            },
            {
                "id": "D",
                "text": "No se puede resolver por el método de Gauss-Jordan."
            }
        ],
        "correctId": "B",
        "justification": "En un sistema homogéneo, agregar una columna llena de ceros a la matriz de coeficientes no añade ningún vector linealmente independiente. Por ende, $r(A)$ siempre es igual a $r(A|B)$, garantizando que el sistema sea siempre compatible (admita al menos la solución trivial)."
    },
    {
        "id": 47,
        "text": "El método de resolución de sistemas de Gauss-Jordan consiste mecánicamente en operar sobre la matriz ampliada hasta conseguir que la sección de los coeficientes se transforme en:",
        "options": [
            {
                "id": "A",
                "text": "Una matriz nula."
            },
            {
                "id": "B",
                "text": "Una matriz escalonada reducida por filas."
            },
            {
                "id": "C",
                "text": "Una matriz triangular superior únicamente."
            },
            {
                "id": "D",
                "text": "La matriz transpuesta de los términos independientes."
            }
        ],
        "correctId": "B",
        "justification": "El método consiste en aplicar operaciones elementales por fila sobre la matriz ampliada buscando llevar la sección de la matriz de coeficientes $A$ a su forma escalonada reducida por filas."
    },
    {
        "id": 48,
        "text": "¿Cuál es la principal ventaja operativa del método de Gauss-Jordan sobre el método de la inversa o la regla de Cramer?",
        "options": [
            {
                "id": "A",
                "text": "Que es más corto y no usa sumas."
            },
            {
                "id": "B",
                "text": "Que se puede aplicar absolutamente SIEMPRE, sin importar si el sistema es cuadrado, rectangular, compatible o incompatible."
            },
            {
                "id": "C",
                "text": "Que no requiere el uso de operaciones elementales."
            },
            {
                "id": "D",
                "text": "Que solo sirve para sistemas que tienen solución única."
            }
        ],
        "correctId": "B",
        "justification": "A diferencia de Cramer o la Inversa (que exigen matrices cuadradas y regulares), el método de Gauss-Jordan es universal y se puede aplicar siempre, brindando la caracterización inmediata del sistema."
    },
    {
        "id": 49,
        "text": "Si al finalizar el escalonamiento por Gauss-Jordan de un sistema con variables $x, y, z$, la última fila de la matriz ampliada reducida queda con los valores: $0 \\quad 0 \\quad 0 \\quad | \\quad -1.5$, la interpretación correcta es:",
        "options": [
            {
                "id": "A",
                "text": "Que la variable $z$ es igual a -1.5."
            },
            {
                "id": "B",
                "text": "Que el sistema es compatible indeterminado y $z$ es una variable libre."
            },
            {
                "id": "C",
                "text": "Que el sistema es incompatible (sin solución) porque se llega al absurdo matemático de que $0 = -1.5$."
            },
            {
                "id": "D",
                "text": "Que hay que volver a realizar los cálculos porque se cometió un error de signos."
            }
        ],
        "correctId": "C",
        "justification": "Esa fila equivale a escribir la ecuación $0x + 0y + 0z = -1.5$, lo cual es un absurdo matemático. Esto demuestra de forma práctica que $r(A) < r(A|B)$, por lo que el sistema no tiene solución."
    },
    {
        "id": 50,
        "text": "Caso práctico: Si en el problema de la fábrica de pastas (de tus apuntes), se decide eliminar el proceso de secado porque la producción se venderá en su totalidad como pasta fresca, ¿qué cambio estructural experimenta el sistema de ecuaciones original?",
        "options": [
            {
                "id": "A",
                "text": "Se duplica el número de incógnitas."
            },
            {
                "id": "B",
                "text": "El sistema pierde una ecuación, pasando de tener 4 ecuaciones a tener 3 ecuaciones."
            },
            {
                "id": "C",
                "text": "Se transforma inmediatamente en un sistema incompatible."
            },
            {
                "id": "D",
                "text": "La matriz de coeficientes pasa a ser una matriz diagonal."
            }
        ],
        "correctId": "B",
        "justification": "Como cada ecuación representa las restricciones de tiempo asociadas a una máquina en particular (amasadora, extrusora, secadora), si se elimina la sección de secado, el sistema pierde la condición matemática de esa máquina, quedándose con una ecuación menos."
    },
    {
        "id": 51,
        "text": "Si en una matriz cuadrada A de orden 4 con determinante igual a -3 se multiplican todos sus elementos por la constante 2, ¿cuál es el nuevo determinante de la matriz resultante?",
        "options": [
            {
                "id": "A",
                "text": "-6"
            },
            {
                "id": "B",
                "text": "-12"
            },
            {
                "id": "C",
                "text": "-48"
            },
            {
                "id": "D",
                "text": "48"
            }
        ],
        "correctId": "C",
        "justification": "Por propiedades de los determinantes, cuando se multiplica toda una matriz de orden n por una constante alfa, el determinante de la nueva matriz queda multiplicado por la constante elevada al orden de la misma (|alfa * A| = alfa^n * |A|). En este caso: (2^4) * (-3) = 16 * (-3) = -48."
    },
    {
        "id": 52,
        "text": "¿Cuál de las siguientes afirmaciones respecto a los sistemas lineales homogéneos es siempre verdadera?",
        "options": [
            {
                "id": "A",
                "text": "Siempre son compatibles determinados."
            },
            {
                "id": "B",
                "text": "Nunca pueden ser sistemas incompatibles."
            },
            {
                "id": "C",
                "text": "Son incompatibles si tienen más incógnitas que ecuaciones."
            },
            {
                "id": "D",
                "text": "Solo admiten la solución trivial si el determinante es cero."
            }
        ],
        "correctId": "B",
        "justification": "Un sistema homogéneo (donde todos los términos independientes son iguales a cero) siempre es compatible porque admite, como mínimo, la solución trivial donde todas las variables valen cero (x=0, y=0, z=0). Por lo tanto, nunca puede ser incompatible."
    },
    {
        "id": 53,
        "text": "De acuerdo con el Teorema de Rouché-Frobenius, un sistema de m ecuaciones lineales con n incógnitas es compatible indeterminado si y solo si:",
        "options": [
            {
                "id": "A",
                "text": "r(A) es menor que r(A|B)"
            },
            {
                "id": "B",
                "text": "r(A) = r(A|B) = n"
            },
            {
                "id": "C",
                "text": "r(A) = r(A|B) y este valor es menor que n"
            },
            {
                "id": "D",
                "text": "r(A) es mayor que n"
            }
        ],
        "correctId": "C",
        "justification": "El Teorema de Rouché-Frobenius y su corolario indican que para que un sistema tenga infinitas soluciones (sea compatible indeterminado), el rango de la matriz de coeficientes debe ser igual al rango de la matriz ampliada, pero ambos rangos deben ser estrictamente menores que el número de incógnitas n."
    },
    {
        "id": 54,
        "text": "Se tiene una matriz cuadrada A de orden 3 cuyo determinante es igual a 0. ¿Qué se puede afirmar correctamente sobre sus vectores fila?",
        "options": [
            {
                "id": "A",
                "text": "Son linealmente independientes."
            },
            {
                "id": "B",
                "text": "Constituyen un conjunto linealmente dependiente."
            },
            {
                "id": "C",
                "text": "Su rango es obligatoriamente igual a 3."
            },
            {
                "id": "D",
                "text": "La matriz posee inversa única."
            }
        ],
        "correctId": "B",
        "justification": "Por propiedad, el determinante de una matriz es cero si y solo si sus líneas paralelas (filas o columnas) constituyen un conjunto de vectores linealmente dependientes (L.D.), lo cual implica también que la matriz es singular y no tiene inversa."
    },
    {
        "id": 55,
        "text": "¿Cuál de las siguientes modificaciones NO representa una operación elemental por fila en una matriz?",
        "options": [
            {
                "id": "A",
                "text": "Intercambiar el orden de dos filas paralelas."
            },
            {
                "id": "B",
                "text": "Multiplicar una fila completa por una constante distinta de cero."
            },
            {
                "id": "C",
                "text": "Sumar un número constante suelto a cada uno de los elementos de una fila."
            },
            {
                "id": "D",
                "text": "Adicionar a una fila otra fila paralela previamente multiplicada por un escalar."
            }
        ],
        "correctId": "C",
        "justification": "Las únicas operaciones elementales por fila que conservan las relaciones de equivalencia en matrices y sistemas son el intercambio de filas, la multiplicación de una fila por un escalar no nulo y la adición de una fila multiplicada por un escalar a otra. Sumar un número suelto a los elementos modifica la estructura alterando la equivalencia matemática."
    },
    {
        "id": 56,
        "text": "Si una matriz cuadrada A de orden 3 tiene determinante |A| = 5, ¿cuál es el determinante de su transpuesta?",
        "options": [
            {
                "id": "A",
                "text": "5"
            },
            {
                "id": "B",
                "text": "-5"
            },
            {
                "id": "C",
                "text": "1/5"
            },
            {
                "id": "D",
                "text": "15"
            }
        ],
        "correctId": "A",
        "justification": "Una propiedad fundamental de los determinantes establece que el determinante de la matriz transpuesta es igual al determinante de la matriz original (|A^T| = |A|), lo que significa que cambiar filas por columnas no varía su valor numérico."
    },
    {
        "id": 57,
        "text": "Para poder resolver un sistema de ecuaciones lineales aplicando la Regla de Cramer, el sistema debe cumplir estrictamente con las siguientes condiciones:",
        "options": [
            {
                "id": "A",
                "text": "Debe ser rectangular y homogéneo."
            },
            {
                "id": "B",
                "text": "Debe ser cuadrado y el determinante de la matriz de coeficientes debe ser igual a cero."
            },
            {
                "id": "C",
                "text": "Debe ser cuadrado y el determinante de la matriz de coeficientes debe ser distinto de cero."
            },
            {
                "id": "D",
                "text": "Alcanza con que tenga solución única, sin importar si es cuadrado o no."
            }
        ],
        "correctId": "C",
        "justification": "La Regla de Cramer (o método de los determinantes) se aplica única y exclusivamente a sistemas cuadrados (igual número de ecuaciones que de incógnitas) donde el determinante principal de la matriz de coeficientes sea distinto de cero (Delta != 0), garantizando una solución única."
    },
    {
        "id": 58,
        "text": "¿Cuál de las siguientes opciones describe de manera correcta a una matriz elemental (E)?",
        "options": [
            {
                "id": "A",
                "text": "Es cualquier matriz escalonada y reducida que tiene ceros en su última fila."
            },
            {
                "id": "B",
                "text": "Es una matriz que se obtiene al aplicar una sola operación elemental por fila sobre la matriz identidad."
            },
            {
                "id": "C",
                "text": "Es una matriz simétrica cuyo determinante siempre es igual a 1 o -1."
            },
            {
                "id": "D",
                "text": "Es una matriz que resulta de realizar múltiples combinaciones de filas y columnas sobre la matriz nula."
            }
        ],
        "correctId": "B",
        "justification": "Por definición formal de los módulos, se denomina matriz elemental a aquella que surge de aplicar una única y sola operación elemental por fila a la matriz identidad."
    },
    {
        "id": 59,
        "text": "Al resolver un sistema de ecuaciones utilizando el método de Gauss-Jordan, se llega a la siguiente matriz ampliada reducida por filas:\n[ 1  0  2 |  4 ]\n[ 0  1  3 | -1 ]\n[ 0  0  0 |  2 ]\n¿Cómo se clasifica este sistema de acuerdo al Teorema de Rouché-Frobenius?",
        "options": [
            {
                "id": "A",
                "text": "Compatible Determinado."
            },
            {
                "id": "B",
                "text": "Compatible Indeterminado."
            },
            {
                "id": "C",
                "text": "Incompatible."
            },
            {
                "id": "D",
                "text": "Homogéneo Indeterminado."
            }
        ],
        "correctId": "C",
        "justification": "El rango de la matriz de coeficientes es r(A) = 2 (dos filas no nulas), mientras que el rango de la matriz ampliada es r(A|B) = 3 ya que la última fila cuenta con un valor independiente no nulo (aparece la forma 0 0 0 | k con k != 0). Al ser r(A) < r(A|B), el sistema no tiene solución."
    },
    {
        "id": 60,
        "text": "Si las matrices inversas A y B existen y son del mismo orden, ¿a qué es igual la inversa del producto de ambas matrices, es decir, (A * B)^-1?",
        "options": [
            {
                "id": "A",
                "text": "A^-1 * B^-1"
            },
            {
                "id": "B",
                "text": "B^-1 * A^-1"
            },
            {
                "id": "C",
                "text": "(B * A)^-1"
            },
            {
                "id": "D",
                "text": "A * B^-1"
            }
        ],
        "correctId": "B",
        "justification": "La propiedad de la inversa de un producto de matrices inversibles establece explícitamente que es igual al producto de las matrices inversas tomadas en el orden invertido: (A * B)^-1 = B^-1 * A^-1."
    },
    {
        "id": 61,
        "text": "¿Cuál es la restricción máxima para el rango de una matriz rectangular de orden 3x5?",
        "options": [
            {
                "id": "A",
                "text": "El rango puede ser como máximo 5."
            },
            {
                "id": "B",
                "text": "El rango puede ser como máximo 3."
            },
            {
                "id": "C",
                "text": "El rango debe ser exactamente igual a 2."
            },
            {
                "id": "D",
                "text": "No tiene límites, puede ser cualquier valor entero positivo."
            }
        ],
        "correctId": "B",
        "justification": "Por propiedad, el rango de una matriz no puede exceder al número mínimo entre sus filas y sus columnas, matemáticamente: r(A) <= mín(m, n). Para una matriz de 3x5, el mínimo entre 3 y 5 es 3, por lo tanto, el rango máximo posible es 3."
    },
    {
        "id": 62,
        "text": "Dada una matriz cuadrada A de orden 3 con determinante |A| = -2. ¿Cuál es el determinante de su matriz inversa A^-1?",
        "options": [
            {
                "id": "A",
                "text": "-2"
            },
            {
                "id": "B",
                "text": "2"
            },
            {
                "id": "C",
                "text": "-1/2"
            },
            {
                "id": "D",
                "text": "1/2"
            }
        ],
        "correctId": "C",
        "justification": "El determinante de la matriz inversa es igual al recíproco del determinante de la matriz original, expresado matemáticamente como |A^-1| = 1 / |A|. En este caso, el resultado es 1 / (-2) = -1/2."
    },
    {
        "id": 63,
        "text": "¿Qué ocurre con el valor numérico del determinante de una matriz si se intercambian entre sí dos de sus filas paralelas?",
        "options": [
            {
                "id": "A",
                "text": "El valor del determinante no se modifica en absoluto."
            },
            {
                "id": "B",
                "text": "El determinante queda multiplicado por cero."
            },
            {
                "id": "C",
                "text": "El determinante cambia de signo."
            },
            {
                "id": "D",
                "text": "El determinante se eleva al cuadrado."
            }
        ],
        "correctId": "C",
        "justification": "Según las propiedades de los determinantes, cuando se efectúa el intercambio de dos líneas paralelas entre sí (filas o columnas), el determinante de la matriz resultante cambia su signo, quedando multiplicado por -1."
    },
    {
        "id": 64,
        "text": "Si un sistema de ecuaciones lineales tiene una matriz de coeficientes A de orden 3x3 con |A| != 0, y el vector de términos independientes B es el vector nulo, ¿qué tipo de solución presenta el sistema?",
        "options": [
            {
                "id": "A",
                "text": "Solución única, y corresponde a la solución trivial (SCD)."
            },
            {
                "id": "B",
                "text": "Infinitas soluciones porque es un sistema homogéneo (SCI)."
            },
            {
                "id": "C",
                "text": "Es un sistema incompatible porque el determinante no puede evaluar términos nulos."
            },
            {
                "id": "D",
                "text": "No se puede determinar sin aplicar el método de Gauss-Jordan."
            }
        ],
        "correctId": "A",
        "justification": "Al ser un sistema homogéneo con determinante de la matriz de coeficientes distinto de cero (|A| != 0), la matriz es regular y admite inversa única. Al despejar X = A^-1 * B, siendo B un vector de ceros, la única solución posible es la trivial (x=0, y=0, z=0), clasificándose como Compatible Determinado."
    },
    {
        "id": 65,
        "text": "¿Para qué dimensiones de matrices está permitido aplicar de forma directa la Regla de Sarrus en el cálculo de determinantes?",
        "options": [
            {
                "id": "A",
                "text": "Para matrices de orden 2x2 exclusivamente."
            },
            {
                "id": "B",
                "text": "Para matrices de orden 3x3 exclusivamente."
            },
            {
                "id": "C",
                "text": "Para cualquier matriz cuadrada de orden n x n."
            },
            {
                "id": "D",
                "text": "Para matrices de orden 3x3 y superiores como 4x4."
            }
        ],
        "correctId": "B",
        "justification": "La regla de Sarrus es un método práctico y simplificado diseñado única y exclusivamente para el cálculo de determinantes de matrices de orden 3x3. Está terminantemente prohibido y genera cálculos erróneos si se aplica en órdenes superiores como 4x4."
    },
    {
        "id": 66,
        "text": "Se define una matriz cuadrada A como \"singular\". Esto significa de manera inequívoca que:",
        "options": [
            {
                "id": "A",
                "text": "Su determinante es diferente de cero y es inversible."
            },
            {
                "id": "B",
                "text": "Su rango es máximo."
            },
            {
                "id": "C",
                "text": "Su determinante es igual a cero y por lo tanto NO tiene matriz inversa."
            },
            {
                "id": "D",
                "text": "Todos los elementos de su diagonal principal son iguales a 1."
            }
        ],
        "correctId": "C",
        "justification": "Por definición matemática, una matriz es singular si y solo si su determinante es igual a cero (|A| = 0), lo que implica que no admite matriz inversa (no es inversible)."
    },
    {
        "id": 67,
        "text": "Al aplicar operaciones elementales por fila para reducir una matriz ampliada, ¿cuál de las siguientes acciones altera el valor del determinante de la matriz de coeficientes asociada?",
        "options": [
            {
                "id": "A",
                "text": "Multiplicar una fila por una constante k distinta de cero."
            },
            {
                "id": "B",
                "text": "Sumar a la fila 2 la fila 1 multiplicada por un escalar no nulo."
            },
            {
                "id": "C",
                "text": "Sumar a la fila 3 la fila 2 multiplicada por 1."
            },
            {
                "id": "D",
                "text": "Reducir un elemento de la matriz a cero usando combinaciones de adición elemental."
            }
        ],
        "correctId": "A",
        "justification": "La adición elemental de filas (sumar a una fila otra fila multiplicada por una constante) no modifica en absoluto el valor del determinante. Sin embargo, multiplicar una fila por una constante k sí altera el determinante, haciendo que el valor total quede multiplicado por dicha constante."
    },
    {
        "id": 68,
        "text": "Si un sistema de 3 ecuaciones con 3 incógnitas tiene r(",
        "options": [
            {
                "id": "A",
                "text": "= r(A|"
            },
            {
                "id": "B",
                "text": "= 2, ¿qué interpretación lógica y práctica se le da a las soluciones en un problema de economía o producción real?\nA) El sistema no tiene ninguna solución física posible.\nB) Existe una única solución óptima fija."
            },
            {
                "id": "C",
                "text": "Existen infinitas soluciones matemáticas, pero en la realidad las soluciones válidas quedan acotadas porque las variables no pueden ser negativas."
            },
            {
                "id": "D",
                "text": "El rango 2 invalida el análisis del sistema por inconsistencia de datos."
            }
        ],
        "correctId": "C",
        "justification": "Cuando r(A) = r(A|B) < n, el sistema es compatible indeterminado (infinitas soluciones). No obstante, en problemas aplicados a la realidad (como kg de harina o fertilizantes), las magnitudes físicas no pueden tomar valores negativos, lo que acota lógicamente el conjunto de infinitas soluciones aplicables."
    },
    {
        "id": 69,
        "text": "¿Cómo se obtiene una matriz escalonada y reducida por filas a partir de una matriz original?",
        "options": [
            {
                "id": "A",
                "text": "Intercambiando filas por columnas mediante la transposición directa."
            },
            {
                "id": "B",
                "text": "Aplicando una cantidad finita de operaciones elementales por fila hasta que cada pivote sea 1 y tenga ceros tanto arriba como abajo en su columna."
            },
            {
                "id": "C",
                "text": "Multiplicando toda la matriz por la inversa de la identidad."
            },
            {
                "id": "D",
                "text": "Eliminando todas las filas dependientes sin hacer operaciones de adición."
            }
        ],
        "correctId": "B",
        "justification": "El método de Gauss-Jordan consiste en llevar la matriz a su forma escalonada reducida por filas utilizando operaciones elementales. En esta forma, el primer elemento no nulo de cada fila es un 1 (pivote) y todos los elementos por encima y por debajo de dicho pivote en su columna correspondiente deben ser ceros."
    },
    {
        "id": 70,
        "text": "Si una matriz cuadrada A de orden 3 es una matriz diagonal cuyos elementos sobre la diagonal principal son d1 = 2, d2 = 5 y d3 = -1, ¿cuál es su determinante?",
        "options": [
            {
                "id": "A",
                "text": "6"
            },
            {
                "id": "B",
                "text": "10"
            },
            {
                "id": "C",
                "text": "-10"
            },
            {
                "id": "D",
                "text": "0"
            }
        ],
        "correctId": "C",
        "justification": "Por propiedad de los determinantes de matrices diagonales o triangulares, su valor es igual al producto de los elementos que se encuentran sobre la diagonal principal. En este caso: 2 * 5 * (-1) = -10."
    },
    {
        "id": 71,
        "text": "Dada la ecuación matricial para resolver un sistema cuadrado A * X = B, donde A es regular, ¿cuál es el despeje algebraico correcto para hallar el vector incógnita X?",
        "options": [
            {
                "id": "A",
                "text": "X = B * A^-1"
            },
            {
                "id": "B",
                "text": "X = A^-1 * B"
            },
            {
                "id": "C",
                "text": "X = B / A"
            },
            {
                "id": "D",
                "text": "X = A * B^-1"
            }
        ],
        "correctId": "B",
        "justification": "Dado que la multiplicación de matrices no es conmutativa, para despejar X debemos premultiplicar por la inversa de A (A^-1) a ambos miembros de la ecuación, obteniendo exactamente X = A^-1 * B."
    },
    {
        "id": 72,
        "text": "Si en un sistema general se verifica que la matriz de coeficientes A tiene un rango r(",
        "options": [
            {
                "id": "A",
                "text": "= 3 y la matriz ampliada tiene un rango r(A|"
            },
            {
                "id": "B",
                "text": "= 4, ¿qué se concluye sobre el sistema?\nA) Es un sistema compatible determinado.\nB) Es un sistema compatible indeterminado."
            },
            {
                "id": "C",
                "text": "Es un sistema incompatible."
            },
            {
                "id": "D",
                "text": "Admite únicamente la solución trivial."
            }
        ],
        "correctId": "C",
        "justification": "De acuerdo al Teorema de Rouché-Frobenius, cuando r(A) es estrictamente menor que r(A|B), significa que el sistema de ecuaciones lineales es incompatible, es decir, carece por completo de solución."
    },
    {
        "id": 73,
        "text": "¿Cuál es el valor del determinante de la matriz identidad de cualquier orden n x n?",
        "options": [
            {
                "id": "A",
                "text": "n"
            },
            {
                "id": "B",
                "text": "0"
            },
            {
                "id": "C",
                "text": "1"
            },
            {
                "id": "D",
                "text": "-1"
            }
        ],
        "correctId": "C",
        "justification": "La matriz identidad es una matriz diagonal cuyos elementos en la diagonal principal son todos iguales a 1. Aplicando la propiedad, su determinante es el producto de estos elementos (1 * 1 * ... * 1), lo que da siempre como resultado 1."
    },
    {
        "id": 74,
        "text": "¿Qué se entiende por \"rango de una matriz\" en el contexto del álgebra matricial?",
        "options": [
            {
                "id": "A",
                "text": "El número total de elementos que componen la matriz."
            },
            {
                "id": "B",
                "text": "El número máximo de filas o columnas linealmente independientes que posee la matriz."
            },
            {
                "id": "C",
                "text": "La diferencia entre el elemento máximo y el mínimo de la diagonal principal."
            },
            {
                "id": "D",
                "text": "El orden de la matriz multiplicado por su determinante."
            }
        ],
        "correctId": "B",
        "justification": "El rango de una matriz está definido formalmente como el número máximo de líneas paralelas (ya sean filas o columnas) linealmente independientes (L.I.) que posee dicha matriz."
    },
    {
        "id": 75,
        "text": "Si denotamos a una matriz cuadrada como D, y se conoce que posee una fila completa compuesta exclusivamente por ceros, ¿cuál es el valor de su determinante?",
        "options": [
            {
                "id": "A",
                "text": "No se puede calcular."
            },
            {
                "id": "B",
                "text": "1"
            },
            {
                "id": "C",
                "text": "0"
            },
            {
                "id": "D",
                "text": "Depende de los valores de las demás filas."
            }
        ],
        "correctId": "C",
        "justification": "Por propiedad directa de los determinantes, si una matriz cuadrada posee una línea (fila o columna) nula, es decir, llena de ceros, su determinante es igual a cero de manera inmediata ya que sus líneas son linealmente dependientes."
    },
    {
        "id": 76,
        "text": "Se tienen dos sistemas de ecuaciones lineales con las mismas incógnitas. Se dice que ambos sistemas son \"equivalentes\" si y solo si:",
        "options": [
            {
                "id": "A",
                "text": "Tienen exactamente la misma cantidad de ecuaciones."
            },
            {
                "id": "B",
                "text": "Poseen las mismas matrices de coeficientes sin importar los términos independientes."
            },
            {
                "id": "C",
                "text": "Tienen el mismo conjunto solución."
            },
            {
                "id": "D",
                "text": "Ambos son sistemas homogéneos de orden máximo."
            }
        ],
        "correctId": "C",
        "justification": "Por definición teórica de los módulos, dos o más sistemas de ecuaciones lineales se denominan equivalentes cuando tienen exactamente el mismo conjunto solución."
    },
    {
        "id": 77,
        "text": "¿Cuál es el elemento pivote que se busca establecer en la posición a11 al comenzar el proceso de reducción por el método de Gauss-Jordan o método de Jordan para la inversa?",
        "options": [
            {
                "id": "A",
                "text": "El número cero."
            },
            {
                "id": "B",
                "text": "El número uno."
            },
            {
                "id": "C",
                "text": "Cualquier número par."
            },
            {
                "id": "D",
                "text": "El determinante de la matriz."
            }
        ],
        "correctId": "B",
        "justification": "El procedimiento algorítmico de Gauss-Jordan exige de manera estricta que el primer elemento no nulo de cada fila (denominado pivote) se transforme en un 1 para poder realizar de forma ordenada la eliminación del resto de los elementos de su columna."
    },
    {
        "id": 78,
        "text": "Dada una matriz diagonal regular D de orden 3 cuyos elementos de la diagonal principal son d1 = 3, d2 = -4 y d3 = 1/2. ¿Cuáles serán los elementos de la diagonal principal de su matriz inversa D^-1?",
        "options": [
            {
                "id": "A",
                "text": "3, -4, 1/2"
            },
            {
                "id": "B",
                "text": "-3, 4, -2"
            },
            {
                "id": "C",
                "text": "1/3, -1/4, 2"
            },
            {
                "id": "D",
                "text": "1/3, 1/4, 1/2"
            }
        ],
        "correctId": "C",
        "justification": "La propiedad específica sobre matrices inversas diagonales indica que la inversa de una matriz diagonal regular es otra matriz diagonal cuyos elementos en la diagonal principal son los recíprocos (1/di) de la diagonal original. Los recíprocos son 1/3, -1/4 y 2."
    },
    {
        "id": 79,
        "text": "Si un sistema de ecuaciones lineales tiene más incógnitas que ecuaciones (sistema rectangular m < n) y es compatible, ¿qué tipo de solución admite necesariamente?",
        "options": [
            {
                "id": "A",
                "text": "Solución única (SCD)."
            },
            {
                "id": "B",
                "text": "Infinitas soluciones (SCI)."
            },
            {
                "id": "C",
                "text": "Ninguna solución (SI)."
            },
            {
                "id": "D",
                "text": "Únicamente la solución trivial."
            }
        ],
        "correctId": "B",
        "justification": "Para que sea compatible, r(A) debe ser igual a r(A|B). Como r(A) nunca puede superar al número de filas m, y sabemos que m < n, entonces el rango final obligatoriamente será menor que el número de incógnitas n. Por el Teorema de Rouché-Frobenius, esto determina un sistema compatible indeterminado (infinitas soluciones)."
    },
    {
        "id": 80,
        "text": "¿Cómo se construye formalmente la matriz ampliada (A|B) de un sistema de ecuaciones lineales?",
        "options": [
            {
                "id": "A",
                "text": "Multiplicando la matriz de coeficientes A por el vector de términos independientes B."
            },
            {
                "id": "B",
                "text": "Agregando el vector de términos independientes B como una columna adicional a la derecha de la matriz de coeficientes A."
            },
            {
                "id": "C",
                "text": "Calculando la transpuesta de la matriz de coeficientes A y sumándole la identidad."
            },
            {
                "id": "D",
                "text": "Reemplazando todas las variables x por ceros en la matriz original."
            }
        ],
        "correctId": "B",
        "justification": "La matriz ampliada del sistema surge conceptualmente de anexar de forma directa el vector columna de los términos independientes (B) a la estructura original de la matriz de coeficientes (A)."
    },
    {
        "id": 81,
        "text": "Para una matriz cuadrada A de orden n, ¿es posible que el rango de la matriz ampliada r(A|B) sea menor que el rango de la matriz de coeficientes r(A)?",
        "options": [
            {
                "id": "A",
                "text": "Sí, cuando el sistema es homogéneo."
            },
            {
                "id": "B",
                "text": "Sí, cuando todos los términos independientes son negativos."
            },
            {
                "id": "C",
                "text": "No, jamás puede suceder porque la matriz ampliada contiene a la de coeficientes y su rango solo puede ser igual o mayor."
            },
            {
                "id": "D",
                "text": "Depende del método de resolución aplicado."
            }
        ],
        "correctId": "C",
        "justification": "La matriz ampliada se forma agregando una columna a la matriz de coeficientes. Por lo tanto, el número máximo de columnas linealmente independientes en (A|B) nunca puede ser menor que en A, haciendo matemáticamente imposible que r(A|B) < r(A)."
    },
    {
        "id": 82,
        "text": "¿Qué le sucede al determinante de una matriz cuadrada A de orden 3 si sumamos a la segunda fila los elementos de la primera fila multiplicados por la constante 4?",
        "options": [
            {
                "id": "A",
                "text": "El determinante queda multiplicado por 4."
            },
            {
                "id": "B",
                "text": "El determinante cambia de signo."
            },
            {
                "id": "C",
                "text": "El valor del determinante no se modifica."
            },
            {
                "id": "D",
                "text": "El determinante se reduce a cero."
            }
        ],
        "correctId": "C",
        "justification": "Por propiedad de adición elemental, si a una fila de una matriz cuadrada se le suma otra fila paralela multiplicada por cualquier constante o escalar, el determinante de la nueva matriz no se modifica en absoluto respecto al original."
    },
    {
        "id": 83,
        "text": "En la Regla de Cramer, ¿cómo se arma el determinante específico modificado de la variable \"y\" (denotado como Delta_y)?",
        "options": [
            {
                "id": "A",
                "text": "Se multiplica todo el determinante principal por el vector independiente."
            },
            {
                "id": "B",
                "text": "Se elimina por completo la fila de términos independientes."
            },
            {
                "id": "C",
                "text": "Se reemplaza la columna de los coeficientes de la variable \"y\" por la columna de los términos independientes del sistema."
            },
            {
                "id": "D",
                "text": "Se intercambia la primera fila con la tercera fila de la matriz original."
            }
        ],
        "correctId": "C",
        "justification": "Para construir los determinantes modificados en Cramer (como Delta_x, Delta_y o Delta_z), se debe sustituir estrictamente la columna de coeficientes de la incógnita en cuestión por los valores del vector de términos independientes (B)."
    },
    {
        "id": 84,
        "text": "¿Cuál es el rango de la matriz nula de orden 3x3?",
        "options": [
            {
                "id": "A",
                "text": "3"
            },
            {
                "id": "B",
                "text": "1"
            },
            {
                "id": "C",
                "text": "0"
            },
            {
                "id": "D",
                "text": "No está definido para matrices sin valores."
            }
        ],
        "correctId": "C",
        "justification": "Por definición de las propiedades del rango, el rango de la matriz nula (aquella compuesta en su totalidad por ceros) es igual a cero de manera absoluta, debido a que no contiene ninguna línea linealmente independiente."
    },
    {
        "id": 85,
        "text": "Si una matriz A es de orden 3x4 y una matriz B es de orden 4x2, ¿cuál es el orden de la matriz producto A * B?",
        "options": [
            {
                "id": "A",
                "text": "3x2"
            },
            {
                "id": "B",
                "text": "4x4"
            },
            {
                "id": "C",
                "text": "3x4"
            },
            {
                "id": "D",
                "text": "No se pueden multiplicar por ser rectangulares."
            }
        ],
        "correctId": "A",
        "justification": "Para realizar el producto de dos matrices, el número de columnas de la primera debe coincidir con el de filas de la segunda (4 = 4). Las dimensiones externas determinan el tamaño de la matriz resultante, que en este caso es de orden 3x2."
    },
    {
        "id": 86,
        "text": "¿Qué se puede afirmar rigurosamente sobre el rango de una matriz regular de orden n x n?",
        "options": [
            {
                "id": "A",
                "text": "Su rango es menor que n."
            },
            {
                "id": "B",
                "text": "Su rango es igual a cero."
            },
            {
                "id": "C",
                "text": "Su rango es máximo e igual a su orden n."
            },
            {
                "id": "D",
                "text": "No se puede conocer el rango a partir de la regularidad."
            }
        ],
        "correctId": "C",
        "justification": "Una matriz es regular si su determinante es distinto de cero. Esto implica que todas sus filas son linealmente independientes y, por ende, posee rango máximo, el cual coincide exactamente con el orden n de la matriz."
    },
    {
        "id": 87,
        "text": "Si al intentar resolver un sistema cuadrado por el método de la matriz Inversa (X = A^-1 * B) calculamos el determinante de la matriz de coeficientes y nos da |A| = 0, ¿qué conclusión teórica se debe extraer?",
        "options": [
            {
                "id": "A",
                "text": "La solución única es cero."
            },
            {
                "id": "B",
                "text": "El método de la inversa falló pero el sistema es obligatoriamente incompatible."
            },
            {
                "id": "C",
                "text": "La matriz es singular, no admite inversa y el método NO puede aplicarse; se debe analizar el sistema mediante Gauss-Jordan y Rouché-Frobenius."
            },
            {
                "id": "D",
                "text": "Hay que repetir el cálculo multiplicando las filas por una constante."
            }
        ],
        "correctId": "C",
        "justification": "Si el determinante es cero, la matriz es singular y carece de inversa. Por lo tanto, queda completamente invalidada la aplicación del método de la inversa, obligando a resolver y clasificar el sistema mediante el método general de Gauss-Jordan y el análisis de rangos de Rouché-Frobenius."
    },
    {
        "id": 88,
        "text": "Al trabajar con un sistema de ecuaciones lineales extraído de una pyme de producción de pastas secas, se encuentra que el sistema es Compatible Indeterminado. ¿Qué significado económico tiene esto para el dueño de la empresa?",
        "options": [
            {
                "id": "A",
                "text": "Que hay un error en los datos y no puede fabricar nada."
            },
            {
                "id": "B",
                "text": "Que existe una única combinación perfecta de producción."
            },
            {
                "id": "C",
                "text": "Que dispone de infinitas combinaciones posibles de kilos a producir para optimizar el uso de las máquinas, sujetas a restricciones de no negatividad."
            },
            {
                "id": "D",
                "text": "Que las máquinas están rotas debido a la inconsistencia del rango."
            }
        ],
        "correctId": "C",
        "justification": "Un SCI modeliza situaciones donde hay infinitas soluciones matemáticas válidas. En el marco práctico de una empresa, esto otorga flexibilidad operativa permitiendo elegir entre múltiples planes de producción combinando los tipos de productos según convenga."
    },
    {
        "id": 89,
        "text": "Dada la matriz elemental E que se obtuvo multiplicando la segunda fila de la identidad de orden 2 por la constante k = 3, ¿cuál es el determinante de E?",
        "options": [
            {
                "id": "A",
                "text": "6"
            },
            {
                "id": "B",
                "text": "1"
            },
            {
                "id": "C",
                "text": "3"
            },
            {
                "id": "D",
                "text": "1/3"
            }
        ],
        "correctId": "C",
        "justification": "La matriz identidad original tiene determinante 1. Al aplicar una sola operación elemental consistente en multiplicar UNA sola línea por una constante k, el determinante de la nueva matriz elemental queda multiplicado por dicha constante (1 * k). En este caso, 1 * 3 = 3."
    },
    {
        "id": 90,
        "text": "¿Por qué se afirma que el método de Gauss-Jordan es superior y más general que los métodos de Cramer y de la Matriz Inversa?",
        "options": [
            {
                "id": "A",
                "text": "Porque Gauss-Jordan requiere realizar menos cálculos aritméticos manuales."
            },
            {
                "id": "B",
                "text": "Porque se puede aplicar a absolutamente CUALQUIER sistema de ecuaciones lineales, sin importar si es cuadrado o rectangular, compatible o incompatible."
            },
            {
                "id": "C",
                "text": "Porque Cramer no funciona si los términos independientes son fraccionarios."
            },
            {
                "id": "D",
                "text": "Porque es el único método que trabaja directo con determinantes de orden superior a 4."
            }
        ],
        "correctId": "B",
        "justification": "Los métodos de Cramer y de la Matriz Inversa están severamente limitados a sistemas cuadrados con matrices de coeficientes regulares (|A| != 0). En contrapartida, Gauss-Jordan es un método universal aplicable a cualquier estructura de matriz y sistema lineal."
    },
    {
        "id": 91,
        "text": "Si una matriz cuadrada A tiene determinante |A| = 4, y otra matriz B del mismo orden tiene determinante |B| = -3, ¿cuál es el determinante de la matriz producto A * B?",
        "options": [
            {
                "id": "A",
                "text": "1"
            },
            {
                "id": "B",
                "text": "7"
            },
            {
                "id": "C",
                "text": "-12"
            },
            {
                "id": "D",
                "text": "-4/3"
            }
        ],
        "correctId": "C",
        "justification": "Por la propiedad distributiva de los determinantes con respecto al producto de matrices cuadradas, el determinante del producto es igual al producto de los determinantes de las matrices factores: |A * B| = |A| * |B|. Operando: 4 * (-3) = -12."
    },
    {
        "id": 92,
        "text": "Al calcular el rango de una matriz tras realizar la reducción por filas, ¿a qué equivale numéricamente dicho rango?",
        "options": [
            {
                "id": "A",
                "text": "Al número total de filas que componen la matriz original."
            },
            {
                "id": "B",
                "text": "Al número de filas no nulas que quedan en la matriz escalonada resultante."
            },
            {
                "id": "C",
                "text": "Al número de columnas que tienen al menos un cero."
            },
            {
                "id": "D",
                "text": "Al valor numérico obtenido en el último pivote calculado."
            }
        ],
        "correctId": "B",
        "justification": "El procedimiento práctico estándar para hallar el rango de cualquier matriz indica que se deben aplicar operaciones elementales hasta obtener una forma escalonada; el rango será exactamente igual al número de filas no nulas presentes en dicha matriz."
    },
    {
        "id": 93,
        "text": "Si se conoce que un sistema de ecuaciones lineales es \"Incompatible\", esto significa desde un punto de vista puramente geométrico y matemático que:",
        "options": [
            {
                "id": "A",
                "text": "Las ecuaciones representan rectas o planos que se cortan en un único punto."
            },
            {
                "id": "B",
                "text": "Las ecuaciones modelizan rectas o planos paralelos que no tienen ningún punto de intersección común."
            },
            {
                "id": "C",
                "text": "Los planos coinciden en una misma recta espacial."
            },
            {
                "id": "D",
                "text": "El sistema se puede resolver únicamente por determinantes nulos."
            }
        ],
        "correctId": "B",
        "justification": "Un sistema incompatible es aquel que no posee solución, lo cual implica geométricamente que las restricciones matemáticas no se intersecan en ningún punto del espacio, representando rectas o planos sin intersección común."
    },
    {
        "id": 94,
        "text": "¿Cuál de las siguientes combinaciones de filas daría lugar a un determinante igual a cero en una matriz cuadrada de orden 3?",
        "options": [
            {
                "id": "A",
                "text": "Tres filas totalmente distintas y linealmente independientes."
            },
            {
                "id": "B",
                "text": "Dos filas paralelas que son proporcionales entre sí (por ejemplo, una es el doble de la otra)."
            },
            {
                "id": "C",
                "text": "Una matriz triangular superior con elementos no nulos en la diagonal."
            },
            {
                "id": "D",
                "text": "Una matriz que tiene un pivote igual a 1 en cada columna."
            }
        ],
        "correctId": "B",
        "justification": "El determinante de una matriz es cero si y solo si sus filas son linealmente dependientes. Esto ocurre explícitamente si la matriz cuenta con dos líneas paralelas iguales o proporcionales."
    },
    {
        "id": 95,
        "text": "¿Qué ocurre con el rango de una matriz si multiplicamos a todos los elementos de una de sus filas por una constante k = -5?",
        "options": [
            {
                "id": "A",
                "text": "El rango queda multiplicado por -5."
            },
            {
                "id": "B",
                "text": "El rango disminuye en una unidad."
            },
            {
                "id": "C",
                "text": "El rango no cambia, se mantiene exactamente igual."
            },
            {
                "id": "D",
                "text": "El rango se vuelve nulo de forma inmediata."
            }
        ],
        "correctId": "C",
        "justification": "Multiplicar una fila por una constante no nula es una operación elemental por fila. Por propiedades del rango, la aplicación de operaciones elementales por fila altera los elementos individuales de la matriz pero conserva intacto el rango de la misma."
    },
    {
        "id": 96,
        "text": "En el análisis final de un sistema compatible indeterminado por Gauss-Jordan, ¿qué son las \"variables libres\"?",
        "options": [
            {
                "id": "A",
                "text": "Son aquellas variables asociadas a los pivotes de la matriz identidad."
            },
            {
                "id": "B",
                "text": "Son variables cuyos valores están fijos y predeterminados en cero de antemano."
            },
            {
                "id": "C",
                "text": "Son aquellas variables sobrantes (en función de las cuales se expresan las variables principales) que pueden tomar cualquier valor real."
            },
            {
                "id": "D",
                "text": "Son los términos independientes que se eliminaron durante la reducción."
            }
        ],
        "correctId": "C",
        "justification": "Al resolver un SCI, las variables asociadas a las columnas sin pivote se denominan variables libres. Las variables principales se despejan en función de estas variables libres para construir la solución general del sistema."
    },
    {
        "id": 97,
        "text": "Si una matriz A es de orden 3x3 y presenta un determinante |A| = 10, ¿cuál es el valor del determinante de su transpuesta multiplicada por 2, es decir, |2 * A^T|?",
        "options": [
            {
                "id": "A",
                "text": "20"
            },
            {
                "id": "B",
                "text": "40"
            },
            {
                "id": "C",
                "text": "80"
            },
            {
                "id": "D",
                "text": "160"
            }
        ],
        "correctId": "C",
        "justification": "Primero, sabemos que |A^T| = |A| = 10. Luego, al multiplicar la matriz transpuesta (que sigue siendo de orden 3) por la constante 2, aplicamos la propiedad de homogeneidad: |2 * A^T| = (2^3) * |A^T| = 8 * 10 = 80."
    },
    {
        "id": 98,
        "text": "¿Cuál de los siguientes pares de matrices representa una relación de equivalencia por filas (A ~ B)?",
        "options": [
            {
                "id": "A",
                "text": "Dos matrices de orden totalmente diferente."
            },
            {
                "id": "B",
                "text": "Una matriz A que se transforma en B mediante un número finito de operaciones elementales por fila."
            },
            {
                "id": "C",
                "text": "Dos matrices que tienen el mismo número de elementos pero distintos rangos."
            },
            {
                "id": "D",
                "text": "Una matriz regular y otra singular del mismo orden."
            }
        ],
        "correctId": "B",
        "justification": "Por definición, dos matrices A y B se consideran equivalentes por filas si y solo si es posible pasar de una a la otra mediante la aplicación sucesiva de una cantidad finita de operaciones elementales por fila."
    },
    {
        "id": 99,
        "text": "Si se tiene un sistema de 3 ecuaciones con 4 incógnitas, ¿puede ser este un sistema compatible determinado bajo alguna circunstancia?",
        "options": [
            {
                "id": "A",
                "text": "Sí, si el rango de la matriz ampliada es igual a 4."
            },
            {
                "id": "B",
                "text": "Sí, si es un sistema homogéneo."
            },
            {
                "id": "C",
                "text": "No, jamás puede ser determinado porque el rango máximo posible es 3, el cual es estrictamente menor que el número de incógnitas (4)."
            },
            {
                "id": "D",
                "text": "Depende del valor de los términos independientes."
            }
        ],
        "correctId": "C",
        "justification": "El rango de la matriz de coeficientes r(A) está limitado por el número de filas, por lo que r(A) <= 3. Al haber 4 incógnitas (n = 4), el rango jamás podrá alcanzar el valor de n. Según Rouché-Frobenius, esto imposibilita por completo que el sistema sea compatible determinado (solución única)."
    },
    {
        "id": 100,
        "text": "Al efectuar operaciones elementales por fila para resolver un sistema, ¿cuál de las siguientes acciones arruinaría por completo la equivalencia del sistema de ecuaciones?",
        "options": [
            {
                "id": "A",
                "text": "Intercambiar de lugar la primera ecuación con la tercera."
            },
            {
                "id": "B",
                "text": "Multiplicar todos los miembros de la segunda ecuación por la constante cero."
            },
            {
                "id": "C",
                "text": "Restar a la tercera fila el doble de la primera fila."
            },
            {
                "id": "D",
                "text": "Dividir todos los elementos de una fila por el número 2."
            }
        ],
        "correctId": "B",
        "justification": "Multiplicar una ecuación completa por cero elimina la ecuación de forma definitiva (la borra del sistema transformándola en 0 = 0), perdiendo la información original y rompiendo la relación de equivalencia matemática."
    }
];
