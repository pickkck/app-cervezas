# Prueba Técnica Aarón Ramírez

## Razonamiento

Para el desarrollo de la prueba lo primero que realice fue introducirme y familiarizarme con la API,
ver los valores que solicita y la respuesta otorgada a las peticiones, la informacion que nos devuelve
y como podemos utilizarla para el desarrollo de la aplicacion para esto primero utilice el programa 
Postman el cual nos permite realizar peticiones y ver la resupuesta.

Una vez obtenida la informacion de la estructura de la API se creo el proyecto de VueJS haciendo uso 
de VueCLI y conforme se fueron ocupando se instalaron diferentes paquetes los cuales son: 
    -vuetiffy: dentro de los requirimientos se solicito el uso de vutify como libreria de componentes
    -vuex: vuex es utilizado para el control de estado de la aplicacion
    -axios: utilice axios para el manejo de las peticiones a la API
    -vue-router: mediante este paquete manejamos rutas en nuestra aplicacion
    -vue-meta: utilizamos vue-meta para algunos settings visuales de la app, en este caso el title dinamico
    -moment: con esta libreria de JS manejamos y controlamos fechas de una forma mas facil
    
A pesar de no ser una aplicacion de gran escala, se modularizo para tener un control mas ordenado sobre los 
archivos, esto nos permite una gestion y acceso mas especifico para cada elemento que neecsitamos modificar. 

Para el desarrollo de la aplicacion se penso en una propuesta la cual fuera optima e intuitiva para el usuario 
con el fin de navegar entre un listado de cervezas, teniendo en cuenta una paginacion para no cargar de informacion
extra a la aplicacion y solo traer la informacion que el usuario desea ver. Se incluyo un buscador para que el usuario
pueda filtrar cervezas por su nombre y tambien un filtro de fecha que es de los parametros que soporta la API.
Aqui nos encontramos con un problema con la API ya que la informacion que devuelve es muy poca, en estos casos no 
nos devuelve el total de resultados existentes correspondientes al filtro, en la parte de familiarizacion con la API
se observo que esta por default regresa 25 registros (per_page = 25) pero si modificamos este valor podemos obtener 
mas registros sin exceder el valor 80, por lo que para cada consulta se hizo una segunda consulta con los mismos filtros
pero aplicando el valor maximo para obtener el numero de resultados (array.lenght) y poder realizar la paginacion correcta.

Finalmente se agrego una vista para cada cerveza individual mostrando mas informacion de la cerveza seleccionada, 
y se busco que la aplicacion fuera lo mas responsiva posible tomando en cuenta diferentes medidas de pantalla y 
tratando de que el uso en dispositivo mobile sea igual de intuitivo y accesible. Otros de los extras desarrollados fue un
loader el cual se activa al realizar la peticion a la API esto no es muy detectable ya que la API responde rapidamente, 
pero fue pensado para conexiones lentas y no dar la sensacion de que la aplicacion se quedo congelada. 



## Preguntas Técnicas

- **¿Has aplicado los principios SOLID?**
    A mi parecer es complicado aplicar los principios SOLID en un proyecto basado en JavaScript, ya que los principios 
    SOLID fueron pensados para el desarrollo orientado a objetos y JS no es un lenguaje orientado a objetos o basados en 
    clases, si bien hay tecnologias como TypeScript que buscan ser orientado a objetos es un poco complciado 
    aplicar estos principios, sin embargo considero que el principio de Responsabilidad Unica es aplicable a mi proyecto 
    ya que se busco crear funciones unicas para cada tarea, esto mediante el uso de Vuex separando los getters, setters y 
    mutations. 
    
- **¿Cuánto tiempo has estado pensando y escribiendo tests del código? 
    Si hubieras tenido mucho más tiempo... ¿qué habrías añadido? 
    Si no has realizado tests, ¿qué herramientas habrías utilizado para llevarlos a cabo?**
    No he dedicado tiempo a escibir test de codigo, el test realizado es el de compilacion, se que existen diferentes tipos 
    de herramientas para pruebas de VueJS pero no he trabajado con ellas y desconozco su funcionamiento, me encantaria 
    aprender a realizar estos tests y sobre el uso de las diferentes herramientas existentes. 
    
- **¿Cómo mejorarías la API que has usado?**
    Completaria la paginacion de la pagina haciendo un formato en el cual muestre los resultados solicitados pero incluyendo 
    el total de resultados, esto evitaria el problema que mencione en el razonamiento. Tambien incluira algunos gets para obtener
    los valores de filtros posibles o existentes ya que los filtros presentados por la API son muy ambiguos. 
    
- **¿Crees que esta API soporta peticiones CORS? ¿Cómo has llegado a esa conclusión?**
    Si, en la documentacion de la API hace un comentario sobre rate limits para cada IP por lo que se comparte informacion 
    al igual que al usar postman y realizar consultas y ver los header podemos ver los acces-control-expose-headers por 
    lo que concluyo que la API soporta peticiones CORS
    
- **¿Cómo rastrearías un problema de rendimiento en producción? ¿Alguna vez has tenido que hacerlo?**
    Si he realizado algunos test de rendimiento y para ello he utilizado una herramienta de google en la cual revisa el sitio, 
    y regresa un informe de rendimiento mostrando algunas secciones que pueden causar problemas, como es el uso excesivo de css 
    que no se utiliza, al igual de mucho codigo JS, imagenes que no cargan o son demasiado pesadas, y algunos tips mas de mejoras. 
    Esta herramienta se llama Google PageSpeed Insights
    Otra forma es el uso de la aplicacion, haciendo un mapeo manual.
    
- **Descríbete a ti mismo en formato JSON.**
```json

{
    "name": {
        "first_name": "Aaron",
        "last_name": "Ramirez"
    },
    "gender": "male",
    "birthday": "1997-04-16",
    "weight": {
        "value": 76.7,
        "unit": "kg"
    },
    "height": {
        "value": 167,
        "unit": "cm"
    },
    "collage":{
        "degree":"computer systems engineer",
        "institution":"Instituto Tecnologico de Celaya"
    },
    "about_me": "Soy una persona que le gusta concoer nuevos temas, me gusta probar diferentes experiencias, viajar, deportes, me apasiona tener nuevos desafios mediante los cuales pueda crecer como persona y profesionalmente, siempre procuro compartir mi conocimiento y me agrada aprender de los demas."
}

```
