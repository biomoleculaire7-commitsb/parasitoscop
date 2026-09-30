export type Language = 'ar' | 'fr' | 'en';

export type ParasiteType = 'protozoa' | 'nematode' | 'cestode' | 'trematode' | 'ectoparasite';

export interface LocalizedString {
  ar: string;
  en: string;
  fr: string;
}

export interface LocalizedList {
  ar: string[];
  en: string[];
  fr: string[];
}

export interface LifeCycleStage {
  stageNumber: number;
  title: LocalizedString;
  hostType: 'definitive' | 'intermediate' | 'environment' | 'vector';
  isDiagnostic: boolean;
  isInfective: boolean;
  description: LocalizedString;
  location: LocalizedString;
}

export interface DrugProtocol {
  drug: string;
  dosageGuideline: string;
  note: LocalizedString;
}

export interface ScientificSource {
  title: string;
  organization: string;
  year: string;
  url: string;
  citationType: 'guideline' | 'peer_reviewed' | 'monograph' | 'standard';
}

export interface ParasiteVideo {
  id: string;
  title: LocalizedString;
  type: 'life_cycle_animation' | 'microscopy_lab' | 'clinical_guide';
  duration: string;
  youtubeId: string;
  sourceName: string;
  description: LocalizedString;
}

export interface Parasite {
  id: string;
  scientificName: string;
  commonNames: LocalizedString;
  type: ParasiteType;
  phylum: string;
  class: string;
  order: string;
  family: string;
  genus: string;
  species: string;
  zoonoticRisk: 'very_high' | 'high' | 'moderate' | 'low' | 'none';
  hosts: {
    definitive: LocalizedString;
    intermediate: LocalizedString;
    accidentalOrDeadEnd?: LocalizedString;
    vectors?: LocalizedString;
  };
  transmission: LocalizedString;
  morphology: {
    diagnosticStages: string[];
    dimensions: string;
    microscopicFeatures: LocalizedString;
    stainingAndDiagnosticMethods: LocalizedString;
  };
  lifeCycle: {
    summary: LocalizedString;
    stages: LifeCycleStage[];
  };
  animalImpact: {
    speciesAffected: string[];
    clinicalSigns: LocalizedList;
    pathology: LocalizedString;
    severity: 'mild' | 'moderate' | 'severe' | 'fatal';
  };
  humanImpact: {
    isZoonotic: boolean;
    incubationPeriod: LocalizedString;
    acuteSigns: LocalizedList;
    chronicComplications: LocalizedList;
    highRiskGroups: LocalizedList;
  };
  treatment: {
    veterinary: {
      firstLineDrugs: DrugProtocol[];
      precautions: LocalizedString;
    };
    human: {
      firstLineDrugs: DrugProtocol[];
      surgicalIntervention?: LocalizedString;
      notes: LocalizedString;
    };
  };
  prevention: {
    veterinary: LocalizedList;
    human: LocalizedList;
    environmental: LocalizedList;
  };
  sampleMicrographs: Array<{
    title: LocalizedString;
    stage: string;
    magnification: string;
    stain: string;
    imageUrl: string;
    description: LocalizedString;
  }>;
  videos: ParasiteVideo[];
  scientificSources: ScientificSource[];
}

export interface DiagnosisFilter {
  hostSpecies: string;
  affectedSystem: string;
  symptoms: string[];
  sampleType?: string;
}
