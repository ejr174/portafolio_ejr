

//---------------------------------Fechas - Moment --------------------------------------
moment.locale('es');
const formato = "dddd[,] DD [de] MMMM [de] YYYY";

const today = new Date();

let hoy = new Date().valueOf();
let luego = new Date().valueOf() + 2316200000;
let hoyHeader = moment(hoy).format(formato);
let luegoHeader = moment(luego).format(formato);

//----------------------------------Data----------------------------------------------
const hotelsData = [
  {
    slug: "la-bamba-de-areco",
    name: "La Bamba de Areco",
    photo: "../images/la-bamba-de-areco.jpg",
    description:
      "La Bamba de Areco está ubicada en San Antonio de Areco, en el corazón de la pampa. Es una de las estancias más antiguas de la Argentina, recientemente restaurada para ofrecer a sus huéspedes todo el confort y esplendor colonial.",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 11,
    city: "Buenos Aires",
    country: "Argentina",
    price: 4,
    key: 0,
  },
  {
    slug: "sainte-jeanne",
    name: "Sainte Jeanne Boutique & Spa",
    photo: "../images/sainte-jeanne.jpg",
    description:
      "Sainte Jeanne Hotel Boutique & Spa está ubicado en el corazón de Los Troncos, un barrio residencial y elegante de Mar del Plata. El lujo, el confort y la pasión por los detalles dan personalidad a esta cálida propuesta.",
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 23,
    city: "Mar del Plata",
    country: "Argentina",
    price: 2,
    key: 1,
  },
  {
    slug: "entre-cielos",
    name: "Entre Cielos",
    photo: "../images/entre-cielos.jpg",
    description:
      "Ubicado en una de las regiones vitivinícolas más grandes de América Latina, Entre Cielos fue pensado y construido en un campo de 8 hectáreas rodeado de viñedos malbec y una imponente vista de la Cordillera de Los Andes.",
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 16,
    city: "Mendoza",
    country: "Argentina",
    price: 4,
    key: 2,
  },
  {
    slug: "huacalera",
    name: "Hotel Huacalera",
    photo: "../images/huacalera.jpg",
    description:
      "Esta casona neocolonial, construida en la década de 1940, está ubicada en el corazón de la Quebrada de Humahuaca, un extenso valle rodeado de imponentes cadenas montañosas, recorrido por el Río Grande y declarado Patrimonio de la Humanidad en 2003.",
    availabilityFrom: today.valueOf() + 1728000000, // 20 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    rooms: 32,
    city: "Jujuy",
    country: "Argentina",
    price: 1,
    key: 3,
  },
  {
    slug: "merced-del-alto",
    name: "La Merced del Alto",
    photo: "../images/merced-del-alto.jpg",
    description:
      "Al pie del Nevado de Cachi, La Merced del Alto se destaca sobre el pintoresco valle rodeado de cerros, ríos y arroyos. Dominando sobre lo alto, el hotel y sus imponentes vistas invitan a explorar los Valle Calchaquíes o simplemente a disfrutar de la paz del lugar.",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 432000000, // 5 days
    rooms: 14,
    city: "Salta",
    country: "Argentina",
    price: 2,
    key: 4,
  },
  {
    slug: "azur-real",
    name: "Azur Real Hotel",
    photo: "../images/azur-real.jpg",
    description:
      "La exclusividad rodeada de historia. Azur Real Hotel Boutique está ubicado en el corazón de la zona comercial y el centro histórico de Córdoba, dentro de uno de los principales circuitos culturales y turísticos de la ciudad.",
    availabilityFrom: today.valueOf() + 1296000000, // 15 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    rooms: 16,
    city: "Córdoba",
    country: "Argentina",
    price: 1,
    key: 5,
  },
  {
    slug: "rincon-del-socorro",
    name: "Rincón del Socorro",
    photo: "../images/rincon-del-socorro.jpg",
    description:
      "Rincón del Socorro es una estancia ubicada en la reserva natural de los Esteros del Iberá, un santuario de vida silvestre, donde la Fundación Conservation Land Trust decidió desarrollar un ambicioso proyecto de recuperación y conservación.",
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 11,
    city: "Corrientes",
    country: "Argentina",
    price: 2,
    key: 6,
  },
  {
    slug: "luma-casa-de-montana",
    name: "Luma Casa de Montaña",
    photo: "../images/luma-casa-de-montana.jpg",
    description:
      "Emplazada en un entorno natural a orillas del lago Nahuel Huapi y con la imponente imagen de la Cordillera de Los Andes, Luma Casa de Montaña se presenta majestuosa pero a la vez simple y hogareña: un lugar diferente, atemporal y mágico.",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 8,
    city: "Villa La Angostura",
    country: "Argentina",
    price: 2,
    key: 7,
  },
  {
    slug: "casa-turquesa",
    name: "Casa Turquesa",
    photo: "../images/casa-turquesa.jpg",
    description:
      "Casa Turquesa es una histórica mansión del siglo XVIII que recrea el encanto típico de Paraty, una de las herencias coloniales más bellas de Brasil, declarada Patrimonio Mundial de la Humanidad por la UNESCO.",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 432000000, // 5 days
    rooms: 9,
    city: "Río de Janeiro",
    country: "Brasil",
    price: 3,
    key: 8,
  },
  {
    slug: "vila-da-santa",
    name: "Vila Da Santa",
    photo: "../images/vila-da-santa.jpg",
    description:
      "Esta casa de pescadores fue renovada con elegancia, pero sin descuidar su espíritu original. Se abre a un gran patio central con dos piscinas de diseño, una de ellas climatizada.",
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 19,
    city: "Buzios",
    country: "Brasil",
    price: 3,
    key: 9,
  },
  {
    slug: "uxua-casa",
    name: "UXUA Casa Hotel & Spa",
    photo: "../images/uxua-casa.jpg",
    description:
      "UXUA Casa Hotel & Spa es un hotel boutique cinco estrellas reconocido mundialmente por su incomparable belleza tropical, el maravilloso bar con vista al mar, el galardonado restaurante, un gimnasio totalmente equipado y el inigualable spa Almescar que ofrece innovadores tratamientos con ingredientes extraídos de la selva.",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 11,
    city: "Bahía",
    country: "Brasil",
    price: 4,
    key: 10,
  },
  {
    slug: "ponta-dos-ganchos",
    name: "Ponta dos Ganchos",
    photo: "../images/uxua-casa.jpg",
    description:
      "Ubicado a pasos de San Pablo, Río de Janeiro, e incluso Buenos Aires, en una península privada y rodeado por un pintoresco pueblo de pescadores, se encuentra Ponta dos Ganchos, uno de los resorts de playa más exclusivos del sur de Brasil.",
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 25,
    city: "Santa Catarina",
    country: "Brasil",
    price: 4,
    key: 11,
  },
  {
    slug: "alto-atacama",
    name: "Alto Atacama",
    photo: "../images/alto-atacama.jpg",
    description:
      "Alto Atacama Desert Lodge & Spa es un distinguido refugio ubicado a los pies del Pukará de Quitor en el imponente desierto de Atacama al norte de Chile.",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 42,
    city: "San Pedro de Atacama",
    country: "Chile",
    price: 4,
    key: 12,
  },
  {
    slug: "tierra-patagonia",
    name: "Tierra Patagonia",
    photo: "../images/tierra-patagonia.jpg",
    description:
      "Tierra Patagonia Hotel & Spa es un lujoso hotel boutique ubicado en la Patagonia chilena a orillas del lago Sarmiento, envuelto en el extraordinario escenario natural de Torres del Paine, un parque nacional rodeado de montañas, cascadas, glaciares, lagos y peñascos, declarado Reserva de la Biosfera por la UNESCO en 1978.",
    availabilityFrom: today.valueOf() + 2592000000, // 30 days
    availabilityTo: today.valueOf() + 3456000000, // 40 days
    rooms: 40,
    city: "Torres del Paine",
    country: "Chile",
    price: 4,
    key: 13,
  },
  {
    slug: "vira-vira",
    name: "Vira Vira",
    photo: "../images/vira-vira.jpg",
    description:
      "Hotel Hacienda Vira Vira Relais & Chateaux se encuentra en una ubicación privilegiada, muy cerca de Pucón, Chile. Su impresionante parque nativo de 23 hectáreas a orillas del río Liucura ofrece un oasis único de paz y tranquilidad.",
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1728000000, // 20 days
    rooms: 21,
    city: "Pucón",
    country: "Chile",
    price: 4,
    key: 14,
  },
  {
    slug: "vik-chile",
    name: "Vik Chile",
    photo: "../images/vik-chile.jpg",
    description:
      "Vik Chile es una hacienda moderna y sofisticada en donde confluyen el arte y el diseño de vanguardia, una ubicación sin igual, fabulosos escenarios naturales, servicio personalizado y una cuidada atención por el medioambiente.",
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1728000000, // 20 days
    rooms: 22,
    city: "Millahue",
    country: "Chile",
    price: 4,
    key: 15,
  },
  {
    slug: "casa-higueras",
    name: "Casa Higueras",
    photo: "../images/casa-higueras.jpg",
    description:
      "Ubicada en el corazón del Cerro Alegre, frente a la imponente bahía de Valparaíso, se encuentra Casa Higueras, el primer hotel boutique y de diseño del puerto.",
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 20,
    city: "Valparaíso",
    country: "Chile",
    price: 4,
    key: 16,
  },
  {
    slug: "campo-tinto",
    name: "Campo Tinto",
    photo: "../images/campo-tinto.jpg",
    description:
      "Campo Tinto es una chacra de 25 hectáreas ubicada en el corazón de San Roque, en medio del ondulante Carmelo, una zona de chacras, viñedos, bodegas y frutales, con mucha historia y un ritmo de vida tranquilo y natural.",
    availabilityFrom: today.valueOf() + 2160000000, // 25 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    rooms: 4,
    city: "Colonia",
    country: "Uruguay",
    price: 1,
    key: 17,
  },
];


