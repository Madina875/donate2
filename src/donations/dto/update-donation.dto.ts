export enum PaymentMethod {
  CARD = "card",
  CASH = "cash",
}

export class UpdateDonationDto {
  creatorId?: number;
  supporterId?: number;
  amount?: number;
  message?: string;
  payment_method?: PaymentMethod;
  is_anonymous?: boolean;
}
