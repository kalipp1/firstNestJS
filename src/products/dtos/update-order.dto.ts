import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateOrderDTO {
    @IsNotEmpty()
    @IsString()
    productId: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(10, 40)
    client: string;
  
    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
    address: string;
}