//------------------------------------ COMPONENTE PRINCIPAL ------------------------

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [...hotelsData],
      fechaInicialHeader: hoyHeader,
      fechaFinalHeader: luegoHeader,
      fechaIncial: hoy,
      fechaFinal: luego,
      pais: "",
      precio: "todos",
      tamanioHotel: "todos",
    };
  }

  /*******************************************************
    METODOS 
   ****************************************************/

  infoInputFechaInicial = (e) => {
    const formato = "dddd[,] DD [de] MMMM [de] YYYY";

    // Esta variable me actualiza el estado FechaInicialHeader, la fecha inicial que aparece en el header.
    let fechaInicio = document.getElementById("FechaInicial").value;

    // Esta variable me actualiza el estado Fecha inicial
    let fechaInicio2 = parseInt(moment(e.target.value).valueOf());

    this.setState({
      fechaIncial: fechaInicio2,
      fechaInicialHeader: moment(fechaInicio).format(formato),
    });
  };

  infoInputFechaFinal = (e) => {
    const formato = "dddd[,] DD [de] MMMM [de] YYYY";

    let fechaFinal = document.getElementById("FechaFinal").value;

    let fechaFinal2 = parseInt(moment(e.target.value).valueOf());

    this.setState({
      fechaFinal: fechaFinal2,
      fechaFinalHeader: moment(fechaFinal).format(formato),
    });
  };

  infoSelectPais = (e) => {
    //Obtener el valor del select
    let valorPais = document.getElementById("paises").value;
    console.log(valorPais);

    //Obtener el texto del select
    let textoPais = document.getElementById("paises");
    let texto = textoPais.options[textoPais.selectedIndex].text;
    console.log(texto);

    let paisValue = e.target.value;

    this.setState({
      pais: paisValue,
    });
  };

  infoSelectPrecio = (e) => {
    let valorPrecio = document.getElementById("precios").value;

    let textoPrecio = document.getElementById("precios");
    let texto = textoPrecio.options[textoPrecio.selectedIndex].text;

    let precio = e.target.value;

    this.setState({
      precio: precio,
    });
  };

  infoSelectTamanio = (e) => {
    let valorTamanio = document.getElementById("tamanios").value;


    let textoTamanio = document.getElementById("tamanios");
    let texto = textoTamanio.options[textoTamanio.selectedIndex].text;

    let tam = e.target.value;

    this.setState({
      tamanioHotel: tam,
    });
  };

  //-----------------METODOS PARA LOS FILTROS -----------------

  inicioFinFechas = ( availabilityFrom, availabilityTo, firstDate, secondDate ) => {
    if (firstDate >= availabilityFrom && secondDate <= availabilityTo) {
      return true;
    } else {
      return false;
    }
  };

  hotelTamanio = (num) => {
    const { tamanioHotel } = this.state;

    if (tamanioHotel === "Hotel Pequeño") {
      return num <= 10;
    }

    if (tamanioHotel === "Hotel Mediano") {
      return num > 10 && num <= 20;
    }

    if (tamanioHotel === "Hotel Grande") {
      return num > 20;
    }
  };

  definirPrecio = (num) => {
    const { precio } = this.state;
    if (precio === "$") {
      return num === 1;
    }
    if (precio === "$$") {
      return num === 2;
    }
    if (precio === "$$$") {
      return num === 3;
    }
    if (precio === "$$$$") {
      return num === 4;
    }
  };

  render() {
    const error = (
      <div className="Error">
        <span className="NotFound"></span>
        <span className="NotFoundTitle centrar">
          ¡Lo sentimos! <br /> no tenemos hoteles disponibles
        </span>
      </div>
    );

    const { data, pais, precio, tamanioHotel, fechaIncial, fechaFinal, } = this.state;

    let filtHoteles = [];

    if (pais === "") {
      filtHoteles = data;
    } else {
      filtHoteles = data.filter((paisElement) => paisElement.country === pais);
    }

    if (precio !== "todos") {
      filtHoteles = filtHoteles.filter((precio) => {
        return this.definirPrecio(precio.price);
      });
    }

    if (tamanioHotel !== "todos") {
      filtHoteles = filtHoteles.filter((habitacionTam) => {
        return this.hotelTamanio(habitacionTam.rooms);
      });
    }

    if (fechaIncial !== hoy) {
      filtHoteles = filtHoteles.filter((fecha) => {
        let fechaInicialData = fecha.availabilityFrom;
        let fechaFinalData = fecha.availabilityTo;

        return this.inicioFinFechas( fechaInicialData, fechaFinalData, fechaIncial, fechaFinal );
      });
    }

    const cards =
      filtHoteles.length > 0
        ? filtHoteles.map((card) => (
            <CardHotelCompleta info={card} key={card.key} />
          ))
        : error;

    /*
        header:
        Esta variable se encargada de renderizar el componente, cambiando las imaginas de fondo que apareceran 
        en el header dinamicamente cuando el usuario escoja cualquier pais.
      */
    const header =
      this.state.pais === "" ? (
        <div className="FondoHeader">
          <Header
            fechaIncial={this.state.fechaInicialHeader}
            fechaFinal={this.state.fechaFinalHeader}
            pais={this.state.pais}
          />

          <Filtros
            infoInputFechaInicial={this.infoInputFechaInicial}
            infoInputFechaFinal={this.infoInputFechaFinal}
            infoSelectPais={this.infoSelectPais}
            infoSelectPrecio={this.infoSelectPrecio}
            infoSelectTamanio={this.infoSelectTamanio}
          />
        </div>
      ) : this.state.pais === "Argentina" ? (
        <div className="FondoHeaderArgentina">
          <Header
            fechaIncial={this.state.fechaInicialHeader}
            fechaFinal={this.state.fechaFinalHeader}
            pais={this.state.pais}
          />

          <Filtros
            infoInputFechaInicial={this.infoInputFechaInicial}
            infoInputFechaFinal={this.infoInputFechaFinal}
            infoSelectPais={this.infoSelectPais}
            infoSelectPrecio={this.infoSelectPrecio}
            infoSelectTamanio={this.infoSelectTamanio}
          />
        </div>
      ) : this.state.pais === "Brasil" ? (
        <div className="FondoHeaderBrasil">
          <Header
            fechaIncial={this.state.fechaInicialHeader}
            fechaFinal={this.state.fechaFinalHeader}
            pais={this.state.pais}
          />

          <Filtros
            infoInputFechaInicial={this.infoInputFechaInicial}
            infoInputFechaFinal={this.infoInputFechaFinal}
            infoSelectPais={this.infoSelectPais}
            infoSelectPrecio={this.infoSelectPrecio}
            infoSelectTamanio={this.infoSelectTamanio}
          />
        </div>
      ) : this.state.pais === "Chile" ? (
        <div className="FondoHeaderChile">
          <Header
            fechaIncial={this.state.fechaInicialHeader}
            fechaFinal={this.state.fechaFinalHeader}
            pais={this.state.pais}
          />

          <Filtros
            infoInputFechaInicial={this.infoInputFechaInicial}
            infoInputFechaFinal={this.infoInputFechaFinal}
            infoSelectPais={this.infoSelectPais}
            infoSelectPrecio={this.infoSelectPrecio}
            infoSelectTamanio={this.infoSelectTamanio}
          />
        </div>
      ) : this.state.pais === "Uruguay" ? (
        <div className="FondoHeaderUruguay">
          <Header
            fechaIncial={this.state.fechaInicialHeader}
            fechaFinal={this.state.fechaFinalHeader}
            pais={this.state.pais}
          />

          <Filtros
            infoInputFechaInicial={this.infoInputFechaInicial}
            infoInputFechaFinal={this.infoInputFechaFinal}
            infoSelectPais={this.infoSelectPais}
            infoSelectPrecio={this.infoSelectPrecio}
            infoSelectTamanio={this.infoSelectTamanio}
          />
        </div>
      ) : this.state.pais === "--PAIS--" ? (
        <div className="FondoHeader">
          <Header
            fechaIncial={this.state.fechaInicialHeader}
            fechaFinal={this.state.fechaFinalHeader}
            pais={this.state.pais}
          />

          <Filtros
            infoInputFechaInicial={this.infoInputFechaInicial}
            infoInputFechaFinal={this.infoInputFechaFinal}
            infoSelectPais={this.infoSelectPais}
            infoSelectPrecio={this.infoSelectPrecio}
            infoSelectTamanio={this.infoSelectTamanio}
          />
        </div>
      ) : (
        <i class="fas fa-skull-crossbones"></i>
      );

    return (
      <div>

        {header}

        <div className="Frames">
          <div className="Contenedor2">
            {cards}
          </div>
        </div>

        <div className="Footer">
          <Footer />
        </div>
        
      </div>
    );
  }
}



