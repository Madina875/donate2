export enum VehicleType {
  MOTORCYCLE = "motorcycle",
  BICYCLE = "bicycle",
  CAR = "car",
  VAN = "van",
}

export class UpdateCuryerDto {
  full_name?: string;
  phone_number?: string;
  email?: string;
  password_hash?: string;
  address?: string;
  vehicle_type?: VehicleType;
}
