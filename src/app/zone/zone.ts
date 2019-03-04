export interface Zone {
  id: string;
  name: string;
  surface: number;
  subZones: Zone[];
}
