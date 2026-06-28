import json
import re

text = """PREGUNTA 1Si en una matriz cuadrada A de orden 4 con determinante igual a -3 se multiplican todos sus elementos por la constante 2, ¿cuál es el nuevo determinante de la matriz resultante?
A) -6
B) -12
C) -48
D) 48
Respuesta correcta: C
Justificación: Por propiedades de los determinantes, cuando se multiplica toda una matriz de orden n por una constante alfa, el determinante de la nueva matriz queda multiplicado por la constante elevada al orden de la misma (|alfa * A| = alfa^n * |A|). En este caso: (2^4) * (-3) = 16 * (-3) = -48.  PREGUNTA 2¿Cuál de las siguientes afirmaciones respecto a los sistemas lineales homogéneos es siempre verdadera?
A) Siempre son compatibles determinados.
B) Nunca pueden ser sistemas incompatibles.
C) Son incompatibles si tienen más incógnitas que ecuaciones.
D) Solo admiten la solución trivial si el determinante es cero.
Respuesta correcta: B
Justificación: Un sistema homogéneo (donde todos los términos independientes son iguales a cero) siempre es compatible porque admite, como mínimo, la solución trivial donde todas las variables valen cero (x=0, y=0, z=0). Por lo tanto, nunca puede ser incompatible.  PREGUNTA 3De acuerdo con el Teorema de Rouché-Frobenius, un sistema de m ecuaciones lineales con n incógnitas es compatible indeterminado si y solo si:
A) r(A) es menor que r(A|B)
B) r(A) = r(A|B) = n
C) r(A) = r(A|B) y este valor es menor que n
D) r(A) es mayor que n
Respuesta correcta: C
Justificación: El Teorema de Rouché-Frobenius y su corolario indican que para que un sistema tenga infinitas soluciones (sea compatible indeterminado), el rango de la matriz de coeficientes debe ser igual al rango de la matriz ampliada, pero ambos rangos deben ser estrictamente menores que el número de incógnitas n.  PREGUNTA 4Se tiene una matriz cuadrada A de orden 3 cuyo determinante es igual a 0. ¿Qué se puede afirmar correctamente sobre sus vectores fila?
A) Son linealmente independientes.
B) Constituyen un conjunto linealmente dependiente.
C) Su rango es obligatoriamente igual a 3.
D) La matriz posee inversa única.
Respuesta correcta: B
Justificación: Por propiedad, el determinante de una matriz es cero si y solo si sus líneas paralelas (filas o columnas) constituyen un conjunto de vectores linealmente dependientes (L.D.), lo cual implica también que la matriz es singular y no tiene inversa.  PREGUNTA 5¿Cuál de las siguientes modificaciones NO representa una operación elemental por fila en una matriz?
A) Intercambiar el orden de dos filas paralelas.
B) Multiplicar una fila completa por una constante distinta de cero.
C) Sumar un número constante suelto a cada uno de los elementos de una fila.
D) Adicionar a una fila otra fila paralela previamente multiplicada por un escalar.
Respuesta correcta: C
Justificación: Las únicas operaciones elementales por fila que conservan las relaciones de equivalencia en matrices y sistemas son el intercambio de filas, la multiplicación de una fila por un escalar no nulo y la adición de una fila multiplicada por un escalar a otra. Sumar un número suelto a los elementos modifica la estructura alterando la equivalencia matemática.  PREGUNTA 6Si una matriz cuadrada A de orden 3 tiene determinante |A| = 5, ¿cuál es el determinante de su transpuesta?
A) 5
B) -5
C) 1/5
D) 15
Respuesta correcta: A
Justificación: Una propiedad fundamental de los determinantes establece que el determinante de la matriz transpuesta es igual al determinante de la matriz original (|A^T| = |A|), lo que significa que cambiar filas por columnas no varía su valor numérico.  PREGUNTA 7Para poder resolver un sistema de ecuaciones lineales aplicando la Regla de Cramer, el sistema debe cumplir estrictamente con las siguientes condiciones:
A) Debe ser rectangular y homogéneo.
B) Debe ser cuadrado y el determinante de la matriz de coeficientes debe ser igual a cero.
C) Debe ser cuadrado y el determinante de la matriz de coeficientes debe ser distinto de cero.
D) Alcanza con que tenga solución única, sin importar si es cuadrado o no.
Respuesta correcta: C
Justificación: La Regla de Cramer (o método de los determinantes) se aplica única y exclusivamente a sistemas cuadrados (igual número de ecuaciones que de incógnitas) donde el determinante principal de la matriz de coeficientes sea distinto de cero (Delta != 0), garantizando una solución única.  PREGUNTA 8¿Cuál de las siguientes opciones describe de manera correcta a una matriz elemental (E)?
A) Es cualquier matriz escalonada y reducida que tiene ceros en su última fila.
B) Es una matriz que se obtiene al aplicar una sola operación elemental por fila sobre la matriz identidad.
C) Es una matriz simétrica cuyo determinante siempre es igual a 1 o -1.
D) Es una matriz que resulta de realizar múltiples combinaciones de filas y columnas sobre la matriz nula.
Respuesta correcta: B
Justificación: Por definición formal de los módulos, se denomina matriz elemental a aquella que surge de aplicar una única y sola operación elemental por fila a la matriz identidad.  PREGUNTA 9Al resolver un sistema de ecuaciones utilizando el método de Gauss-Jordan, se llega a la siguiente matriz ampliada reducida por filas:
[ 1  0  2 |  4 ]
[ 0  1  3 | -1 ]
[ 0  0  0 |  2 ]
¿Cómo se clasifica este sistema de acuerdo al Teorema de Rouché-Frobenius?
A) Compatible Determinado.
B) Compatible Indeterminado.
C) Incompatible.
D) Homogéneo Indeterminado.
Respuesta correcta: C
Justificación: El rango de la matriz de coeficientes es r(A) = 2 (dos filas no nulas), mientras que el rango de la matriz ampliada es r(A|B) = 3 ya que la última fila cuenta con un valor independiente no nulo (aparece la forma 0 0 0 | k con k != 0). Al ser r(A) < r(A|B), el sistema no tiene solución.  PREGUNTA 10Si las matrices inversas A y B existen y son del mismo orden, ¿a qué es igual la inversa del producto de ambas matrices, es decir, (A * B)^-1?
A) A^-1 * B^-1
B) B^-1 * A^-1
C) (B * A)^-1
D) A * B^-1
Respuesta correcta: B
Justificación: La propiedad de la inversa de un producto de matrices inversibles establece explícitamente que es igual al producto de las matrices inversas tomadas en el orden invertido: (A * B)^-1 = B^-1 * A^-1.  PREGUNTA 11¿Cuál es la restricción máxima para el rango de una matriz rectangular de orden 3x5?
A) El rango puede ser como máximo 5.
B) El rango puede ser como máximo 3.
C) El rango debe ser exactamente igual a 2.
D) No tiene límites, puede ser cualquier valor entero positivo.
Respuesta correcta: B
Justificación: Por propiedad, el rango de una matriz no puede exceder al número mínimo entre sus filas y sus columnas, matemáticamente: r(A) <= mín(m, n). Para una matriz de 3x5, el mínimo entre 3 y 5 es 3, por lo tanto, el rango máximo posible es 3.  PREGUNTA 12Dada una matriz cuadrada A de orden 3 con determinante |A| = -2. ¿Cuál es el determinante de su matriz inversa A^-1?
A) -2
B) 2
C) -1/2
D) 1/2
Respuesta correcta: C
Justificación: El determinante de la matriz inversa es igual al recíproco del determinante de la matriz original, expresado matemáticamente como |A^-1| = 1 / |A|. En este caso, el resultado es 1 / (-2) = -1/2.  PREGUNTA 13¿Qué ocurre con el valor numérico del determinante de una matriz si se intercambian entre sí dos de sus filas paralelas?
A) El valor del determinante no se modifica en absoluto.
B) El determinante queda multiplicado por cero.
C) El determinante cambia de signo.
D) El determinante se eleva al cuadrado.
Respuesta correcta: C
Justificación: Según las propiedades de los determinantes, cuando se efectúa el intercambio de dos líneas paralelas entre sí (filas o columnas), el determinante de la matriz resultante cambia su signo, quedando multiplicado por -1.  PREGUNTA 14Si un sistema de ecuaciones lineales tiene una matriz de coeficientes A de orden 3x3 con |A| != 0, y el vector de términos independientes B es el vector nulo, ¿qué tipo de solución presenta el sistema?
A) Solución única, y corresponde a la solución trivial (SCD).
B) Infinitas soluciones porque es un sistema homogéneo (SCI).
C) Es un sistema incompatible porque el determinante no puede evaluar términos nulos.
D) No se puede determinar sin aplicar el método de Gauss-Jordan.
Respuesta correcta: A
Justificación: Al ser un sistema homogéneo con determinante de la matriz de coeficientes distinto de cero (|A| != 0), la matriz es regular y admite inversa única. Al despejar X = A^-1 * B, siendo B un vector de ceros, la única solución posible es la trivial (x=0, y=0, z=0), clasificándose como Compatible Determinado.  PREGUNTA 15¿Para qué dimensiones de matrices está permitido aplicar de forma directa la Regla de Sarrus en el cálculo de determinantes?
A) Para matrices de orden 2x2 exclusivamente.
B) Para matrices de orden 3x3 exclusivamente.
C) Para cualquier matriz cuadrada de orden n x n.
D) Para matrices de orden 3x3 y superiores como 4x4.
Respuesta correcta: B
Justificación: La regla de Sarrus es un método práctico y simplificado diseñado única y exclusivamente para el cálculo de determinantes de matrices de orden 3x3. Está terminantemente prohibido y genera cálculos erróneos si se aplica en órdenes superiores como 4x4.  PREGUNTA 16Se define una matriz cuadrada A como "singular". Esto significa de manera inequívoca que:
A) Su determinante es diferente de cero y es inversible.
B) Su rango es máximo.
C) Su determinante es igual a cero y por lo tanto NO tiene matriz inversa.
D) Todos los elementos de su diagonal principal son iguales a 1.
Respuesta correcta: C
Justificación: Por definición matemática, una matriz es singular si y solo si su determinante es igual a cero (|A| = 0), lo que implica que no admite matriz inversa (no es inversible).  PREGUNTA 17Al aplicar operaciones elementales por fila para reducir una matriz ampliada, ¿cuál de las siguientes acciones altera el valor del determinante de la matriz de coeficientes asociada?
A) Multiplicar una fila por una constante k distinta de cero.
B) Sumar a la fila 2 la fila 1 multiplicada por un escalar no nulo.
C) Sumar a la fila 3 la fila 2 multiplicada por 1.
D) Reducir un elemento de la matriz a cero usando combinaciones de adición elemental.
Respuesta correcta: A
Justificación: La adición elemental de filas (sumar a una fila otra fila multiplicada por una constante) no modifica en absoluto el valor del determinante. Sin embargo, multiplicar una fila por una constante k sí altera el determinante, haciendo que el valor total quede multiplicado por dicha constante.  PREGUNTA 18Si un sistema de 3 ecuaciones con 3 incógnitas tiene r(A) = r(A|B) = 2, ¿qué interpretación lógica y práctica se le da a las soluciones en un problema de economía o producción real?
A) El sistema no tiene ninguna solución física posible.
B) Existe una única solución óptima fija.
C) Existen infinitas soluciones matemáticas, pero en la realidad las soluciones válidas quedan acotadas porque las variables no pueden ser negativas.
D) El rango 2 invalida el análisis del sistema por inconsistencia de datos.
Respuesta correcta: C
Justificación: Cuando r(A) = r(A|B) < n, el sistema es compatible indeterminado (infinitas soluciones). No obstante, en problemas aplicados a la realidad (como kg de harina o fertilizantes), las magnitudes físicas no pueden tomar valores negativos, lo que acota lógicamente el conjunto de infinitas soluciones aplicables.  PREGUNTA 19¿Cómo se obtiene una matriz escalonada y reducida por filas a partir de una matriz original?
A) Intercambiando filas por columnas mediante la transposición directa.
B) Aplicando una cantidad finita de operaciones elementales por fila hasta que cada pivote sea 1 y tenga ceros tanto arriba como abajo en su columna.
C) Multiplicando toda la matriz por la inversa de la identidad.
D) Eliminando todas las filas dependientes sin hacer operaciones de adición.
Respuesta correcta: B
Justificación: El método de Gauss-Jordan consiste en llevar la matriz a su forma escalonada reducida por filas utilizando operaciones elementales. En esta forma, el primer elemento no nulo de cada fila es un 1 (pivote) y todos los elementos por encima y por debajo de dicho pivote en su columna correspondiente deben ser ceros.  PREGUNTA 20Si una matriz cuadrada A de orden 3 es una matriz diagonal cuyos elementos sobre la diagonal principal son d1 = 2, d2 = 5 y d3 = -1, ¿cuál es su determinante?
A) 6
B) 10
C) -10
D) 0
Respuesta correcta: C
Justificación: Por propiedad de los determinantes de matrices diagonales o triangulares, su valor es igual al producto de los elementos que se encuentran sobre la diagonal principal. En este caso: 2 * 5 * (-1) = -10.  PREGUNTA 21Dada la ecuación matricial para resolver un sistema cuadrado A * X = B, donde A es regular, ¿cuál es el despeje algebraico correcto para hallar el vector incógnita X?
A) X = B * A^-1
B) X = A^-1 * B
C) X = B / A
D) X = A * B^-1
Respuesta correcta: B
Justificación: Dado que la multiplicación de matrices no es conmutativa, para despejar X debemos premultiplicar por la inversa de A (A^-1) a ambos miembros de la ecuación, obteniendo exactamente X = A^-1 * B.  PREGUNTA 22Si en un sistema general se verifica que la matriz de coeficientes A tiene un rango r(A) = 3 y la matriz ampliada tiene un rango r(A|B) = 4, ¿qué se concluye sobre el sistema?
A) Es un sistema compatible determinado.
B) Es un sistema compatible indeterminado.
C) Es un sistema incompatible.
D) Admite únicamente la solución trivial.
Respuesta correcta: C
Justificación: De acuerdo al Teorema de Rouché-Frobenius, cuando r(A) es estrictamente menor que r(A|B), significa que el sistema de ecuaciones lineales es incompatible, es decir, carece por completo de solución.  PREGUNTA 23¿Cuál es el valor del determinante de la matriz identidad de cualquier orden n x n?
A) n
B) 0
C) 1
D) -1
Respuesta correcta: C
Justificación: La matriz identidad es una matriz diagonal cuyos elementos en la diagonal principal son todos iguales a 1. Aplicando la propiedad, su determinante es el producto de estos elementos (1 * 1 * ... * 1), lo que da siempre como resultado 1.  PREGUNTA 24¿Qué se entiende por "rango de una matriz" en el contexto del álgebra matricial?
A) El número total de elementos que componen la matriz.
B) El número máximo de filas o columnas linealmente independientes que posee la matriz.
C) La diferencia entre el elemento máximo y el mínimo de la diagonal principal.
D) El orden de la matriz multiplicado por su determinante.
Respuesta correcta: B
Justificación: El rango de una matriz está definido formalmente como el número máximo de líneas paralelas (ya sean filas o columnas) linealmente independientes (L.I.) que posee dicha matriz.  PREGUNTA 25Si denotamos a una matriz cuadrada como D, y se conoce que posee una fila completa compuesta exclusivamente por ceros, ¿cuál es el valor de su determinante?
A) No se puede calcular.
B) 1
C) 0
D) Depende de los valores de las demás filas.
Respuesta correcta: C
Justificación: Por propiedad directa de los determinantes, si una matriz cuadrada posee una línea (fila o columna) nula, es decir, llena de ceros, su determinante es igual a cero de manera inmediata ya que sus líneas son linealmente dependientes.  PREGUNTA 26Se tienen dos sistemas de ecuaciones lineales con las mismas incógnitas. Se dice que ambos sistemas son "equivalentes" si y solo si:
A) Tienen exactamente la misma cantidad de ecuaciones.
B) Poseen las mismas matrices de coeficientes sin importar los términos independientes.
C) Tienen el mismo conjunto solución.
D) Ambos son sistemas homogéneos de orden máximo.
Respuesta correcta: C
Justificación: Por definición teórica de los módulos, dos o más sistemas de ecuaciones lineales se denominan equivalentes cuando tienen exactamente el mismo conjunto solución.  PREGUNTA 27¿Cuál es el elemento pivote que se busca establecer en la posición a11 al comenzar el proceso de reducción por el método de Gauss-Jordan o método de Jordan para la inversa?
A) El número cero.
B) El número uno.
C) Cualquier número par.
D) El determinante de la matriz.
Respuesta correcta: B
Justificación: El procedimiento algorítmico de Gauss-Jordan exige de manera estricta que el primer elemento no nulo de cada fila (denominado pivote) se transforme en un 1 para poder realizar de forma ordenada la eliminación del resto de los elementos de su columna.  PREGUNTA 28Dada una matriz diagonal regular D de orden 3 cuyos elementos de la diagonal principal son d1 = 3, d2 = -4 y d3 = 1/2. ¿Cuáles serán los elementos de la diagonal principal de su matriz inversa D^-1?
A) 3, -4, 1/2
B) -3, 4, -2
C) 1/3, -1/4, 2
D) 1/3, 1/4, 1/2
Respuesta correcta: C
Justificación: La propiedad específica sobre matrices inversas diagonales indica que la inversa de una matriz diagonal regular es otra matriz diagonal cuyos elementos en la diagonal principal son los recíprocos (1/di) de la diagonal original. Los recíprocos son 1/3, -1/4 y 2.  PREGUNTA 29Si un sistema de ecuaciones lineales tiene más incógnitas que ecuaciones (sistema rectangular m < n) y es compatible, ¿qué tipo de solución admite necesariamente?
A) Solución única (SCD).
B) Infinitas soluciones (SCI).
C) Ninguna solución (SI).
D) Únicamente la solución trivial.
Respuesta correcta: B
Justificación: Para que sea compatible, r(A) debe ser igual a r(A|B). Como r(A) nunca puede superar al número de filas m, y sabemos que m < n, entonces el rango final obligatoriamente será menor que el número de incógnitas n. Por el Teorema de Rouché-Frobenius, esto determina un sistema compatible indeterminado (infinitas soluciones).  PREGUNTA 30¿Cómo se construye formalmente la matriz ampliada (A|B) de un sistema de ecuaciones lineales?
A) Multiplicando la matriz de coeficientes A por el vector de términos independientes B.
B) Agregando el vector de términos independientes B como una columna adicional a la derecha de la matriz de coeficientes A.
C) Calculando la transpuesta de la matriz de coeficientes A y sumándole la identidad.
D) Reemplazando todas las variables x por ceros en la matriz original.
Respuesta correcta: B
Justificación: La matriz ampliada del sistema surge conceptualmente de anexar de forma directa el vector columna de los términos independientes (B) a la estructura original de la matriz de coeficientes (A).  PREGUNTA 31Para una matriz cuadrada A de orden n, ¿es posible que el rango de la matriz ampliada r(A|B) sea menor que el rango de la matriz de coeficientes r(A)?
A) Sí, cuando el sistema es homogéneo.
B) Sí, cuando todos los términos independientes son negativos.
C) No, jamás puede suceder porque la matriz ampliada contiene a la de coeficientes y su rango solo puede ser igual o mayor.
D) Depende del método de resolución aplicado.
Respuesta correcta: C
Justificación: La matriz ampliada se forma agregando una columna a la matriz de coeficientes. Por lo tanto, el número máximo de columnas linealmente independientes en (A|B) nunca puede ser menor que en A, haciendo matemáticamente imposible que r(A|B) < r(A).  PREGUNTA 32¿Qué le sucede al determinante de una matriz cuadrada A de orden 3 si sumamos a la segunda fila los elementos de la primera fila multiplicados por la constante 4?
A) El determinante queda multiplicado por 4.
B) El determinante cambia de signo.
C) El valor del determinante no se modifica.
D) El determinante se reduce a cero.
Respuesta correcta: C
Justificación: Por propiedad de adición elemental, si a una fila de una matriz cuadrada se le suma otra fila paralela multiplicada por cualquier constante o escalar, el determinante de la nueva matriz no se modifica en absoluto respecto al original.  PREGUNTA 33En la Regla de Cramer, ¿cómo se arma el determinante específico modificado de la variable "y" (denotado como Delta_y)?
A) Se multiplica todo el determinante principal por el vector independiente.
B) Se elimina por completo la fila de términos independientes.
C) Se reemplaza la columna de los coeficientes de la variable "y" por la columna de los términos independientes del sistema.
D) Se intercambia la primera fila con la tercera fila de la matriz original.
Respuesta correcta: C
Justificación: Para construir los determinantes modificados en Cramer (como Delta_x, Delta_y o Delta_z), se debe sustituir estrictamente la columna de coeficientes de la incógnita en cuestión por los valores del vector de términos independientes (B).  PREGUNTA 34¿Cuál es el rango de la matriz nula de orden 3x3?
A) 3
B) 1
C) 0
D) No está definido para matrices sin valores.
Respuesta correcta: C
Justificación: Por definición de las propiedades del rango, el rango de la matriz nula (aquella compuesta en su totalidad por ceros) es igual a cero de manera absoluta, debido a que no contiene ninguna línea linealmente independiente.  PREGUNTA 35Si una matriz A es de orden 3x4 y una matriz B es de orden 4x2, ¿cuál es el orden de la matriz producto A * B?
A) 3x2
B) 4x4
C) 3x4
D) No se pueden multiplicar por ser rectangulares.
Respuesta correcta: A
Justificación: Para realizar el producto de dos matrices, el número de columnas de la primera debe coincidir con el de filas de la segunda (4 = 4). Las dimensiones externas determinan el tamaño de la matriz resultante, que en este caso es de orden 3x2.  PREGUNTA 36¿Qué se puede afirmar rigurosamente sobre el rango de una matriz regular de orden n x n?
A) Su rango es menor que n.
B) Su rango es igual a cero.
C) Su rango es máximo e igual a su orden n.
D) No se puede conocer el rango a partir de la regularidad.
Respuesta correcta: C
Justificación: Una matriz es regular si su determinante es distinto de cero. Esto implica que todas sus filas son linealmente independientes y, por ende, posee rango máximo, el cual coincide exactamente con el orden n de la matriz.  PREGUNTA 37Si al intentar resolver un sistema cuadrado por el método de la matriz Inversa (X = A^-1 * B) calculamos el determinante de la matriz de coeficientes y nos da |A| = 0, ¿qué conclusión teórica se debe extraer?
A) La solución única es cero.
B) El método de la inversa falló pero el sistema es obligatoriamente incompatible.
C) La matriz es singular, no admite inversa y el método NO puede aplicarse; se debe analizar el sistema mediante Gauss-Jordan y Rouché-Frobenius.
D) Hay que repetir el cálculo multiplicando las filas por una constante.
Respuesta correcta: C
Justificación: Si el determinante es cero, la matriz es singular y carece de inversa. Por lo tanto, queda completamente invalidada la aplicación del método de la inversa, obligando a resolver y clasificar el sistema mediante el método general de Gauss-Jordan y el análisis de rangos de Rouché-Frobenius.  PREGUNTA 38Al trabajar con un sistema de ecuaciones lineales extraído de una pyme de producción de pastas secas, se encuentra que el sistema es Compatible Indeterminado. ¿Qué significado económico tiene esto para el dueño de la empresa?
A) Que hay un error en los datos y no puede fabricar nada.
B) Que existe una única combinación perfecta de producción.
C) Que dispone de infinitas combinaciones posibles de kilos a producir para optimizar el uso de las máquinas, sujetas a restricciones de no negatividad.
D) Que las máquinas están rotas debido a la inconsistencia del rango.
Respuesta correcta: C
Justificación: Un SCI modeliza situaciones donde hay infinitas soluciones matemáticas válidas. En el marco práctico de una empresa, esto otorga flexibilidad operativa permitiendo elegir entre múltiples planes de producción combinando los tipos de productos según convenga.  PREGUNTA 39Dada la matriz elemental E que se obtuvo multiplicando la segunda fila de la identidad de orden 2 por la constante k = 3, ¿cuál es el determinante de E?
A) 6
B) 1
C) 3
D) 1/3
Respuesta correcta: C
Justificación: La matriz identidad original tiene determinante 1. Al aplicar una sola operación elemental consistente en multiplicar UNA sola línea por una constante k, el determinante de la nueva matriz elemental queda multiplicado por dicha constante (1 * k). En este caso, 1 * 3 = 3.  PREGUNTA 40¿Por qué se afirma que el método de Gauss-Jordan es superior y más general que los métodos de Cramer y de la Matriz Inversa?
A) Porque Gauss-Jordan requiere realizar menos cálculos aritméticos manuales.
B) Porque se puede aplicar a absolutamente CUALQUIER sistema de ecuaciones lineales, sin importar si es cuadrado o rectangular, compatible o incompatible.
C) Porque Cramer no funciona si los términos independientes son fraccionarios.
D) Porque es el único método que trabaja directo con determinantes de orden superior a 4.
Respuesta correcta: B
Justificación: Los métodos de Cramer y de la Matriz Inversa están severamente limitados a sistemas cuadrados con matrices de coeficientes regulares (|A| != 0). En contrapartida, Gauss-Jordan es un método universal aplicable a cualquier estructura de matriz y sistema lineal.  PREGUNTA 41Si una matriz cuadrada A tiene determinante |A| = 4, y otra matriz B del mismo orden tiene determinante |B| = -3, ¿cuál es el determinante de la matriz producto A * B?
A) 1
B) 7
C) -12
D) -4/3
Respuesta correcta: C
Justificación: Por la propiedad distributiva de los determinantes con respecto al producto de matrices cuadradas, el determinante del producto es igual al producto de los determinantes de las matrices factores: |A * B| = |A| * |B|. Operando: 4 * (-3) = -12.  PREGUNTA 42Al calcular el rango de una matriz tras realizar la reducción por filas, ¿a qué equivale numéricamente dicho rango?
A) Al número total de filas que componen la matriz original.
B) Al número de filas no nulas que quedan en la matriz escalonada resultante.
C) Al número de columnas que tienen al menos un cero.
D) Al valor numérico obtenido en el último pivote calculado.
Respuesta correcta: B
Justificación: El procedimiento práctico estándar para hallar el rango de cualquier matriz indica que se deben aplicar operaciones elementales hasta obtener una forma escalonada; el rango será exactamente igual al número de filas no nulas presentes en dicha matriz.  PREGUNTA 43Si se conoce que un sistema de ecuaciones lineales es "Incompatible", esto significa desde un punto de vista puramente geométrico y matemático que:
A) Las ecuaciones representan rectas o planos que se cortan en un único punto.
B) Las ecuaciones modelizan rectas o planos paralelos que no tienen ningún punto de intersección común.
C) Los planos coinciden en una misma recta espacial.
D) El sistema se puede resolver únicamente por determinantes nulos.
Respuesta correcta: B
Justificación: Un sistema incompatible es aquel que no posee solución, lo cual implica geométricamente que las restricciones matemáticas no se intersecan en ningún punto del espacio, representando rectas o planos sin intersección común.  PREGUNTA 44¿Cuál de las siguientes combinaciones de filas daría lugar a un determinante igual a cero en una matriz cuadrada de orden 3?
A) Tres filas totalmente distintas y linealmente independientes.
B) Dos filas paralelas que son proporcionales entre sí (por ejemplo, una es el doble de la otra).
C) Una matriz triangular superior con elementos no nulos en la diagonal.
D) Una matriz que tiene un pivote igual a 1 en cada columna.
Respuesta correcta: B
Justificación: El determinante de una matriz es cero si y solo si sus filas son linealmente dependientes. Esto ocurre explícitamente si la matriz cuenta con dos líneas paralelas iguales o proporcionales.  PREGUNTA 45¿Qué ocurre con el rango de una matriz si multiplicamos a todos los elementos de una de sus filas por una constante k = -5?
A) El rango queda multiplicado por -5.
B) El rango disminuye en una unidad.
C) El rango no cambia, se mantiene exactamente igual.
D) El rango se vuelve nulo de forma inmediata.
Respuesta correcta: C
Justificación: Multiplicar una fila por una constante no nula es una operación elemental por fila. Por propiedades del rango, la aplicación de operaciones elementales por fila altera los elementos individuales de la matriz pero conserva intacto el rango de la misma.  PREGUNTA 46En el análisis final de un sistema compatible indeterminado por Gauss-Jordan, ¿qué son las "variables libres"?
A) Son aquellas variables asociadas a los pivotes de la matriz identidad.
B) Son variables cuyos valores están fijos y predeterminados en cero de antemano.
C) Son aquellas variables sobrantes (en función de las cuales se expresan las variables principales) que pueden tomar cualquier valor real.
D) Son los términos independientes que se eliminaron durante la reducción.
Respuesta correcta: C
Justificación: Al resolver un SCI, las variables asociadas a las columnas sin pivote se denominan variables libres. Las variables principales se despejan en función de estas variables libres para construir la solución general del sistema.  PREGUNTA 47Si una matriz A es de orden 3x3 y presenta un determinante |A| = 10, ¿cuál es el valor del determinante de su transpuesta multiplicada por 2, es decir, |2 * A^T|?
A) 20
B) 40
C) 80
D) 160
Respuesta correcta: C
Justificación: Primero, sabemos que |A^T| = |A| = 10. Luego, al multiplicar la matriz transpuesta (que sigue siendo de orden 3) por la constante 2, aplicamos la propiedad de homogeneidad: |2 * A^T| = (2^3) * |A^T| = 8 * 10 = 80.  PREGUNTA 48¿Cuál de los siguientes pares de matrices representa una relación de equivalencia por filas (A ~ B)?
A) Dos matrices de orden totalmente diferente.
B) Una matriz A que se transforma en B mediante un número finito de operaciones elementales por fila.
C) Dos matrices que tienen el mismo número de elementos pero distintos rangos.
D) Una matriz regular y otra singular del mismo orden.
Respuesta correcta: B
Justificación: Por definición, dos matrices A y B se consideran equivalentes por filas si y solo si es posible pasar de una a la otra mediante la aplicación sucesiva de una cantidad finita de operaciones elementales por fila.  PREGUNTA 49Si se tiene un sistema de 3 ecuaciones con 4 incógnitas, ¿puede ser este un sistema compatible determinado bajo alguna circunstancia?
A) Sí, si el rango de la matriz ampliada es igual a 4.
B) Sí, si es un sistema homogéneo.
C) No, jamás puede ser determinado porque el rango máximo posible es 3, el cual es estrictamente menor que el número de incógnitas (4).
D) Depende del valor de los términos independientes.
Respuesta correcta: C
Justificación: El rango de la matriz de coeficientes r(A) está limitado por el número de filas, por lo que r(A) <= 3. Al haber 4 incógnitas (n = 4), el rango jamás podrá alcanzar el valor de n. Según Rouché-Frobenius, esto imposibilita por completo que el sistema sea compatible determinado (solución única).  PREGUNTA 50Al efectuar operaciones elementales por fila para resolver un sistema, ¿cuál de las siguientes acciones arruinaría por completo la equivalencia del sistema de ecuaciones?
A) Intercambiar de lugar la primera ecuación con la tercera.
B) Multiplicar todos los miembros de la segunda ecuación por la constante cero.
C) Restar a la tercera fila el doble de la primera fila.
D) Dividir todos los elementos de una fila por el número 2.
Respuesta correcta: B
Justificación: Multiplicar una ecuación completa por cero elimina la ecuación de forma definitiva (la borra del sistema transformándola en 0 = 0), perdiendo la información original y rompiendo la relación de equivalencia matemática."""

