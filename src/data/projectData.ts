import {
  VehicleCategoryInfo,
  TollStation,
  WorkProject,
  SocialFund,
} from "../types";

export const VEHICLE_CATEGORIES: VehicleCategoryInfo[] = [
  {
    id: "CAT1",
    code: "Categoría I",
    name: "Livianos (Autos y Camionetas)",
    description:
      "Automóviles, camperos, camionetas de servicio particular o público.",
    iconName: "Car",
  },
  {
    id: "CAT2",
    code: "Categoría II",
    name: "Buses y Busetas",
    description: "Vehículos de transporte público colectivo de pasajeros.",
    iconName: "Bus",
  },
  {
    id: "CAT3_7",
    code: "Categoría III a VII",
    name: "Transporte de Carga Pesada",
    description:
      "Camiones de 2 o más ejes, tractocamiones y vehículos articulados.",
    iconName: "Truck",
  },
];

export const TOLL_STATIONS: TollStation[] = [
  {
    id: "GUARNE",
    name: "Peaje Guarne",
    corridor: "Autopista Medellín - Bogotá (Sector Guarne - Marinilla)",
    baseRates: {
      CAT1: 16800,
      CAT2: 24500,
      CAT3_7: 52000,
    },
  },
  {
    id: "LAS_PALMAS",
    name: "Peaje Las Palmas",
    corridor: "Vía Las Palmas - Don Diego - El Retiro",
    baseRates: {
      CAT1: 15200,
      CAT2: 21000,
      CAT3_7: 48000,
    },
  },
  {
    id: "COCORNA",
    name: "Peaje Cocorná",
    corridor: "Autopista Medellín - Bogotá (Sector Santuario - Cocorná)",
    baseRates: {
      CAT1: 14500,
      CAT2: 19800,
      CAT3_7: 45000,
    },
  },
];