//-----------------------COMPONENTES------------------------------------------------------


// Componente presentacional encargado de renderizar los textos e imagines de fondo que apareceran en el header dinamicamente segun los eventos que el usuario realice.
const Header = ({ fechaIncial, fechaFinal, pais }) => {
  return (
    <header className="Header centrar">
      <h2 className="centra">
        <strong className="colorPrincipal">¡BIENVENIDO!</strong>
      </h2>

      <h2 className="centrar">
        Aquí encontraras los mejores hoteles para reservar y disfrutar.
      </h2>

      <h3>
        {" "}
        <strong className="colorPrincipal"> ¡MIRA!</strong> <br /> Esto son
        nuestros hoteles diponibles
      </h3>

      <h3>
        {" "}
        <strong className="colorPrincipal">desde</strong> el {fechaIncial}, 
        <strong className="colorPrincipal"> hasta</strong> el {fechaFinal}.
      </h3>
    </header>
  );
};

// Componente presentacion que retorna los filtros 
const Filtros = ({ infoInputFechaInicial, infoInputFechaFinal, infoSelectPais, infoSelectPrecio, infoSelectTamanio }) => {
  return (
    <div>
      <div className="Fila Filtros centrar">
        <div className="col-20">
          <input
            type="date"
            className="select-css2"
            id="FechaInicial"
            placeholder="hola"
            name="firstDate"
            onChange={infoInputFechaInicial}
          />
        </div>

        <div className="col-20 ">
          <input
            type="date"
            className="select-css2"
            id="FechaFinal"
            name="secondDate"
            onChange={infoInputFechaFinal}
          />
        </div>

        <div className="col-20">
          <select
            className="select-css"
            id="paises"
            name="paises"
            onChange={infoSelectPais}
          >
            <option value="" className="Tamaño">
              --PAIS--
            </option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Uruguay">Uruguay</option>
          </select>
        </div>

        <div className="col-20">
          <select
            className="select-css"
            id="precios"
            name="precios"
            onChange={infoSelectPrecio}
          >
            <option value="todos">--PRECIO--</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
            <option value="$$$$">$$$$</option>
          </select>
        </div>

        <div className="col-20">
          <select
            className="select-css"
            id="tamanios"
            name="tamanios"
            onChange={infoSelectTamanio}
          >
            <option value="todos">--TAMAÑO--</option>
            <option value="Hotel Pequeño">Hotel Pequeño</option>
            <option value="Hotel Mediano">Hotel Mediano</option>
            <option value="Hotel Grande">Hotel Grande</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// Componente presentacional que retorna la Card Completa.
const CardHotelCompleta = (props) => {
  return (
    <div className="CardHotel ">
      <div>
      <ImagenHotel photo={props.info.photo} name={props.info.name} />
      </div>

      <div>
        <InfoHotel
            name={props.info.name}
            description={props.info.description}
            city={props.info.city}
            country={props.info.country}
            rooms={props.info.rooms}
            price={props.info.price}
          />      
      </div>

    </div>
  );
};

// Componente presentacional que retorna las imagenes de los hoteles en la card.
const ImagenHotel = ({ photo, name }) => {
  return (
    <div>
      <img src={photo} alt={name} />
    </div>
  );
};

// Componente presentacional que retorna la información de los hoteles en la card.
const InfoHotel = ({ name, description, city, country, rooms, price }) => {
  const listaPrecios =
    price === 1 ? (
      <div className="iconos">
        <i className="fas fa-dollar-sign "></i>{" "}
      </div>
    ) : price === 2 ? (
      <div className="iconos">
        <i className="fas fa-dollar-sign "></i>{" "}
        <i className="fas fa-dollar-sign "></i>
      </div>
    ) : price === 3 ? (
      <div className="iconos">
        <i className="fas fa-dollar-sign "></i>{" "}
        <i className="fas fa-dollar-sign "></i>{" "}
        <i className="fas fa-dollar-sign "></i>
      </div>
    ) : price === 4 ? (
      <div className="iconos">
        <i className="fas fa-dollar-sign "></i>{" "}
        <i className="fas fa-dollar-sign "></i>{" "}
        <i className="fas fa-dollar-sign "></i>{" "}
        <i className="fas fa-dollar-sign "></i>{" "}
      </div>
    ) : (
      <i className="fas fa-exclamation-triangle"></i>
    );

  return (
    <div className="card ">
      <div className="infoCard">
        <h2>{name}</h2>
        <p className="descripcion">{description} </p>
        <p>
          <i className="fas fa-map-marker-alt ico"></i> {city} , {country}{" "}
        </p>

        <p>
          <i className="fas fa-bed ico"></i> {rooms} Habitaciones{" "}
        </p>

        <div className="margin-2">{listaPrecios}</div>
      </div>
      <div className="CardButtom infoCard">
        <button className="Bottom" onClick={() => alert("Funciona")}>
          Reservar
        </button>
      </div>
    </div>
  );
};

// -------------------------------- FOOTER CON INFORMACION PERSONAL -----------------------------------
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footercol-30">
        <h3>Emmanuel Jaramillo Restrepo</h3>
        <p>
          <i className="fas fa-code iconDosFooter"></i>
          Desarrollador Web Front End
        </p>
      </div>

      <div className="Footercol-30">
        <h3>REDES SOCIALES</h3>
        <a href="https://www.linkedin.com/in/emmanuel-jaramillo-restrepo-3698031b9/">
          <i className="fab fa-linkedin iconFooter"></i>
        </a>
        <a href="https://github.com/ejr174">
          <i className="fab fa-github iconFooter"></i>
        </a>
      </div>

      <div className="Footercol-30">
        <p>
          <i className="fas fa-globe-americas"></i> Medellin - Colombia
        </p>
      </div>
    </div>
  );
};

//--------------------------------- RENDER ---------------------------------------------------------
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
