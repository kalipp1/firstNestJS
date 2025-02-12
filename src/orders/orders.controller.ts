import { Controller, Get, Param, Delete, Body, Post, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { NotFoundException } from '@nestjs/common';
import { ParseUUIDPipe } from '@nestjs/common';
import { CreateOrderDTO } from 'src/products/dtos/create-order.dto';
import { UpdateOrderDTO } from 'src/products/dtos/update-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService) {}
    @Get('/')
    getAll(): any {
        return this.ordersService.getAll();   
    }
    @Get('/:id')
    public getById(@Param('id', new ParseUUIDPipe()) id: string) {
        if (!this.ordersService.getById(id))
            throw new NotFoundException('Product not found');
        return this.ordersService.getById(id);
    }
    @Delete('/:id')
    public deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
        if (!this.ordersService.getById(id))
            throw new NotFoundException('Product not found');
        this.ordersService.deleteById(id);
        return { success: true };
    }
    @Post('/')
    create(@Body() orderData: CreateOrderDTO) {
        return this.ordersService.create(orderData);
    }
    @Put('/:id')
    update(
      @Param('id', new ParseUUIDPipe()) id: string,
      @Body() orderData: UpdateOrderDTO,
    ) {
      if (!this.ordersService.getById(id))
        throw new NotFoundException('Product not found');
  
      this.ordersService.modifyById(id, orderData);
      return { success: true };
    }
}
