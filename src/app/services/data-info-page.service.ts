import { Injectable } from '@angular/core';
import { ProjectPhoto, ProjectDesign, ProjectSocialMedia, ProjectVideo } from 'src/app/models/project.model';


@Injectable({
  providedIn: 'root'
})
export class DataInfoPageService {

  testimonialsEnergy: ProjectVideo[] = [
    {
      id: 1,
      img: '../../assets/img/tes-siessa-one-small.jpg',
      category: 'Energía Solar',
      scale: 'Hogar',
      descriptionSmall: '1 Sistema de energía solar Virel de 13.64 kWp',
      descriptionLarge: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        system: 'Off-Grid',
        numberPanels: 30,
        powerPanels: '310 WP',
        annualGeneration: '18512 kWh'
      }
    },
    {
      id: 2,
      img: '../../assets/img/tes-gaiga-small.jpg',
      category: 'Energía Solar',
      scale: 'Empresa',
      descriptionSmall: '2 Sistema de energía solar Virel de 13.64 kWp',
      descriptionLarge: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        system: 'Solar interconectado',
        numberPanels: 30,
        powerPanels: '310 WP',
        annualGeneration: '18512 kWh'
      }
    },
    {
      id: 3,
      img: '../../assets/img/tes-solar-three-re.jpg',
      category: 'Energía Solar',
      scale: 'Hogar',
      descriptionSmall: '3 Sistema de energía solar Virel de 13.64 kWp',
      descriptionLarge: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        system: 'Solar interconectado',
        numberPanels: 30,
        powerPanels: '310 WP',
        annualGeneration: '18512 kWh'
      }
    },
    {
      id: 4,
      img: '../../assets/img/tes-solar-four.jpg',
      category: 'Energía Solar',
      scale: 'Empresa',
      descriptionSmall: '4 Sistema de energía solar Virel de 13.64 kWp',
      descriptionLarge: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        system: 'Solar interconectado',
        numberPanels: 30,
        powerPanels: '310 WP',
        annualGeneration: '18512 kWh'
      }
    },
    {
      id: 5,
      img: '../../assets/img/tes-solar-five.jpg',
      category: 'Energía Solar',
      scale: 'Empresa',
      descriptionSmall: '5 Sistema de energía solar Virel de 13.64 kWp',
      descriptionLarge: '5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        system: 'Solar interconectado',
        numberPanels: 30,
        powerPanels: '310 WP',
        annualGeneration: '18512 kWh'
      }
    },
    {
      id: 6,
      img: '../../assets/img/tes-solar-six.jpg',
      category: 'Energía Solar',
      scale: 'Hogar',
      descriptionSmall: '6 Sistema de energía solar Virel de 13.64 kWp',
      descriptionLarge: '6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        system: 'Solar interconectado',
        numberPanels: 30,
        powerPanels: '310 WP',
        annualGeneration: '18512 kWh'
      }
    },
  ];

  testimonialsSwimming: ProjectPhoto[] = [
    {
      id: 7,
      img: '../../assets/img/tes-curz-roja-three.jpg',
      category: 'Piscinas',
      scale: 'Empresa',
      descriptionSmall: 'Piscina semi olímpica',
      descriptionLarge: 'Mantenimiento piscina semi olímpica. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        system: 'Solar interconectado',
        numberPanels: 30,
        powerPanels: '310 WP',
        annualGeneration: '18512 kWh'
      }
    },
    {
      id: 8,
      img: '../../assets/img/tes-swimming-pool-small.jpg',
      category: 'Piscinas',
      scale: 'Empresa',
      descriptionSmall: '2 Sistema de mantenimiento piscinas',
      descriptionLarge: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        system: 'Solar interconectado',
        numberPanels: 30,
        powerPanels: '310 WP',
        annualGeneration: '18512 kWh'
      }
    },
    {
      id: 9,
      img: '../../assets/img/tes-swimming-pool-three.jpg',
      category: 'Piscinas',
      scale: 'Empresa',
      descriptionSmall: '3 Sistema de mantenimiento piscinas',
      descriptionLarge: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        system: 'Solar interconectado',
        numberPanels: 30,
        powerPanels: '310 WP',
        annualGeneration: '18512 kWh'
      }
    },
    {
      id: 10,
      img: '../../assets/img/tes-swimming-pool-four.jpg',
      category: 'Piscinas',
      scale: 'Empresa',
      descriptionSmall: '4 Sistema de mantenimiento piscinas',
      descriptionLarge: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        system: 'Solar interconectado',
        numberPanels: 30,
        powerPanels: '310 WP',
        annualGeneration: '18512 kWh'
      }
    },
    {
      id: 11,
      img: '../../assets/img/tes-swimming-pool-five.jpg',
      category: 'Piscinas',
      scale: 'Empresa',
      descriptionSmall: '5 Sistema de mantenimiento piscinas',
      descriptionLarge: '5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        system: 'Solar interconectado',
        numberPanels: 30,
        powerPanels: '310 WP',
        annualGeneration: '18512 kWh'
      }
    },
    {
      id: 12,
      img: '../../assets/img/tes-swimming-pool-six.jpg',
      category: 'Empresa',
      scale: 'Hogar',
      descriptionSmall: '6 Sistema de mantenimiento piscinas',
      descriptionLarge: '6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        system: 'Solar interconectado',
        numberPanels: 30,
        powerPanels: '310 WP',
        annualGeneration: '18512 kWh'
      }
    },
  ];

  accordionSection = [
    {
      question: '1. ¿Cómo funcionan los paneles solares?',
      answer: 'Los paneles solares, también conocidos como módulos fotovoltaicos, convierten la energía solar en electricidad mediante células fotovoltaicas que capturan la luz solar y la convierten en corriente eléctrica continua.'
    },
    {
      question: '2. ¿Cuáles son los beneficios de instalar paneles solares en casa?',
      answer: 'Algunos beneficios incluyen el ahorro en la factura de electricidad, la reducción de la huella de carbono, la posibilidad de vender el exceso de energía a la red y la independencia energética.'
    },
    {
      question: '3. ¿Qué tamaño de sistema solar necesito para mi hogar?',
      answer: 'El tamaño del sistema depende del consumo de energía y la ubicación geográfica. Se realiza un análisis para determinar la cantidad de paneles necesarios para cubrir tus necesidades energéticas.'
    },
    {
      question: '4. ¿Qué sucede en días nublados o lluviosos? ¿Generaré electricidad?',
      answer: 'Aunque la generación puede ser menor en días nublados o lluviosos, los paneles siguen capturando la luz solar difusa y generando electricidad. La producción puede disminuir, pero no se detiene por completo.'
    },
    {
      question: '5. ¿Cómo afectan los paneles solares al valor de mi propiedad?',
      answer: 'La instalación de paneles solares puede aumentar el valor de tu propiedad al hacerla más atractiva para compradores interesados en la eficiencia energética y en la reducción de costos a largo plazo.'
    },
    {
      question: '6. ¿Necesito baterías para almacenar la energía solar?',
      answer: 'No es necesario tener baterías para todos los sistemas solares. Puedes seguir conectado a la red eléctrica y vender el exceso de energía que generas, o puedes optar por sistemas con baterías para el almacenamiento de energía.'
    },
    {
      question: '7. ¿Cómo puedo mantener el agua de mi piscina limpia?',
      answer: 'Mantener un equilibrio adecuado de químicos como cloro y pH, limpiar los filtros regularmente, y no permitir el ingreso de agentes extraños no higiénicos. Es de vital importancia que las labores de mantenimiento sean llevadas a cabo por profesionales debidamente capacitados.'
    },
    {
      question: '8. ¿Cuál es la importancia de la circulación del agua en una piscina?',
      answer: 'La circulación adecuada evita la acumulación de bacterias y algas, distribuye los productos químicos de manera uniforme y mantiene el agua cristalina.'
    },
    {
      question: '9. ¿Cómo puedo calentar mi piscina de manera eficiente?',
      answer: 'Puedes considerar la instalación de paneles solares térmicos, bombas de calor o sistemas de intercambio de calor para calentar el agua de la piscina.'
    },
    {
      question: '10. ¿Cómo puedo evitar la formación de algas en mi piscina?',
      answer: 'Mantén los niveles de cloro adecuados, asegúrate de que la circulación del agua sea suficiente, y realiza una limpieza y mantenimiento regular para evitar la proliferación de algas.'
    },
    {
      question: '11. ¿Qué es la desinfección del agua de la piscina y cómo se logra?',
      answer: 'La desinfección implica eliminar bacterias y microorganismos dañinos del agua. El método más común es el uso de cloro, pero también hay opciones como la salinización y sistemas de ozono o ultravioleta.'
    },
    {
      question: '12. ¿Qué es la gestión de activos?',
      answer: 'La gestión de activos se refiere al proceso de administrar recursos y activos de una organización para maximizar su valor, eficiencia y rendimiento a lo largo del tiempo.'
    },
    {
      question: '13. ¿Por qué es importante la gestión de activos para las empresas?',
      answer: 'La gestión de activos ayuda a optimizar el uso de recursos, reducir costos operativos, prolongar la vida útil de los activos y tomar decisiones informadas sobre inversión y mantenimiento.'
    },
    {
      question: '14. ¿Cuál es el papel del software en la gestión de activos?',
      answer: 'Los sistemas de software de gestión de activos ayudan a rastrear, analizar y gestionar activos de manera eficiente, permitiendo un mantenimiento proactivo, programación de reemplazo y toma de decisiones basadas en datos.'
    },
    {
      question: '15. ¿Cómo puedo asegurarme de que mis activos cumplan con las regulaciones y normativas?',
      answer: 'Mantén un registro detallado de los activos, implementa inspecciones y mantenimientos regulares, y mantente informado sobre las regulaciones relevantes para tu industria.'
    },
    {
      question: '16. ¿Cuál es el papel de la depreciación en la gestión de activos?',
      answer: 'La depreciación es la disminución del valor de un activo con el tiempo. Entender y calcular la depreciación es esencial para la planificación de reemplazo y para evaluar el valor real de los activos en la organización.'
    },
  ]

  getFrequentQuestions() {
    return this.accordionSection;
  }

  getTestimonialsEnergy() {
    return this.testimonialsEnergy;
  }

  getTestimonialsSwimming() {
    return this.testimonialsSwimming;
  }

  getProjectId(projectEnergy: ProjectVideo) {
    return this.testimonialsEnergy.forEach(project => project === projectEnergy);
  }
}
