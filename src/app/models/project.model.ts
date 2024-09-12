export interface VideoDetails {
    system: string,
    numberPanels: number,
    powerPanels: string,
    annualGeneration: string
}

export interface PhotoDetails {
    system: string,
    numberPanels: number,
    powerPanels: string,
    annualGeneration: string
}


export interface DesignDetails {
    system: string,
    numberPanels: number,
    powerPanels: string,
    annualGeneration: string
}

export interface SocialMediaDetails {
    system: string,
    numberPanels: number,
    powerPanels: string,
    annualGeneration: string
}


export interface VideoDetails {
    system: string,
    numberPanels: number,
    powerPanels: string,
    annualGeneration: string
}

export interface ProjectDefault {
    id: number,
    img: string,
    category: string,
    scale: string
    descriptionSmall: string,
    descriptionLarge: string
}

export interface ProjectPhoto extends ProjectDefault {
    details: VideoDetails
}

export interface ProjectVideo extends ProjectDefault {
    details: PhotoDetails
}

export interface ProjectSocialMedia extends ProjectDefault {
    details: DesignDetails
}

export interface ProjectDesign extends ProjectDefault {
    details: SocialMediaDetails
}
  