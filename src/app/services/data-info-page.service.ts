import { Injectable } from '@angular/core';
import { ProjectEnergy, ProjectSwimming } from '../models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class DataInfoPageService {

  testimonialsEnergy: ProjectEnergy[] = [
    {
      id: 1,
      img: '../../assets/img/solar.jpg',
      category: 'Energía Solar',
      scale: 'Empresa',
      descriptionSmall: '1 Sistema de energía solar Virel de 13.64 kWp',
      descriptionLarge: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        system: 'Solar interconectado',
        numberPanels: 30,
        powerPanels: '310 WP',
        annualGeneration: '18512 kWh'
      }
    },
    {
      id: 2,
      img: '../../assets/img/solar.jpg',
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
      img: '../../assets/img/solar.jpg',
      category: 'Energía Solar',
      scale: 'Empresa',
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
      img: '../../assets/img/solar.jpg',
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
      img: '../../assets/img/solar.jpg',
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
      img: '../../assets/img/solar.jpg',
      category: 'Energía Solar',
      scale: 'Empresa',
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

  testimonialsSwimming: ProjectSwimming[] = [
    {
      id: 7,
      img: '../../assets/img/swimming-pool.jpg',
      category: 'Piscinas',
      scale: 'Hogar',
      descriptionSmall: '1 Sistema de mantenimiento piscinas',
      descriptionLarge: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        systemWater: 'Water',
        filters: 30,
        space: '50 mts',
        maintence: 'month'
      }
    },
    {
      id: 8,
      img: '../../assets/img/swimming-pool.jpg',
      category: 'Piscinas',
      scale: 'Hogar',
      descriptionSmall: '2 Sistema de mantenimiento piscinas',
      descriptionLarge: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        systemWater: 'Water',
        filters: 30,
        space: '50 mts',
        maintence: 'month'
      }
    },
    {
      id: 9,
      img: '../../assets/img/swimming-pool.jpg',
      category: 'Piscinas',
      scale: 'Hogar',
      descriptionSmall: '3 Sistema de mantenimiento piscinas',
      descriptionLarge: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        systemWater: 'Water',
        filters: 30,
        space: '50 mts',
        maintence: 'month'
      }
    },
    {
      id: 10,
      img: '../../assets/img/swimming-pool.jpg',
      category: 'Piscinas',
      scale: 'Hogar',
      descriptionSmall: '4 Sistema de mantenimiento piscinas',
      descriptionLarge: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        systemWater: 'Water',
        filters: 30,
        space: '50 mts',
        maintence: 'month'
      }
    },
    {
      id: 11,
      img: '../../assets/img/swimming-pool.jpg',
      category: 'Piscinas',
      scale: 'Hogar',
      descriptionSmall: '5 Sistema de mantenimiento piscinas',
      descriptionLarge: '5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        systemWater: 'Water',
        filters: 30,
        space: '50 mts',
        maintence: 'month'
      }
    },
    {
      id: 12,
      img: '../../assets/img/swimming-pool.jpg',
      category: 'Piscinas',
      scale: 'Hogar',
      descriptionSmall: '6 Sistema de mantenimiento piscinas',
      descriptionLarge: '6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab adipisci sapiente id doloremque fugit ad minima! Id saepe vero provident non praesentium facilis laboriosam veritatis, cum quisquam architecto',
      details: {
        systemWater: 'Water',
        filters: 30,
        space: '50 mts',
        maintence: 'month'
      }
    },
  ]; 

  getTestimonialsEnergy() {
    return this.testimonialsEnergy;
  }

  getTestimonialsSwimming() {
    return this.testimonialsSwimming;
  }

  getProjectId(projectEnergy: ProjectEnergy) {
    return this.testimonialsEnergy.forEach(project => project === projectEnergy);
  }
}
