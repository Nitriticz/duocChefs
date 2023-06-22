$(document).ready(function () {
  if (typeof Storage !== "undefined") {
    localStorage.removeItem("platos");
    let platos = JSON.parse(localStorage.getItem("platos"));
    if (platos === null) {
      platos = [];
      platos.push(
        {
          id: 1001,
          nombre: "Creme Brulé",
          descripcion: "Postre francés de crema y azúcar caramelizada",
          tipo: "Postre",
          precio: 4000,
          imagen: "img/platos/creme-brulee.png",
          ingredientes: [
            "4 yemas de huevo",
            "60 g de azúcar",
            "1 vaina de vainilla",
            "500 ml de nata líquida o crema de leche 35% M.G.",
            "1 pizca de sal (2 gramos)",
            "Azúcar para espolvorear y luego quemar",
          ],
          modo: "Frío",
          preparacion: [
            "Comenzamos preparando la base de agua en la que colocaremos nuestros moldes con la crème brûlée. Para ello llenamos de unos 3 dedos de agua, una bandeja grande en la que luego nos quepan los moldes que vayamos a utilizar para hornear la crema.",
            "Encendemos el horno a 160º C y ponemos la fuente con el agua en el horno. La intención es que el agua esté caliente en el momento en el que comencemos a hornear la crema.",
            "En una cazuela calentamos la nata con las semillas de la vaina de vainilla. Incorporamos también la propia vaina, una vez abierta. Calentamos la nata durante unos 10 minutos, teniendo mucho cuidado de que nunca llegue a hervir. Retiramos del fuego y dejamos que repose durante 20 minutos.",
            "En un bol batimos las yemas con el azúcar y una pizca de sal, hasta que tengamos una crema espumosa. Añadimos la nata poco a poco, colándola y sin parar de remover hasta integrarla con el resto de ingredientes.",
            "Volvemos a poner la crema en una cazuela y la cocinamos, sin parar de remover, a fuego medio durante unos minutos. Veremos como la crema empieza a espesar ligeramente.",
            "Vertemos la mezcla en los moldes que hayamos elegido para la crème brûlée y los colocamos dentro de la fuente que tenemos calentándose en el horno. El agua de la fuente debería llegar hasta más o menos la mitad de los molde con la crema.",
            "Precalentamos el horno a 160º C durante 10 minutos. El horno debe estar caliente cuando metamos la crème brûlée. Horneamos durante 30 minutos a 160º C.",
            "Retiramos la bandeja del horno y dejemos que se enfríe la crema sobre una rejilla. No guardaremos las crème brûlée en el frigo hasta que se haya enfriado totalmente. Podemos dejarla de un día para otro.",
            "Cubrimos cada uno de los molde con 2 cucharadas de azúcar. Y con la ayuda de un quemador de cocina tostamos el azúcar superficial hasta que quede un caramelo. Sólo tiene que quedar con una fina capa que protegerá la crema.",
            "Dejamos que el caramelo se enfríe y se solidifique antes de disfrutar de este postre lácteo tradicional francés. Toda una maravilla gastronómica, perfecta para una sobremesa de categoría.",
          ],
        },
        {
          id: 1002,
          nombre: "Gazpacho",
          descripcion:
            "Sopa fría española con tomates, pepinos, pimientos y aceite de oliva",
          tipo: "Sopa",
          precio: 8000,
          imagen: "img/platos/gazpacho.png",
          ingredientes: [
            "1 kg de tomates rojos bien maduros",
            "1 pimiento verde italiano",
            "1 pepino",
            "1 diente de ajo",
            "50 ml de aceite de oliva extra virgen",
            "150 g de pan blanco (un trozo)",
            "5 g de sal",
            "30 ml de vinagre de Jerez",
            "Para la guarnición: 1 cebolla pequeña, 1 tomate, 50 g de pimiento verde y 50 g de pepino. (todo en pequeños dados)",
          ],
          modo: "Frío",
          preparacion: [
            "Limpiamos bien los tomates y lavamos toda la verdura que vamos a emplear. Hay que tener en cuenta que es una receta que no va cocinada, y a pesar de acidificarla con el vinagre es muy importante que todo vaya bien limpio. Cortamos en cuartos los tomates y los añadimos a un bol grande.",
            "Pelamos los pepinos y les cortamos los extremos. Los cortamos en trocitos pequeños. Cortaremos del mismo modo la cebolla pelada y el pimiento verde. Reservamos.",
            "Cortamos el pan en trozos pequeños y le añadimos un poco de agua, lo dejamos reposar durante unos 10 minutos. Así ayudamos a que el pan se ablande si está muy duro y será mucho más fácil de batir.",
            "Pelamos el diente de ajo y como lo vamos a usar en crudo le quitamos el centro para que no repita. Lo añadimos al bol con el tomate y las demás hortalizas.",
            "Ponemos todo en el vaso de la batidora o un bol grande y echamos el aceite de oliva virgen extra, vinagre de Jerez y la sal. Trituramos con la batidora hasta que nos quede una salsa líquida.",
            "Pasamos esta salsa por un colador o un chino, así retiramos posibles trozos de piel y pequeñas pepitas que hayan quedado para que nos quede lo más fino posible. Probamos si está bien de sal y si no rectificamos con un poco más.",
            "Sólo nos queda meterlo en la nevera y dejar que se enfríe, en un par de horas lo tendréis bien fresquito y perfecto para probar el mejor gazpacho.",
          ],
        },
        {
          id: 1003,
          nombre: "Salteado de Champiñones",
          descripcion:
            "Champiñones salteados en aceite de oliva, ajo y vino blanco",
          tipo: "Entrada",
          precio: 8500,
          imagen: "img/platos/salteado-champinones.png",
          ingredientes: [
            "20 champiñones",
            "4 cucharadas de aceite de oliva",
            "2 cucharadas de vinagre blanco",
            "2 cucharaditas de orégano o de finas hierbas",
            "Sal a gusto",
            "30 gramos de mantequilla para freír",
            "Tomate",
          ],
          modo: "Caliente",
          preparacion: [
            "Limpiaremos bien los champiñones y cortaremos el pie de éste. Eliminaremos toda la tierra y nos aseguraremos que no tiene restos. No usar agua para lavarlos.",
            "En un bol aparte, mezclar el aceite de oliva, el vinagre y el orégano (o las finas hierbas). Salpimentar.",
            "Colocar los champiñones en el bol, remover y dejar macerar por una hora.",
            "Si desea, puede dejar enteros los champiñones o cortarlos por la mitad.",
            "Derretir la mantequilla en la sartén bien caliente y dorar los champiñones.",
            "Retirarlos cuando hayan cambiado de color.",
            "Previamente, colocar los tomates en rodajas sobre una bandeja, con un chorrito adicional de aceite de oliva y, si desea, una pizca de sal.",
            "Colocar los champiñones sobre los tomates y servir.",
          ],
        },
        {
          id: 1004,
          nombre: "Sopa de Tomate",
          descripcion: "Casera, hecha con tomates frescos y crema",
          tipo: "Sopa",
          precio: 8000,
          imagen: "img/platos/sopa-tomate.png",
          ingredientes: [
            "1 kg de tomates maduros",
            "1 l de agua",
            "1 cebolla",
            "2 dientes de ajo",
            "1 pimiento rojo",
            "1 zanahoria",
            "Una cucharada de azúcar",
            "Una hoja de laurel, menta o perejil para decorar",
            "Sal, pimienta y aceite de oliva",
            "Pan (opcional)",
          ],
          modo: "Frío, Caliente",
          preparacion: [
            "Lo primero que vamos a hacer para elaborar esta deliciosa sopa de tomate es dejar listos los ingredientes. Para ello, pela y pica en trozos pequeños la cebolla, el pimiento rojo, los dientes de ajo y la zanahoria. El pimiento no es necesario que sea muy grande, uno de tamaño mediano será suficiente.",
            "Cuando los tengas bien picados, coge una olla, añade un chorrito de aceite de oliva, incorpora todos estos ingredientes y póchalos. Deberás hacerlo a fuego lento para obtener el resultado esperado. Salpimenta al gusto. Mientras se pocha la verdura, retira los tallos de los tomates y realiza un corte en cruz en cada uno de ellos.",
            "Ahora, coge otra olla con la capacidad suficiente como para añadir todos los tomates, llénala de agua y ponla a hervir. Cuando el agua esté hirviendo, incorpora los tomates y déjalos durante un minuto aproximadamente para que se escalden. Es fundamental que estos vegetales sean maduros para obtener un sabor más intenso.",
            "Mientras se escaldan los tomates, añade la cucharada de azúcar a las verduras y remuévelas. Deberás ir vigilando que no se quemen ni peguen, de manera que muévelas con una cuchara de madera de vez en cuando. El azúcar lo utilizamos para aminorar un poco la acidez de los tomates pero, si lo prefieres, puedes reducir la cantidad de este ingrediente. Ten en cuenta que el proceso de pochar verduras no es rápido y te llevará tiempo.",
            "Cuando los tomates estén escaldados, retíralos, deja que se enfríen un poco y quítales la piel a cada uno de ellos, verás que prácticamente sale sola. Luego, deberás picarlos como hiciste con las verduras, en trozos pequeños. Una vez que las verduras se hayan pochado, incorpora los tomates picados, remuévelo todo, déjalo un minuto más y cubre todos los vegetales de agua. El litro de agua es aproximado es posible que en total necesites un poco más.",
            "Una vez que hayas cubierto los vegetales con el agua, deberás dejarlos al fuego unos 20 minutos aproximadamente, súbelo a fuego medio para que hierva. Pasado el tiempo, verás que la sopa de tomate ya ha adquirido el tono rojizo tan característico de este plato tradicional. Apaga el fuego, deja que se entibie un poco y bátelo todo para conseguir una textura cremosa y lisa.",
            "En muchos lugares se tiene la costumbre de servir la sopa de tomate con un poco de pan frito por encima. De manera que, si quieres, puedes trocear un poco de pan, freírlo y añadirlo a los platos individuales. Cuando hayas batido bien la sopa de tomate, solo te queda servirla y, a modo de decoración, colocar una hoja de laurel, de perejil o de menta en el centro o un lado del plato.",
          ],
        },
        {
          id: 1005,
          nombre: "Lasagna",
          descripcion:
            "Una comida sustanciosa rica en ricas capas de pasta, carne de res cocida y queso",
          tipo: "Fondo",
          precio: 10000,
          imagen: "img/platos/lasagna.png",
          ingredientes: [
            "500 g. de carne (una mezcla de cerdo y ternera)",
            "2 pimientos rojos",
            "2 zanahorias",
            "2 dientes de ajo",
            "150 g. de bacon o panceta",
            "2 cebollas grandes",
            "250 g. de tomate natural (1 vaso aproximadamente)",
            "250 ml de vino blanco (200 ml. aproximadamente)",
            "100 ml. de aceite de oliva virgen extra",
            "1 cucharita colmada de orégano seco (o hierbas provenzales)",
            "Sal y pimienta negra recién molida (al gusto de cada casa)",
            "12 láminas de lasaña o lasagna Garofalo",
            "125 g de harina de trigo de todo uso",
            "125 g de mantequilla",
            "1 litro de leche entera",
            "Una pizca de nuez moscada (unos 4 g.)",
            "Sal y pimienta negra recién molida (al gusto de cada casa)",
            "100-120 g. de queso rallado Grana Padano"
          ],
          modo: "",
          preparacion: [
            "Calentamos una cazuela grande de agua, la más ancha de casa. Cuando empiece a hervir echamos 2 puñados generosos de sal.",
            "Introducimos las láminas de lasaña una a una sin que se toquen (para que no se peguen entre ellas). Ahora podemos encontrar infinidad de tipos de lasaña donde no hace hidratarla como se hacía antes. En casa muchas veces para ahorrar tiempo empleo las que se hidratan con la bechamel y el jugo que suelta la salsa al hornear.",
            "Si lo hacéis de la manera tradicional tenemos que remover con una cuchara de madera y en unos 10 minutos sacamos las láminas. Las estiramos encima de unas hojas de papel absorbente de cocina. Aunque os parezca que no están, acabarán haciéndose en el horno.",
            "El siguiente paso será lavar muy bien todas las verduras que vamos a emplear en el relleno. En la receta os aconsejo el relleno de la clásica salsa boloñesa, zanahorias, ajo, pimientos y cebolla.",
            "Las verduras las cortamos en trocitos pequeños para que se junten bien en la salsa. Las zanahorias las cortamos lo más fino posible. Os recomiendo laminarlas con el pelador de las patatas porque a la hora de pocharlas si las tiras son gruesas no se hacen. Reservamos todo en un bol.",
            "En otra cazuela echamos aceite de oliva virgen extra. Empezamos introduciendo pochando la cebolla y el ajo, cuando esté doradita, añadimos el resto de ingredientes.",
            "Sofreímos todo a temperatura media durante unos 15 minutos y esperamos por la carne. Salpimentamos la carne al gusto y la echamos a la cazuela con la verdura. Dejamos que se pase durante 5 minutos y cuando veamos que va cambiando de color introducimos el bacon o panceta en trozos muy pequeños. Vertemos un vaso de vino blanco y esperamos a que reduzca (otros 5 minutos a fuego medio).",
            "Añadimos un vaso de tomate natural, echamos la cucharadita de orégano y rectificamos de sal y pimienta si hiciese falta (probad la salsa para ver si está a vuestro gusto). Removemos la carne con las verduras y retiramos del fuego, dejamos enfriar un poco.",
            "Precalentamos el horno a 200º C durante 15 minutos, lo justo para hacer el resto de la lasaña.",
            "Mientras reposa la salsa vamos a preparar la bechamel, la podemos preparar más cremosa o más consistente dependiendo de las medidas.",
            "Para montar la lasaña la cosa es muy sencilla. Ponemos en el fondo de la fuente unas cucharadas de la bechamel. Encima las láminas, una capa de la mezcla con la carne en cada lámina, otra vez la bechamel y así hasta tener 3 pisos.",
            "Se pueden hacer las capas de lasaña que quieras, bueno las que te permita la fuente. Finalmente rematamos con una capa generosa de bechamel. Y para aquellos que le guste el queso, rallamos aquel que más os guste, que sea especial para gratinar.",
            "Horneamos en la bandeja del medio durante 15 minutos a 180º C y durante 3-5 minutos en la parte superior con el gratinador puesto para que se dore. Lista para comer, no hace falta reposo, del horno a la mesa."
          ],
        },
        {
          id: 1006,
          nombre: "Fettuccine Alfredo",
          descripcion:
            "Pasta casera de fettucine, cubierta con nuestra salsa bruschetta casera, salsa Alfredo y queso parmigiano",
          tipo: "Fondo",
          precio: 7000,
          imagen: "img/platos/fettuccine-alfredo.png",
          ingredientes: [
            "400 g de fettuccini",
            "200 g de nata líquida",
            "40 g de mantequilla",
            "80 g de queso parmesano",
            "Sal a gusto",
            "Pimienta negra molida al gusto",
            "1 cucharada de perejil picado",
          ],
          modo: "Caliente",
          preparacion: [
            "Ponemos a calentar abundante agua en una olla. Cuando rompa a hervir, añadimos la sal y la pasta. Cocinamos, a fuego medio, manteniendo un hervor moderado, y removiendo de tanto en tanto hasta que la pasta esté al dente. El tiempo de cocción suele venir impreso en el paquete.",
            "Mientras que se cocina la pasta, calentamos en una sartén, a fuego medio, la mantequilla y la nata. Cuando la mantequilla se funda incorporamos el queso y mezclamos. Cocinamos hasta que el queso se incorpore a la mezcla formando una crema de textura uniforme.",
            "Cuando la crema esté lista, añadimos la pimienta molida y volvemos a mezclar. Seguidamente, picamos el perejil y lo incorporamos a la sartén. Mezclamos y mantenemos la crema al fuego para que no se enfríe. Bajamos el fuego al mínimo.",
            "Cuando la pasta esté lista, la ponemos en el escurridor. A continuación, añadimos la pasta a la sartén, mezclamos bien para que se impregne con la salsa y servimos de inmediato."
          ],
        },
        {
          id: 1007,
          nombre: "Chorrillana",
          descripcion: "La Chorrillana personal, papas fritas, huevos, chorizo",
          tipo: "Fondo",
          precio: 11000,
          imagen: "img/platos/chorrillana.png",
          ingredientes: [
            "1 kg de posta negra",
            "5 papas",
            "1 cebolla pequeña",
            "1 pizca de sal y pimienta",
            "4 huevos",
            " 1 litro de aceite vegetal",
          ],
          modo: "Caliente",
          preparacion: [
            "Lava las papas, pélalas y córtalas en tiras, tal y como harías para cocinar unas papas fritas tradicionales.",
            "Sazona la carne con sal y pimienta para que la chorrillana casera tenga el máximo sabor.",
            "Calienta el litro de aceite en una olla a fuego medio y fríe las papas hasta que veas que se tornan doradas.",
            "Lava bien la cebolla y córtala en juliana. La chorrillana chilena tradicional se caracteriza por presentar la cebolla cortada mediante esta técnica, aunque si prefieres optar por otro tipo de corte puedes hacerlo.",
            "Cocina los trozos de carne en una sartén con un chorrito de aceite. Cuando esté cocida por ambos lados, retírala pero no apagues el fuego. Aparte, corta la carne en tiras.",
            "Sube el fuego y sofríe la cebolla en la misma sartén para que se impregne del jugo que quedó de la carne. Saltéala hasta que esté blandas y tomen un poco de color.",
            "En este punto, ya deberían estar listas las papas, de manera que retíralas y resérvalas sobre papel de cocina para absorber el exceso de grasa. Así mismo, cocina los huevos fritos con un poco de sal y pimienta al gusto.",
            "Ahora solo queda montar la chorrillana siguiendo este orden: papas, carne, cebolla y, por último, los huevos.",
          ],
        },
        {
          id: 1008,
          nombre: "Tacos de Pollo al Pastor",
          descripcion:
            "Deliciosas tortillas de maíz con pollo asado a la parrilla",
          tipo: "Entrada",
          precio: 5000,
          imagen: "img/platos/tacos-pollo-pastor.png",
          ingredientes: [
            "2 dientes de ajo",
            "4 piezas de clavo de olor",
            "1 cucharadita de comino",
            "3 piezas de pimienta negra",
            "1 taza de puré tomate",
            "10 piezas de chile guajillo",
            "2 piezas de chile ancho",
            "1/4 de cebolla",
            "1 taza de jugo de piña",
            "110 g de achiote",
            "1/4 de taza de vinagre de manzana",
            "1 kg de pechuga de pollo sin hueso ni piel",
            "1 pizca de sal",
            "1/2 kg de tortillas de maíz",
            "1/2 kg de cebolla",
            "1 manojo de cilantro",
            "1 taza de piña en trozos"
          ],
          modo: "Caliente",
          preparacion: [
            "Asamos nuestros chiles en un comal o sartén sin aceite.",
            "Cuando estén listos, les quitamos las venas y semillas. Después los ponemos a hidratar en agua caliente.",
            "Cortamos nuestra pechuga en tiras largas.",
            "Picamos finamente la cebolla y el cilantro. Cortamos la piña en láminas. Reservamos.",
            "También asamos los ajos, el comino, el clavo y la pimienta por 3 o 5 minutos o hasta que suelten aroma.",
            "Cuando esté todo listo, colocamos en el vaso de la licuadora todo lo que asamos, incluidos los chiles. Además, le añadimos el puré de tomate. También agregamos el achiote, el jugo de piña, el vinagre y sazonamos al gusto.",
            "En un recipiente hondo colocamos las tiras de pollo. Revolvemos la pasta para marinar. Dejamos por una hora.",
            "Transcurrido ese tiempo, calentamos un sartén y añadimos aceite. Cuando esté listo freímos el pollo marinado. Nos aseguramos de cocinarlas por todos los lados. Podemos dejar que se doren un poco.",
            "Calentamos nuestras tortillas en el sartén del pastor.",
            "Servimos pastor de pollo en nuestras tortillas y servimos con cilantro, cebolla y piña."
          ],
        }
      );
      localStorage.setItem("platos", JSON.stringify(platos));
    }
    platos.forEach((plato) => {
      let html = `
        <div class="col-3">
            <div class="card" data-bs-toggle="modal" data-bs-target="#platoModal">
                <div class="card-body pb-0">
                    <div class="img-container mb-2">
                        <div class="img-border">
                            <img src="${plato.imagen}" class="card-img-top">
                        </div>
                    </div>
                    <h3 class="id">${plato.id}</h3>
                    <h3 class="card-title">${plato.nombre}</h3>
                    <p class="mb-0">
                        ${plato.descripcion}
                    </p>
                </div>
                <div class="col-12 mt-2 text-center">
                    <a class="btn">$${plato.precio}</a>
                </div>
            </div>
        </div>`;
      $(".platos").append(html);
    });
  } else {
    alert("El navegador no posee localStorage");
  }
});
