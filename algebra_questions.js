const algebraQuestions = [
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
    }
];
window.algebraQuestions = algebraQuestions;