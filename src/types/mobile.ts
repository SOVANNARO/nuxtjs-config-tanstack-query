export interface IMobileResponse {
  id?: string;
  name: string;
  data: Data | null;
}

export interface Data {
  dataColor?: string;
  dataCapacity?: string;
  capacityGB?: number;
  dataPrice?: number;
  dataGeneration?: string;
  year?: number;
  cpuModel?: string;
  hardDiskSize?: string;
  strapColour?: string;
  caseSize?: string;
  color?: string;
  description?: string;
  capacity?: string;
  screenSize?: number;
  generation?: string;
  price?: string;
}
