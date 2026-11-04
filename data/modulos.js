const modulosData = [
  // ==========================================
  // MÓDULOS DEL PROFESOR JAVIER MINEROS
  // ==========================================
  {
    id: 1,
    nombre: "Orientación de estudiantes al proceso educativo del tercer año",
    docente: "Prof. Javier Mineros",
    tipo: "javier",
    resumen: "Inducción inicial, organización de equipos de trabajo y establecimiento de generalidades y portafolios para el tercer año de bachillerato.",
    instrumentos: [
      "Lista de cotejo de equipos de trabajo",
      "Guía de portafolio y orientaciones"
    ],
    programas: ["Google Classroom", "Navegador Web"],
    herramientas: ["Google Workspace", "Generadores de códigos QR"],
    recursos: [
      { titulo: "Plataforma Classroom INDEL", url: "https://classroom.google.com" }
    ],
    evidencias: "Espacio para compartir códigos QR y configuración de equipos de trabajo.",
    quiz: [
      {
        pregunta: "¿Cuál era el propósito principal del portafolio del módulo 3.0?",
        opciones: [
          "Organizar las orientaciones y generalidades iniciales",
          "Programar en C# avanzado",
          "Configurar redes locales"
        ],
        respuestaCorrecta: 0,
        explicacion: "Permitió estructurar las directrices y organización de equipos al inicio del año."
      }
    ]
  },
  {
    id: 2,
    nombre: "Mantenimiento y aseguramiento de la operación del sistema informático",
    docente: "Prof. Javier Mineros",
    tipo: "javier",
    resumen: "Diagnóstico, modelado UML, creación de dashboards de monitoreo, planes de contingencia y aplicación de acuerdos de nivel de servicio (SLA).",
    instrumentos: [
      "Plantilla SLA",
      "Rúbrica de evaluación de dashboards y proyectos"
    ],
    programas: ["Visual Studio", "Herramientas de diagramación UML"],
    herramientas: ["Sistemas operativos", "Paneles de monitoreo y control"],
    recursos: [
      { titulo: "Microsoft Learn - Mantenimiento", url: "https://learn.microsoft.com/es-es/" }
    ],
    evidencias: "Dashboard de monitoreo, modelado UML y proyecto final de mantenimiento.",
    quiz: [
      {
        pregunta: "¿Qué componente define los niveles de servicio en la operación informática?",
        opciones: ["Plantilla SLA", "Un script de Python", "Una hoja de Excel simple"],
        respuestaCorrecta: 0,
        explicacion: "El documento o plantilla SLA establece los estándares de calidad y tiempos de respuesta."
      }
    ]
  },
  {
    id: 3,
    nombre: "Administración de Bases de Datos",
    docente: "Prof. Javier Mineros",
    tipo: "javier",
    resumen: "Gestión de bases de datos relacionales, ejecución de actividades remediales, consultas estructitadas (semanas 9 a 11) y análisis con Power BI.",
    instrumentos: [
      "Guía de instalación de Power BI",
      "Matriz de actividades remediales y ejecución"
    ],
    programas: ["Power BI Desktop", "SQL Server Management Studio"],
    herramientas: ["SQL Server", "T-SQL", "Paneles de datos"],
    recursos: [
      { titulo: "Documentación oficial Power BI", url: "https://learn.microsoft.com/es-es/power-bi/" }
    ],
    evidencias: "Actividades de Power BI, ejecuciones prácticas de semanas 9, 10 y 11, y dashboard final de datos.",
    quiz: [
      {
        pregunta: "¿Qué herramienta se utilizó para la creación de dashboards y análisis visual en este módulo?",
        opciones: ["Power BI", "Notepad++", "Photoshop"],
        respuestaCorrecta: 0,
        explicacion: "Se empleó Power BI para la gestión y visualización analítica de datos."
      }
    ]
  },
  {
    id: 4,
    nombre: "Elaboración de documentación de Sistemas informáticos",
    docente: "Prof. Javier Mineros",
    tipo: "javier",
    resumen: "Desarrollo documental por fases: arquitectura del software, desarrollo, documentos finales y guías prácticas en Python.",
    instrumentos: [
      "Guía Python Individual",
      "Rúbrica de Fases de Arquitectura y Documentos Finales"
    ],
    programas: ["VS Code", "Editores de texto y Markdown"],
    herramientas: ["Python", "Diagramas de arquitectura"],
    recursos: [
      { titulo: "Guía de Markdown", url: "https://www.markdownguide.org/" }
    ],
    evidencias: "Fases 1 a 7 documentadas, arquitectura de software y ejercicios en Python.",
    quiz: [
      {
        pregunta: "¿Cómo se estructuró principalmente la entrega de este módulo?",
        opciones: ["Por fases progresivas de desarrollo y documentos", "Únicamente con un examen teórico", "Mediante la instalación de redes físicas"],
        respuestaCorrecta: 0,
        explicacion: "El trabajo se dividió por fases desde la orientación inicial hasta los documentos finales."
      }
    ]
  },

  // ==========================================
  // MÓDULOS DEL PROFESOR ARCIDES CANALES
  // ==========================================
  {
    id: 5,
    nombre: "Desarrollo de aplicaciones de software para la solución de problemas",
    docente: "Prof. Arcides Canales",
    tipo: "arcides",
    resumen: "Programación Orientada a Objetos (POO), herencia, polimorfismo, acceso a datos y prácticas con Entity Framework Core (Code First - ASP Razor).",
    instrumentos: [
      "Prácticas de POO (Herencia y Polimorfismo)",
      "Guía de Práctica Code First - ASP Razor"
    ],
    programas: ["Visual Studio", "SQL Server"],
    herramientas: ["C#", ".NET", "ASP Razor", "Entity Framework"],
    recursos: [
      { titulo: "Microsoft Learn - C#", url: "https://learn.microsoft.com/es-es/dotnet/csharp/" }
    ],
    evidencias: "Prácticas de acceso a datos, POO y conexión de bases de datos con ASP Razor.",
    quiz: [
      {
        pregunta: "¿Qué tecnología se usó en la práctica 05 para el desarrollo web con C#?",
        opciones: ["Code First - ASP Razor", "React Native", "Flutter"],
        respuestaCorrecta: 0,
        explicacion: "Se implementaron prácticas utilizando Code First y ASP Razor."
      }
    ]
  },
  {
    id: 6,
    nombre: "Desarrollo de componentes para dispositivos móviles",
    docente: "Prof. Arcides Canales",
    tipo: "arcides",
    resumen: "Creación de aplicaciones multiplataforma con .NET MAUI (prácticas 6, 7, 8 y 9), autoevaluaciones y despliegue móvil.",
    instrumentos: [
      "Autoevaluación Práctica 9",
      "Guías de prácticas .NET MAUI"
    ],
    programas: ["Visual Studio", "Android Emulator"],
    herramientas: [".NET MAUI", "C# y XAML"],
    recursos: [
      { titulo: "Documentación .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/" }
    ],
    evidencias: "Prácticas de .NET MAUI del 6 al 9 y reportes de autoevaluación.",
    quiz: [
      {
        pregunta: "¿Qué framework multiplataforma se utilizó predominantemente para dispositivos móviles?",
        opciones: [".NET MAUI", "Django", "Laravel"],
        respuestaCorrecta: 0,
        explicacion: "El módulo se centró en el desarrollo de componentes móviles usando .NET MAUI."
      }
    ]
  },
  {
    id: 7,
    nombre: "Conversación de ingles sobre mantenimiento de sistemas informáticos",
    docente: "Prof. Arcides Canales",
    tipo: "arcides",
    resumen: "Aplicación de metodologías ágiles (Scrum) y desarrollo de bases de datos enfocadas a CRUD integradas con herramientas de IA.",
    instrumentos: [
      "Evaluación de Práctica Scrum",
      "Rúbrica de Base de datos CRUD-IA"
    ],
    programas: ["Visual Studio", "Editores de código"],
    herramientas: ["Scrum", "CRUD", "Inteligencia Artificial"],
    recursos: [
      { titulo: "Scrum Guides", url: "https://scrumguides.org/" }
    ],
    evidencias: "Práctica 10 de Scrum y Práctica 11 de Base de datos CRUD-IA.",
    quiz: [
      {
        pregunta: "¿Qué metodología ágil se practicó en conjunto con bases de datos y soporte?",
        opciones: ["Scrum", "Cascada", "Modelo Spiral"],
        respuestaCorrecta: 0,
        explicacion: "Se evaluaron prácticas orientadas a Scrum y operaciones CRUD asistidas."
      }
    ]
  },
  {
    id: 8,
    nombre: "Puesta en marcha de la empresa en asociatividad cooperativa",
    docente: "Prof. Arcides Canales",
    tipo: "arcides",
    resumen: "Proyectos integradores de emprendimiento y cooperativismo: desarrollo en WinForms/ASPX, .NET MAUI, Arduino y plataformas de comercio electrónico como Prestashop.",
    instrumentos: [
      "Rúbrica de Proyecto Prestashop (Individual)",
      "Evaluación de Proyectos Finales (Winform, ASPX, MAUI y Arduino)"
    ],
    programas: ["Visual Studio", "Docker / Entorno Prestashop"],
    herramientas: ["Prestashop", "Arduino", ".NET MAUI", "ASPX"],
    recursos: [
      { titulo: "Documentación Prestashop", url: "https://www.prestashop.com/" }
    ],
    evidencias: "Proyecto individual Prestashop (25%), Proyecto Final .NET MAUI (25%), Winform/ASPX (25%) y Augustine-Arduino (25%).",
    quiz: [
      {
        pregunta: "¿Qué porcentaje representaba el proyecto individual de Prestashop en la nota del módulo?",
        opciones: ["25%", "50%", "10%"],
        respuestaCorrecta: 0,
        explicacion: "El módulo se ponderó en cuatro componentes principales, incluyendo el 25% de Prestashop."
      }
    ]
  }
];