def parse_questions():
    questions = []
    
    # regex for new format
    pattern = r'PREGUNTA\s*\d+\s*([\s\S]*?)(?=\s*PREGUNTA\s*\d+|$)'
    matches = re.findall(pattern, text, re.IGNORECASE)
    
    # read existing json to get next ID
    try:
        with open('algebra_questions.json', 'r', encoding='utf-8') as f:
            existing_questions = json.load(f)
    except FileNotFoundError:
        existing_questions = []
        
    start_id = len(existing_questions) + 1
    
    for i, m in enumerate(matches):
        qBlock = m
        ansMatch = re.search(r'Respuesta correcta:\s*([A-Z])', qBlock, re.IGNORECASE)
        correct = ansMatch.group(1).upper() if ansMatch else ''
        
        justMatch = re.search(r'Justificaci[óo]n:\s*([\s\S]*)', qBlock, re.IGNORECASE)
        just = justMatch.group(1).strip() if justMatch else ''
        
        beforeAns = re.split(r'Respuesta correcta:', qBlock, flags=re.IGNORECASE)[0]
        parts = re.split(r'\s*([A-Z]\)\s*)', beforeAns)
        qText = parts[0].strip()
        
        options = []
        for j in range(1, len(parts)-1, 2):
            if parts[j] and parts[j+1] is not None:
                options.append({
                    'id': parts[j].replace(')', '').strip().upper(),
                    'text': parts[j+1].strip()
                })
                
        questions.append({
            'id': start_id + i,
            'text': qText,
            'options': options,
            'correctId': correct,
            'justification': just
        })
        
    existing_questions.extend(questions)
    
    with open('algebra_questions.json', 'w', encoding='utf-8') as f:
        json.dump(existing_questions, f, ensure_ascii=False, indent=4)
        
    with open('algebra_questions.js', 'w', encoding='utf-8') as f:
        f.write('window.algebraQuestions = ')
        json.dump(existing_questions, f, ensure_ascii=False, indent=4)
        f.write(';')
        
    print(f"Added {len(questions)} questions.")

if __name__ == '__main__':
    parse_questions()
