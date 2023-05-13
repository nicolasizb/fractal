export interface EnergyDetails {
    system: string,
    numberPanels: number,
    powerPanels: string,
    annualGeneration: string
}

export interface SwimmingDetails {
    systemWater: string,
    filters: number,
    space: string,
    maintence: string
}

export interface ProjectDefault {
    id: number,
    img: string,
    category: string,
    scale: string
    descriptionSmall: string,
    descriptionLarge: string
}

export interface ProjectEnergy extends ProjectDefault {
    details: EnergyDetails
}

export interface ProjectSwimming extends ProjectDefault {
    details: SwimmingDetails
}


  