export const ELIMINATED_TOLL = {
  name: "Peaje Puerto Triunfo",
  location: "Corredor Autopista Medellín - Bogotá (Sector Puerto Triunfo)",
  previousRate: 15800,
  newRate: 0,
  status: "COBRO TOTALMENTE ELIMINADO",
  benefit: "Ahorro directo del 100% para todo tipo de vehículos en la zona.",
};

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: "MARINILLA",
    title: "Soluciones Viales en Marinilla",
    category: "Intersección & Fluidez Urbana",
    location: "Sector Urbano e Intersecciones de Marinilla",
    lengthOrScope: "3 Intersecciones de alto impacto",
    description:
      "Solución integral de movilidad mediante pasos a desnivel, glorietas optimizadas y retornos seguros para eliminar embotellamientos históricos en el paso urbano de Marinilla.",
    technicalDetails: [
      "Construcción de deprimidos y pasos elevados para tráfico continuo.",
      "Separación física del flujo local y tráfico de larga distancia.",
      "Instalación de señalización inteligente y cámaras de monitoreo vial.",
      "Reducción de tiempos de espera en horas pico hasta en un 60%.",
    ],
    travelTimeReduction: "-22 min en paso urbano",
    safetyImpact:
      "Reducción del 75% en accidentalidad por giros a la izquierda",
    status: "Prioridad 1 en Prefactibilidad",
    badge: "Intervención Crítica",
    keyMetric: "Fluidez Continua",
    iconName: "GitMerge",
    imageUrl: "/marinilla.jpeg",
  },
  {
    id: "INDUSTRIALES",
    title: "Intercambiador Industriales",
    category: "Conectividad Estratégica",
    location: "Conexión Medellín - Rionegro / Oriente",
    lengthOrScope: "Complejo vial de 1.8 km de ramales",
    description:
      "Descongestión del punto crítico de conectividad entre el Valle de Aburrá y los municipios del Altiplano. Garantiza flujo ágil y seguro hacia el Aeropuerto y zonas industriales.",
    technicalDetails: [
      "Puentes curvos de gran gálibo e integración con vías arterias.",
      "Diseño geométrico de alta velocidad (80 km/h sostenidos).",
      "Iluminación LED fotovoltaica y barreras acústicas ambientales.",
      "Paso directo sin semaforización.",
    ],
    travelTimeReduction: "-18 min hacia el Aeropuerto",
    safetyImpact: "Eliminación del 100% de cruces a nivel peligrosos",
    status: "Ingeniería Integrada",
    badge: "Obra Emblemática",
    keyMetric: "Conexión Valle - Oriente",
    iconName: "Network",
    imageUrl: "/industriales.jpeg",
  },
  {
    id: "TRANVIA",
    title: "Conexión Vía del Tranvía",
    category: "Integración Multimodal",
    location: "Rionegro - Red Vial Regional",
    lengthOrScope: "4.2 km de enlace especializado",
    description:
      "Integración eficiente entre el corredor principal del Altiplano y la red existente de la Vía del Tranvía de Rionegro, facilitando la logística y la movilidad del transporte público.",
    technicalDetails: [
      "Construcción de calzada doble con ciclorruta segregada.",
      "Adaptación para transporte masivo y estaciones integradas.",
      "Red de drenaje pluvial sostenible (SUDS).",
      "Espacio público accesible con senderos peatonales ajardinados.",
    ],
    travelTimeReduction: "-15 min en transporte público",
    safetyImpact:
      "Protección integral a peatones y ciclistas con infraestructura dedicada",
    status: "Fase de Prefactibilidad",
    badge: "Movilidad Sostenible",
    keyMetric: "Sincronización Urbana",
    iconName: "TrainTrack",
    imageUrl: "/tranvia.jpeg",
  },
  {
    id: "TERCER_CARRIL",
    title: "19 km de Tercer Carril de Adelantamiento",
    category: "Capacidad & Velocidad Operativa",
    location: "Sectores críticos de montaña del corredor vial (220 km)",
    lengthOrScope: "19 kilómetros lineales de ampliación",
    description:
      "Ampliación estratégica a tres carriles en tramos de alta pendiente para permitir el adelantamiento seguro de camiones y mejorar drásticamente la velocidad media del corredor.",
    technicalDetails: [
      "Carril adicional de subida exclusivo para transporte de carga.",
      "Estabilización de taludes y contención geotécnica avanzada.",
      "Pavimento de alta durabilidad con asfalto modificado con polímeros.",
      "Bahías de emergencia cada 2 kilómetros.",
    ],
    travelTimeReduction: "-35% en tiempo global de viaje",
    safetyImpact: "Cero adelantamientos a ciegas en tramos de montaña",
    status: "Diseño Geométrico Listo",
    badge: "Eficiencia Vial",
    keyMetric: "19 km Nuevos",
    iconName: "Route",
    imageUrl: "/tercer_carril.jpeg",
  },
  {
    id: "VARIANTES_PUENTES",
    title: "Variantes y Puentes Peatonales",
    category: "Seguridad Vial & Vida Comunitaria",
    location: "Cascos urbanos y escuelas rurales a lo largo de los 220 km",
    lengthOrScope: "12 Puentes peatonales + 3 Variantes urbanas",
    description:
      "Infraestructura centrada en la vida humana: variantes que sacan el tráfico pesado de zonas residenciales y puentes peatonales inclusivos con rampas de accesibilidad universal.",
    technicalDetails: [
      "Puentes peatonales con rampas del 8% de inclinación para personas con discapacidad.",
      "Sistemas de iluminación solar autónoma y cerramiento de seguridad.",
      "Variantes viales con velocidad controlada y pasos de fauna silvestre.",
      "Cercado vivo y paisajismo nativo.",
    ],
    travelTimeReduction: "Tráfico fluido constante a 70 km/h",
    safetyImpact:
      "Protección directa a más de 45.000 estudiantes y residentes rurales",
    status: "Aprobación Social Comunitaria",
    badge: "Impacto Humano",
    keyMetric: "12 Puentes + 3 Variantes",
    iconName: "Footprints",
    imageUrl: "/variantes.jpeg",
  },
  {
    id: "BARRIO_MADERA",
    title: "Barrio de la Madera (El Retiro) — Reubicación y Centro Artesanal",
    category: "Reubicación & Desarrollo Productivo",
    location: "Vía Las Palmas - Don Diego hacia El Retiro",
    lengthOrScope: "Reubicación habitacional + Centro de producción artesanal",
    description:
      "Programa de reubicación de comunidades en situación vulnerable asentadas en la vía Las Palmas - Don Diego hacia El Retiro, creando un centro de producción de artesanías y muebles de madera para potenciar la economía popular.",
    technicalDetails: [
      "Reubicación segura y vivienda digna.",
      "Creación de centro artesanal y muebles de madera.",
      "Fomento directo a la economía popular local.",
    ],
    travelTimeReduction: "Sostenibilidad & Vivienda Digna",
    safetyImpact:
      "Reubicación fuera de la faja de riesgo vial e impulso a la economía artesanal",
    status: "Integración Social Territorial",
    badge: "Inversión Social",
    keyMetric: "El Retiro",
    iconName: "Hammer",
    imageUrl: "/pueblo_madera.jpeg",
  },
];

