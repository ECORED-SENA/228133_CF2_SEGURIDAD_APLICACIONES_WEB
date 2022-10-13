export default {
  global: {
    componenteFormativo:
      'Fundamentos y aplicaciones de riesgo de seguridad orientada a aplicaciones <em>web</em>',
    descripcionCurso:
      'La seguridad en aplicaciones <em>web</em> es una línea dentro de la seguridad informática que se delega concretamente sobre la seguridad de sitios <em>web</em>, aplicaciones <em>web</em> y servicios <em>web</em>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/float-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a la ciberseguridad',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Identificación de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Análisis de riesgos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Herramientas de valoración de riesgos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Auditoría infraestructura tecnológica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Informe o políticas de sistema de gestión de seguridad de la información o afines',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Organización y protocolos de seguridad y privacidad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Análisis de riesgos',
      referencia:
        'Gestión del riesgo en la seguridad informática. (2005). <em>Amenazas y vulnerabilidades</em>.',
      tipo: 'Artículo',
      link:
        'https://protejete.wordpress.com/gdr_principal/amenazas_vulnerabilidades/',
    },
    {
      tema: 'Identificación de riesgos',
      referencia: 'Icontec. (2013). ISO 2700. Icontec.',
      tipo: 'Página <em>web</em>',
      link: 'https://www.icontec.org/',
    },
    {
      tema: 'Identificación de riesgos',
      referencia:
        '<em>METODOLOGÍA PARA LA GESTIÓN DE LA SEGURIDAD INFORMÁTICA.</em> Oficina de Seguridad para las Redes Informáticas.',
      tipo: 'Artículo',
      link:
        'https://instituciones.sld.cu/dnspminsap/files/2013/08/Metodologia-PSI-NUEVAProyecto.pdf',
    },
    {
      tema: 'Auditoría infraestructura tecnológica',
      referencia: 'Congreso de Colombia. (2009). Ley 1273 de 2009.',
      tipo: 'Página <em>web</em>',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0527_1999.html',
    },
    {
      tema: 'Auditoría infraestructura tecnológica',
      referencia: 'Congreso de Colombia. (2009). Ley 1273 de 2009.',
      tipo: 'Página <em>web</em>',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0527_1999.html',
    },
    {
      tema: 'Auditoría infraestructura tecnológica',
      referencia: 'Congreso de Colombia. (2012). Ley 1581 de 2012.',
      tipo: 'Página <em>web</em>',
      link: 'https://acortar.link/DB9gGZ',
    },
    {
      tema:
        'Informe o políticas de sistema de gestión de seguridad de la información o afines',
      referencia: 'DNP. (2011). Conpes 3701 de 2011.',
      tipo: 'Página <em>web</em>',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3701.pdf',
    },
    {
      tema:
        'Informe o políticas de sistema de gestión de seguridad de la información o afines',
      referencia: 'DNP. (2016). Conpes 3854 de 2016.',
      tipo: 'Página <em>web</em>',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3854.pdf',
    },
    {
      tema:
        'Informe o políticas de sistema de gestión de seguridad de la información o afines',
      referencia: 'OAS. (2001). Convenio de Budapest.',
      tipo: 'Página <em>web</em>',
      link: 'https://www.oas.org/juridico/english/cyb_pry_convenio.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Autenticación',
      significado:
        'acto de establecimiento o confirmación de algo como auténtico. La autenticación de un objeto puede significar la confirmación de su procedencia, mientras que la autenticación de una persona a menudo consiste en verificar su identidad. La autenticación depende de uno o varios factores (Educalingo, s. f.).',
    },
    {
      termino: 'Base de datos',
      significado:
        'recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático. Normalmente una base de datos está controlada por un sistema de gestión de base de datos (DBMS). En un conjunto, los datos y el DBMS, junto con las aplicaciones asociadas a ellos, reciben el nombre de sistema de base de datos, abreviado normalmente a simplemente base de datos (Oracle, 2022).',
    },
    {
      termino: 'Evidencia digital',
      significado:
        'también conocida como evidencia computacional, única y conocida como: registros o archivos generados por computador u otro medio equivalente, registros o archivos no generados sino simplemente almacenados por o en computadores o medios equivalentes y registros o archivos híbridos que incluyen tanto registros generados por computador o medio equivalente como almacenados en los mismos (FGN, 2009).',
    },
    {
      termino: '<em>Log</em>',
      significado:
        'registro oficial de eventos durante un periodo de tiempo en particular. Para los profesionales en seguridad informática un <em>Log</em> es usado para registrar datos o información sobre quién, qué, cuándo, dónde y por qué (<em>who, what, when, where y why</em>, W5) un evento ocurre para un dispositivo en particular o aplicación. La mayoría de los <em>logs</em> son almacenados o desplegados en el formato estándar, el cual es un conjunto de caracteres para dispositivos comunes y aplicaciones. De esta forma cada <em>log</em> generado por un dispositivo en particular puede ser leído y desplegado en otro diferente. A su vez la palabra <em>log</em> se relaciona con el término evidencia digital. Un tipo de evidencia física construida de campos magnéticos y pulsos electrónicos que pueden ser recolectados y analizados con herramientas y técnicas especiales, lo que implica la lectura del <em>log</em> y deja al descubierto la actividad registrada en el mismo (FGN, 2009).',
    },
    {
      termino: 'Redes',
      significado:
        'una red de computadoras (también llamada red de ordenadores o red informática) es un conjunto de equipos (computadoras y/o dispositivos) conectados, que comparten información (archivos), recursos (<em>CD-ROM</em>, impresoras, etc.) y servicios (acceso a internet, <em>e-mail</em>, chat, juegos), etc. (FGN, 2009).',
    },
    {
      termino: 'Seguridad informática',
      significado:
        'cualquier medida que impida la ejecución de operaciones no autorizadas sobre un sistema o red informática cuyos efectos puedan conllevar daños sobre la información, equipo o <em>software</em> (Gómez, 2006). Por su parte, Kissel (2012) la define como la protección de información y sistemas de información de acceso no autorizado.',
    },
    {
      termino: 'Sistema de información',
      significado:
        'conjunto de procesos que, operando sobre una colección de datos estructurada de acuerdo con una empresa o entidad, recopila, elabora y distribuye (parte de) la información necesaria para el buen funcionamiento de ella. Además, apoya actividades de dirección y control correspondientes, apoyando al menos en parte, la toma de decisiones necesarias de acuerdo con su estrategia (FGN, 2009).',
    },
    {
      termino: 'Transmisión de datos',
      significado:
        'movimiento de información codificada de un punto a otro(s) punto(s). Estos datos se transmitirán mediante señales eléctricas, ópticas, radio o electromagnéticas (FGN, 2009).',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (1999). Ley 0257 de 1999. Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0527_1999.html',
    },
    {
      referencia:
        'Congreso de Colombia. (2009). Ley 1273 de 2009. Por medio de la cual se modifica el Código Penal, se crea un nuevo bien jurídico tutelado - denominado "de la protección de la información y de los datos" y se preservan integralmente los sistemas que utilicen las tecnologías de la información y las comunicaciones, entre otras disposiciones".',
      link:
        'https://www.sic.gov.co/recursos_user/documentos/normatividad/Ley_1273_2009.pdf',
    },
    {
      referencia: 'DNP. (2011). Conpes 3701.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3701.pdf',
    },
    {
      referencia: 'DNP. (2016). Conpes 3854.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3854.pdf',
    },
    {
      referencia: 'Educalingo. (s.f.). educalingo.',
      link: 'https://educalingo.com/es/dic-es/autenticacion',
    },
    {
      referencia:
        'Erb, M. (2005). Gestión de riesgo en la seguridad informática.',
      link:
        'https://protejete.wordpress.com/gdr_principal/amenazas_vulnerabilidades/',
    },
    {
      referencia:
        'FGN. (2009). Procedimientos forenses de policía judicial. FGN.',
      link: '',
    },
    {
      referencia:
        'Gómez, A. (2006). Enciclopedia de la seguridad informática. RA-Ma.',
      link: '',
    },
    {
      referencia: 'Icontec. (2013). Icontec.',
      link: 'https://www.icontec.org/',
    },
    {
      referencia: 'Mifsud, E. (2012). Introducción a la seguridad informática.',
      link:
        'http://recursostic.educacion.es/observatorio/web/es/software/software-general/1040-introduccion-a-la-seguridad-informatica',
    },
    {
      referencia:
        'METODOLOGÍA PARA LA GESTIÓN DE LA SEGURIDAD INFORMÁTICA. Oficina de Seguridad para las Redes Informáticas.',
      link:
        'https://instituciones.sld.cu/dnspminsap/files/2013/08/Metodologia-PSI-NUEVAProyecto.pdf',
    },
    {
      referencia: 'OAS. (2001). Convenio de Budapest.',
      link: 'https://www.oas.org/juridico/english/cyb_pry_convenio.pdf',
    },
    {
      referencia: 'Oracle. (2022). Oracle.',
      link: 'https://www.oracle.com/co/database/what-is-database/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Cesar Antonio Villamizar Núñez',
        cargo: 'Experto temático',
        centro:
          'Centro de la industria, la empresa y los servicios, Región Norte de Santander',
      },
      {
        nombre: 'Hernando José Peña Hidalgo',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Carlos Hernán Muñoz',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Danny Alejandro Solano',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'David Eduardo Lozada',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y Los Servicios CIES, Regional Norte de Santander',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital.',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
