import { Flex, Text, Stack, Box, Center, Image, Link, Button } from "@chakra-ui/react";


export default function Electricity() {
    return (
        <Box>
            <Text as='sub'>Fecha: 15/10/2022</Text>
            <br />
            <Center h='80px' color='blackAlpha.700'>
                <Text fontSize='45px' as='b'>Plantas eléctricas </Text>
            </Center>
            <br />
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3, 4]}>
                Existen varias formas de generar electricidad, algunos ejemplos son: energía solar, hidráulica, gas, nuclear, petróleo, etc.
                Buscamos encontrar aquellas empresas que puedan tener potencial de crecer en los próximos años y que tal vez puedan revolucionar
                su propia industria. Esta búsqueda se va a realizar analizando tres bases de datos que ayuden
                a vislumbrar el panorama de la generación de esta energía y ver hacia donde se dirige.
            </Text>
            <Text fontSize='xl' noOfLines={[1, 2, 3, 4]}>
                En la primer parte vamos a empezar a filtrar por países, buscando los más innovadores. Dado el potencial a futuro que esto pueda traer.
            </Text>
            <Text fontSize='xl' noOfLines={[1, 2, 3, 4]}>
                En la segunda parte se va a decidir que tipo de planta energética se va a tomar en cuenta con base en los datos.
            </Text>
            <Text fontSize='xl' noOfLines={[1, 2, 3, 4]}>
                En la tercer parte eligiremos que variables a tomar en cuenta para elegir las &quot;mejores&quot; plantas eléctricas añadiendo la información encontrada
                en las partes 1 y 2.
            </Text>
            <br />
            <Text fontSize='2xl' noOfLines={[1]} as='b'>
                Parte 1:
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                La base de datos (db1) nos va a permitir observar el panorama general de la situación actual de la generación de electricidad en el mundo.
                Aunque los creadores de esta base de datos no mencionan el periodo en el que se obtuvieron los mismos, se va a tomar el supuesto de que
                se capturaron relativamente hace poco, dada la información que proveen en su portal.
            </Text>
            <br />
            <Image src="./projects/electricity/corr_plot_db1.png" alt='Corr plot' />
            <br />
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Primero, sacamos la correlación entre todas las variables y de ahí se obtuvo la &quot;correlación media&quot; entre estas.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                De este simple calculo, se obtuvieron las variables cuyo valor era el más cercano a 1, es decir, cuya correlación era más fuerte respecto de las otras variables.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Entonces, tenemos:
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]} as='b'>
                - Global innovation index:
            </Text>
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Índice que mide la capacidad de los países para lograr éxito a través de la innovación.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]} as='b'>
                - Business Sophistication:
            </Text>
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Índice que mide el nivel de sofisticación de las industrias de un país.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3, 4, 5]}>
                Tiene sentido que estas variables sean las que, en promedio, sean las que estén más correlacionadas con las otras variables de la base. Esto debido a que usualmente
                se conoce que un país es o no &quot;desarrollado&quot; en función de las industrias y sus respectivos modelos de negocios. Por ejemplo, la variable de (Infrastructures), la cual
                mide que tanto dinero se invierte en infraestructura pública en cierto país. Lo que hace suponer que, si existe un gasto alto en esto, permitiría a las respectivas
                industrias tener un mayor rendimiento dado el incremento de conectividad que esto tiende a provocar.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                A continuación, teniendo en cuenta estas dos variables, se realizó una intersección de la segunda mitad superior del 4° percentile en ambas variables para obtener a los
                países candidatos a ser considerados como los más avanzados en términos de generación de energía eléctrica o, en otras palabras, simplemente los países más
                &quot;avanzados&quot;.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Se obtuvo que los países más innovadores y con mayor nivel de sofisticación son:
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3, 4, 5]} as='b'>
                <ul>
                    <li>-	Suecia</li>
                    <li>-	Singapur</li>
                    <li>-	Suiza</li>
                    <li>-	Países Bajos</li>
                    <li>-	Finlandia</li>
                </ul>
            </Text>
            <br />
            <Text fontSize='xl'>
                Para lograr un contraste, se obtuvo también a aquellos países que se encontraban en la segunda mitad superior del 4° percentile, pero de la variable (pollution), es decir, se obtuvo a los
                países más contaminantes en la de energía eléctrica.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3, 4]}>
                Hay que notar que, se podría suponer que estos países contaminantes son los menos desarrollados, por poner un ejemplo, tenemos: Sí un país contamina mucho, muy
                probablemente es debido a que utiliza, tal vez, carbón como medio para generar energía y a su vez, esto nos indicaría que sus respectivas industrias no están muy
                desarrolladas. Pero esto, no necesariamente es cierto, puesto que, China es uno de los países más contaminantes, y a su vez, también se encuentra entre los países
                con los índices de innovación y sofisticación más altos.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1]}>
                Dentro de los países más contaminantes, tenemos:
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3, 4, 5]} as='b'>
                <ul>
                    <li>-	Argelia</li>
                    <li>-	Etiopía</li>
                    <li>-	Myanmar</li>
                </ul>
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Una vez que obtuvimos los países en los cuales nos vamos a centrar, hay que observar el panorama de cada uno de ellos, no solo en la actualidad, si no remontándonos
                también hacía el pasado y así poder vislumbrar la tendencia de la generación de energía en los próximos años.
            </Text>
            <br />
            <br />
            <Text fontSize='2xl' noOfLines={[1]} as='b'>
                Parte 2:
            </Text>
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Gracias a la base de datos (db2) podemos notar el gran desarrollo que ha experimentado la humanidad durante el último siglo.
            </Text>
            <br />
            <Image src="./projects/electricity/plot_world_crecimiento_population.png" alt='plot_world_crecimiento_population' />
            <br />
            <Image src="./projects/electricity/plot_gdp_per_capita.png" alt='plot_gdp_per_capita' />
            <br />
            <br />
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Es fácil notar que el crecimiento de la población también ha significado un crecimiento del PIB per cápita.
            </Text>
            <br />
            <br />
            <br />
            <Image src="./projects/electricity/plot_world_energy_consumption_per_capita.png" alt='plot_world_energy_consumption_per_capita' />
            <br />
            <Image src="./projects/electricity/plot_world_gas_consumption.png" alt='plot_world_gas_consumption' />
            <br />
            <Image src="./projects/electricity/plot_world_oil_consumption.png" alt='plot_world_oil_consumption' />
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Podemos notar que, aunque el consumo de energía ha tenido sus caídas, algunas más pronunciadas que otras. En términos generales, podemos notar una clara tendencia alcista
                en el largo plazo.
            </Text>
            <br />
            <Image src="./projects/electricity/plot_world_generacion_electricidad.png" alt='plot_world_generacion_electricidad' />
            <br />
            <br />
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3, 4]}>
                Con lo anterior podemos suponer que el incremento del uso energía, y de nuestro interés la demanda de electricidad no va a hacer otra cosa más que incrementarse.
                Por lo que invertir en empresas que se dediquen a la generación de esta, es y seguirá siendo rentable por muchos años más. Lo cual hay que recalcar que es más que obvio,
                dada la importancia de la generación de energía para el desarrollo de la humanidad.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Nota: Los gráficos no son del todo precisos, dada la falta de datos de la base (db2): países, años, cifras, etc.
            </Text>
            <br />
            <Text fontSize='2xl' noOfLines={[1]} as='b'>
                Parte 3:
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Tomando ahora en cuenta la base de datos (db3), observemos primero el panorama general de los distintos tipos de plantas de generación eléctrica.
            </Text>
            <br />
            <br />
            <br />
            <Image src="./projects/electricity/barplot_type_of_fuel_db3.png" alt='barplot_type_of_fuel_db3' />
            <br />
            <br />
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Aquí podemos ver, por ejemplo: Aunque existen una gran cantidad de plantas cuya generación de energía depende principalmente de energía solar. Esta manera de generar
                electricidad apenas alcanza una capacidad media de 17.66 MW. Mientras que, si lo comparamos con el petróleo, cuya cantidad de plantas es muy inferior a la solar,
                se alcanza una capacidad media de 112.88 MW.
            </Text>
            <br />
            <Image src="./projects/electricity/fuel_type_stats.png" alt='fuel_type_stats' />
            <br />
            <br />
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Antes de continuar con el análisis, debemos tener en cuenta los siguiente:
            </Text>
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-	Las respectivas bases contienen datos actualizados a lo más, hasta el año 2021.
            </Text>
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-	La guerra en Ucrania y la situación geopolítica entre Estados Unidos, Rusia y China cambio muchas cosas, por ejemplo:
            </Text>
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a) Los precios de los combustibles fósiles como el petróleo y
                el gas se han disparado en los últimos meses.
            </Text>
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b)	Tenemos noticas como las siguientes:
            </Text>
            <br />
            <Image src="./projects/electricity/noticia_carbon_spain.png" alt='noticia_carbon_spain' width="250" height="300" />
            <br />
            <br />
            <Image src="./projects/electricity/noticia_carbon_germany.png" alt='noticia_carbon_germany' width="250" height="300" />
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c)	La transición a las energías renovables no se ha acabado, pero sin duda
                se ha pospuesto tal vez, una década entera.
            </Text>
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d)	También hay que tener en cuenta las nuevas innovaciones que podrían
                ocurrir en una u otra industria, a lo largo de los años.
            </Text>
            <br />
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Tipos de plantas a tomar en cuenta y la razón de ello:
            </Text>
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Donde MW = Megawatts
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Solar: Sí será considerada este tipo de planta, aún a pesar de que ahora tienen la menor capacidad media en MW. Existe mucho potencial a futuro, sobre todo con las
                innovaciones que se vayan dando.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Hydro: No será considerada, dado que no valdría tanto la pena enfocarse en estas plantas puesto que dependen de fuentes de agua como ríos para formar las presas y
                dado que solo hay una cantidad limitada de estos. No es muy probable el crecimiento en este sector.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Wind: No será considerada, ya que requieren mucho terreno para desplegar las respectivas turbinas. Más aparte, es energía intermitente, dado que hay momentos en los
                que sencillamente no hay viento.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Gas: Sí será considerada este tipo de planta, por dos razones. La primera es que es de las más baratas y tiene la mayor capacidad media en MW. La otra razón es que,
                aunque sin duda es un tipo de energía que sí contamina, para el mercado energético es considerada como una de las más limpias
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Coal: No será considerada, aunque vimos noticias en las que se está volviendo a usar este tipo de energía, a largo plazo se espera el desuso de esta.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Oil: No será considerada, por la misma razón que en Coal. Además, la variación del precio y a su vez del rendimiento de las empresas, depende demasiado de factores
                geopolíticos y/o geoestratégicos. Tales factores pueden ser el aumento o disminución de la producción del petróleo por parte de la OPEC. Esto también se da con el
                precio del gas, pero aún así lo vamos a tomar en cuenta por las razones dadas.
            </Text>
            <br />
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                De ahora en adelante, solo nos vamos a centrar en los países más desarrollados y Estados Unidos.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                La razón de dejar atrás a los países más contaminantes es porque su propósito era solo el de contrastar las distintas fuentes de energía eléctrica.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3, 4]}>
                También vamos a dejar de lado a Rusia, debido a las sanciones que ha sufrido con la guerra y su aislamiento del mercado “occidental”. Por su parte, China ha
                experimentado algo similar, pero no tanto por sanciones sino por su propia política económica. Por ejemplo, la salida de varias empresas de la bolsa de valores de
                Nueva York. Dadas las razones anteriores podría existir un mayor riesgo de invertir en empresas de estos países.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3, 4]}>
                Finalmente, se realizó una limpieza de datos en la variable (owner of plant) puesto que esta variable contenía muchos datos faltantes. Hay que notar que la variable
                que se utilizó para filtrar las distintas plantas fue (capacity in MW). Esto se hizo de esta manera, ya que nos indica la capacidad máxima que es capaz de generar la
                planta eléctrica. Por lo que, se tomaron en cuenta aquellas plantas que se encontraban en el 4° percentile, es decir, las de mayor capacidad.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Con lo anterior quedaron solo cuatro países, tres de ellos solamente con plantas de gas y solo EUA con ambos tipos de plantas.
            </Text>
            <br />
            <Text fontSize='xl' noOfLines={[1, 2, 3]}>
                Por último, las empresas obtenidas, son:
            </Text>
            <Image src="./projects/electricity/companies.png" alt='companies' width="600" height="700" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Text fontSize='xl' noOfLines={[1]}>
                Código: <Button onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/KenatSF/Electricity_Consumption");
                }}>
                    Electricity_Consumption
                </Button>
            </Text>
            <br />
            <br />
            <Link href="https://www.kaggle.com/datasets/youneseloiarm/innovations-indices-and-pollution-index">
                <Text fontSize='xl' noOfLines={[1]}>
                    Database 1: Innovations indices and Pollution index
                </Text>
            </Link>
            <Link href="https://www.kaggle.com/datasets/pralabhpoudel/world-energy-consumption">
                <Text fontSize='xl' noOfLines={[1]}>
                    Database 2: World Energy Consumption
                </Text>
            </Link>
            <Link href="https://www.kaggle.com/datasets/ramjasmaurya/global-powerplants">
                <Text fontSize='xl' noOfLines={[1]}>
                    Database 3: Global Power-Plants
                </Text>
            </Link>
            <br />
            <br />
            <br />
        </Box>

    )
}