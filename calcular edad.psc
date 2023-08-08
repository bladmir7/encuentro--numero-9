Algoritmo sin_titulo
	
	Definir  d, m, a Como Entero;
	Definir df, mf, af Como Entero;
	Definir edad Como Entero;
	
	Escribir Sin saltar "Dia de nacimiento: "
	leer d;
	Escribir Sin saltar "Mes de nacimiento: "
	leer m;
	Escribir Sin saltar "Año de nacimiento: "
	leer a;
	Escribir Sin saltar "Dia actual: "
	leer df;
	Escribir Sin saltar "Mes actual: "
	leer mf;
	Escribir Sin saltar "Año actual: "
	leer af;
	
	edad <- af - a;
	
	Si ((mf < m) o (mf == m) y (df < d)) Entonces
		edad <- edad - 1;
		
	FinSi
	
	Escribir "Usted tiene: ", edad;
	
FinAlgoritmo
