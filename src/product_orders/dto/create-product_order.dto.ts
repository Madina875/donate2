import { ApiProperty } from "@nestjs/swagger";

export enum OrderStatus {
  PENDING = "pending",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
}

export enum DeliveryStatus {
  PENDING = "pending",
  ON_THE_WAY = "on_the_way",
  DELIVERED = "delivered",
}

export class CreateProductOrderDto {
  @ApiProperty({
    example: 1,
    description: "buyer id",
  })
  buyerId: number;
  @ApiProperty({
    example: 1,
    description: "product id",
  })
  productid: number;
  @ApiProperty({
    example: 1,
    description: " quantity",
  })
  quantity: number;
  @ApiProperty({
    example: 1,
    description: "total price",
  })
  total_price: number;
  @ApiProperty({
    example: "shipped",
    description: "order status",
  })
  status: OrderStatus;
  @ApiProperty({
    example: "hgfds",
    description: "delivery address",
  })
  delivery_address: string;
  @ApiProperty({
    example: "98765432",
    description: "phone number",
  })
  phone_number: string;
  @ApiProperty({
    example: 1,
    description: "curyer id",
  })
  curyerId: number;
  @ApiProperty({
    example: "on_the_way",
    description: "delivery status",
  })
  delivery_status: DeliveryStatus;
}
