# fs-bootcamp
1. Instalar un IDE en vuestra máquina. De acuerdo con las preferencias del profesorado del Máster, recomienda Visual Studio Code, pero se permite flexibilidad en la elección. (0.5 puntos)
2. Crearse un perfil de GitHub. (0.5 puntos)
3. Crearse un repo personal en GitHub para que aparezca como perfil público.
(0.5 puntos)
4. Desplegar una base de datos de MongoDB en un container de Docker con
persistencia. Crear una database y una colección o colecciones para almacenar documentos. (2 puntos)
a. Crear algunos documentos en la(s) colección(es) que se ha(n) creado. Pueden tener los mismos campos que los que se vieron en clase o tener la estructura que se desee.
b. Se puede rellenar la base de datos con mecanismo de llamada a alguna API o se pueden meter a mano o facilitar mockeados.
5. Crear una API sencilla con Nodejs (3 puntos) que sea capaz de:
a. Conectarse al mongo dockerizado
b. Crear una ruta que, mediante un GET, devuelva todos los documentos en
una colección
Definir una ruta que, mediante un GET, devuelva sólo los documentos que cumplen la condición en base a un query sobre uno o varios campos de un documento.
d. Definir una ruta con método PUT que modifique alguno de los campos de un documento (el cual debe cumplir alguna condición o query). Los códigos 4xx se dejan a su elección. Los códigos 2xx deben ser, como mínimo, los siguientes:
i. If not found, create a new document in the database. (return 201 Created)
ii. If found, target keyword(s) to be successfully modified (200 OK)
e. Definir una ruta con método DELETE que elimine el(los) documento(s) que cumplan alguna condición o query. Los códigos 4xx se dejan a su
elección. Los códigos 2xx deben ser, como mínimo, los siguientes: i. If not found, do nothing. (204 No Content)
ii. If found, document deleted (200 OK)
6. Dockerizar la API del punto 5. (1 punto)
7. Subir a un repo público de GitHub el repositorio creado para realizar el punto 5 y 6. El repositorio debe ir acompañado de un README.md que contenga una descripción e instrucciones para poder usar el código en otra máquina. (2.5 puntos)
a. Se pide que el alumno intente trabajar haciendo uso de, al menos, una rama.
b. De esta manera, se pide que se realice al menos una Pull Request mínimamente documentada y un mergeo a main antes de entregar la actividad. Por ello, también se pide no borrar la rama tras el mergeo.