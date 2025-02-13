import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length, IsUUID } from 'class-validator';

export class UpdateOrderDTO {
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    productId: string;
  
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    clientId: string;
}