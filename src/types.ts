export enum ActiveItems {
  Dashboard = "Dashboard",
  Users = "Users",
  Panels = "Panels",
}

export interface Marker {
  description: string;
  id: number;
  lab_id: number;
  name: string;
  price: string;
  provider_id: string | null;
  slug: string;
  type: string;
  unit: string | null;
}

interface Pagination {
  page: number;
  size: number;
  total: number;
}

export interface BiomarkerData extends Pagination {
  markers: Marker[];
}

export enum TestKitType {
  TestKit = "Test kit",
  AtHome = "At home phlebotomy",
}

export interface Panel {
  name: string;
  testKitType: TestKitType;
  markers: Marker[];
}
