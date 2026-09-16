export const APK_DOWNLOAD_URL =
  'https://github.com/jeevansai-hub/Reckon-App/raw/main/releases/reckon-ai-v1.0.apk';

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
    description: 'Assess location-based disaster risk and receive actionable recommendations.',
    iconName: 'ShieldAlert',
    badge: 'Risk Analysis',
  },
  {
    id: 'disaster-radar',
    title: 'Disaster Radar',
    description: 'Visualize disaster events, hazard zones, safe zones, and evacuation routes.',
    iconName: 'Radar',
    badge: 'Live Geospatial',
  },
  {
    id: 'safe-zone',
    title: 'Safe Zone Detection',
    description: 'Identify and evaluate nearby safer locations.',
    iconName: 'MapPinCheck',
    badge: 'Safety Centers',
  },
  {
    id: 'evacuation-routing',
    title: 'Evacuation Routing',
    description: 'Plan evacuation routes and explore alternative routes.',
    iconName: 'Route',
    badge: 'Dynamic Routes',
  },
  {
    id: 'disaster-intelligence',
    title: 'Disaster Intelligence',
    description: 'Access disaster information from multiple data sources.',
    iconName: 'Radio',
    badge: 'Multi-Source Feeds',
  },
  {
    id: 'emergency-tools',
    title: 'Emergency Tools',
    description: 'SOS support, emergency contacts, flashlight, siren, and other emergency utilities.',
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
    detail: 'Continuous hazard aggregation processes live seismic, weather, and wildfire data tailored to current GPS coordinates.',
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
    detail: 'Navigate alternate offline-capable routes, alert emergency contacts, and trigger SOS strobes or audible distress beacons.',
  },
];

export interface TechItem {
  name: string;
  category: string;
  detail: string;
}

export const TECHNOLOGIES: TechItem[] = [
  { name: 'Kotlin', category: 'Language', detail: 'Modern native Android foundation' },
  { name: 'Jetpack Compose', category: 'UI Toolkit', detail: 'Declarative modern reactive UI' },
  { name: 'OSMDroid', category: 'Map Engine', detail: 'OpenStreetMap view integration' },
  { name: 'OpenStreetMap', category: 'GIS Base', detail: 'Collaborative spatial mapping' },
  { name: 'OSRM', category: 'Routing Engine', detail: 'High performance routing' },
  { name: 'Firebase', category: 'Cloud backend', detail: 'Realtime updates & storage' },
  { name: 'USGS', category: 'Telemetry', detail: 'Global seismic data feed' },
  { name: 'NASA FIRMS', category: 'Satellite', detail: 'Active thermal & fire alerts' },
  { name: 'IMD CAP', category: 'Advisories', detail: 'Common Alerting Protocol alerts' },
  { name: 'GNews', category: 'Intelligence', detail: 'Curated emergency news stream' },
];