export const SOCIAL_FUNDS: SocialFund[] = [
  {
    percentage: "0.5%",
    title: "Fondo para la Economía Popular",
    target: "Comunidades locales, campesinos, artesanos y emprendedores",
    description:
      "Recursos directos destinados a impulsar unidades productivas locales, agroindustria del Altiplano, turismo rural y capacitación en competencias digitales y financieras.",
    pillars: [
      "Fortalecimiento de microempresas y talleres artesanales.",
      "Escuelas rurales de emprendimiento y alfabetización digital.",
      "Impulso a mercados campesinos y circuitos cortos de comercialización.",
      "Capital semilla no reembolsable para innovaciones agroindustriales.",
    ],
    iconName: "Store",
    accentColor: "from-emerald-600 to-green-700",
  },
  {
    percentage: "2.0%",
    title: "Fondo de Desarrollo Municipal y Clima",
    target: "Alcaldías de los municipios del área de influencia",
    description:
      "Asignación directa para responder a las solicitudes municipales en mejoramiento de vías terciarias, atención de puntos críticos, seguridad vial e infraestructura frente al cambio climático.",
    pillars: [
      "Pavimentación y placa huella en conectores rurales prioritarios.",
      "Obras de mitigación de riesgos de deslizamiento e inundación.",
      "Dotación de señalización y radares informativos en zonas escolares.",
      "Planes de adaptación climática y restauración forestal de cuencas.",
    ],
    iconName: "BuildingLandmark",
    accentColor: "from-teal-600 to-emerald-700",
  },
  {
    percentage: "2.5%",
    title: "Fondo de Libre Destinación INVÍAS",
    target: "Instituto Nacional de Vías (INVÍAS) / Red Nacional",
    description:
      "Aporte constante al Estado colombiano que le otorga liquidez al INVÍAS para invertir en proyectos prioritarios de la red nacional sin comprometer vigencias futuras.",
    pillars: [
      "Transferencia neta garantizada durante los 40 años de concesión.",
      "Flexibilidad presupuestal para necesidades del sector transporte nacional.",
      "Cero endeudamiento o respaldo del tesoro público.",
      "Apoyo a la conectividad interregional de Colombia.",
    ],
    iconName: "Landmark",
    accentColor: "from-green-700 to-emerald-800",
  },
];

export const BARRIO_MADERA_DETAILS = {
  title: 'Proyecto Social Estrella: "Barrio de la Madera"',
  subtitle:
    "Transformación social, dignidad habitacional y desarrollo productivo en El Retiro",
  location: "Vía Las Palmas - Don Diego hacia El Retiro, Antioquia",
  beneficiaries:
    "Familias asentadas en faja de vía + 120 artesanos tradicionales",
  description:
    "Un modelo pionero de reubicación humana y desarrollo socioeconómico. En lugar de un reasentamiento pasivo, el proyecto construye una ciudadela comunitaria integral donde las familias no solo reciben viviendas dignas sino también un Centro de Producción Maderera y Galería Artesanal de clase mundial.",
  highlights: [
    "Reubicación voluntaria de familias en condición de vulnerabilidad vial.",
    "Viviendas bioclimáticas con acabado de madera sostenible de plantaciones registradas.",
    "Centro de innovación y talleres de diseño de muebles de madera en El Retiro.",
    "Punto de venta turístico y comercial directo en el corredor vial para potenciar ventas.",
    "Capacitación técnica certificada en carpintería avanzada y ebanistería exportable.",
  ],
};

export const APP_LEGAL_FACTS = [
  {
    title: "Naturaleza Jurídica",
    value: "Asociación Público-Privada (APP) de Iniciativa Privada (IP)",
    description:
      "Esquema regulado por la Ley 1508 de 2012 donde el sector privado propone, diseña, financia y asume el riesgo integral del proyecto.",
  },
  {
    title: "Inversión Pública",
    value: "$0 Pesos Públicos / Sin Vigencias Futuras",
    description:
      "No requiere desembolsos del Presupuesto General de la Nación ni aportes de las entidades territoriales. Todo el proyecto se paga mediante el recaudo tarifario optimizado.",
  },
  {
    title: "Estado del Proyecto",
    value: "Radicado en la ANI (Prefactibilidad a Factibilidad)",
    description:
      "Documentación técnica, jurídica y financiera entregada formalmente ante la Agencia Nacional de Infraestructura (ANI) lista para la fase final de aprobación.",
  },
  {
    title: "Plazo y Reversión",
    value: "40 Años de Operación y Mantenimiento (O&M)",
    description:
      "Involucra Estudios, Diseños, Financiación, Gestión Ambiental, Predial, Social, Operación y Mantenimiento. Al finalizar el plazo, la infraestructura moderna revierte 100% al Estado en perfecto estado.",
  },
];

export const FAQS = [
  {
    question:
      "¿El proyecto Vías del Altiplano aumentará los peajes por encima de la inflación?",
    answer:
      "No. Las tarifas están estrictamente vinculadas al Índice de Precios al Consumidor (IPC). Adicionalmente, el proyecto introduce reducciones históricas del 30% al 50% para livianos, $0 tarifa comercial para buses y un 20% de descuento nocturno para transporte de carga.",
  },
  {
    question: "¿Qué ocurre con el peaje de Puerto Triunfo?",
    answer:
      "El cobro del Peaje de Puerto Triunfo se elimina totalmente de la estructura vial, generando un ahorro directo del 100% para los usuarios que transitan por este sector.",
  },
  {
    question:
      "¿Cómo funciona el beneficio para residentes cercanos a los peajes?",
    answer:
      "Los propietarios o residentes de predios ubicados a menos de 1.5 km de las estaciones de peaje (Guarne, Las Palmas, Cocorná) reciben una tarifa preferencial del 50% de descuento sobre la tarifa base.",
  },
  {
    question: "¿El Estado colombiano debe poner dinero para esta obra?",
    answer:
      "Absolutamente $0 pesos. La propuesta es una Iniciativa Privada (IP) autosostenible que asume la totalidad de la financiación, ejecución y mantenimiento sin requerir vigencias futuras del presupuesto público.",
  },
];
