export const APK_DOWNLOAD_URL =
  'https://github.com/alenalex-009/vippatti_sarana/releases/download/SIH/Vippatti_Sarana.v1.0.0.apk';

export const GITHUB_REPO_URL =
  'https://github.com/alenalex-009/vippatti_sarana';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: 'ShieldAlert' | 'Radar' | 'MapPinCheck' | 'Route' | 'Radio' | 'LifeBuoy';
  badge: string;
}

export const FEATURES: FeatureItem[] = [
  {
    id: 'risk-assessment',
    title: 'Disaster Risk Assessment',
    description: 'Assess the current risk around your location and receive clear, explainable guidance.',
    iconName: 'ShieldAlert',
    badge: 'Risk Analysis',
  },
  {
    id: 'disaster-radar',
    title: 'Disaster Radar',
    description: 'Explore hazards, safer areas, disaster events, routes, and location context on an interactive map.',
    iconName: 'Radar',
    badge: 'Live Geospatial',
  },
  {
    id: 'safe-zone',
    title: 'Safe-Zone Evaluation',
    description: 'Identify and evaluate nearby safer locations, shelter capacities, and terrain suitability.',
    iconName: 'MapPinCheck',
    badge: 'Safety Evaluation',
  },
  {
    id: 'evacuation-routing',
    title: 'Evacuation Routing',
    description: 'Plan evacuation routes and explore alternative paths to navigate safely around hazard perimeters.',
    iconName: 'Route',
    badge: 'Dynamic Routes',
  },
  {
    id: 'disaster-intelligence',
    title: 'Disaster Intelligence',
    description: 'Access disaster information from multiple data sources, real-time alerts, and low-bandwidth audio bulletins.',
    iconName: 'Radio',
    badge: 'Multi-Source Feeds',
  },
  {
    id: 'emergency-tools',
    title: 'Emergency Tools',
    description: 'Access offline survival guidance, emergency contacts, SOS distress signaling, and quick hardware utilities.',
    iconName: 'LifeBuoy',
    badge: 'First Response',
  },
];

export interface HowItWorksStep {
  step: string;
  title: string;
  summary: string;
  detail: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: '01',
    title: 'Detect',
    summary: 'Understand the current disaster situation and risk.',
    detail: 'Continuous hazard aggregation processes live seismic, weather, landslide, and flood telemetry tailored to your location context.',
  },
  {
    step: '02',
    title: 'Decide',
    summary: 'Identify safer locations and recommended actions.',
    detail: 'Automated elevation and risk profiling surfaces verified community safe havens and relief shelters outside hazard perimeters.',
  },
  {
    step: '03',
    title: 'Act',
    summary: 'Follow evacuation routes and use emergency tools when needed.',
    detail: 'Navigate alternative routes, notify emergency contacts, and utilize offline survival guides or SOS signaling tools.',
  },
];

export interface TechItem {
  name: string;
  category: string;
  detail: string;
}

export const TECHNOLOGIES: TechItem[] = [
  { name: 'Kotlin', category: 'Language', detail: 'Modern native Android foundation' },
  { name: 'Jetpack Compose', category: 'UI Toolkit', detail: 'Declarative reactive UI framework' },
  { name: 'OSMDroid', category: 'Map Engine', detail: 'Offline-capable OpenStreetMap integration' },
  { name: 'OpenStreetMap', category: 'GIS Base', detail: 'Open collaborative spatial data' },
  { name: 'OSRM', category: 'Routing Engine', detail: 'Hazard-avoidance path calculation' },
  { name: 'Firebase', category: 'Cloud Backend', detail: 'Realtime data sync & telemetry' },
  { name: 'USGS', category: 'Telemetry', detail: 'Global seismic data feed' },
  { name: 'NASA FIRMS', category: 'Satellite', detail: 'Active thermal and wildfire tracking' },
  { name: 'IMD CAP', category: 'Advisories', detail: 'Common Alerting Protocol weather alerts' },
  { name: 'GNews API', category: 'Intelligence', detail: 'Curated emergency news stream' },
];
