import { Controller, Get, Param, Delete, Post, Body, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dtos/create-product.dto';
import { ParseUUIDPipe } from '@nestjs/common';
import { UpdateProductDTO } from './dtos/update-product.dto';
import { NotFoundException } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}
    @Get('/')
    getAll(): any {
        return this.productsService.getAll();   
    }
    @Get('/:id')
    public getById(@Param('id', new ParseUUIDPipe()) id: string) {
        if (!this.productsService.getById(id))
            throw new NotFoundException('Product not found');
        return this.productsService.getById(id);
    }
    @Delete('/:id')
    public deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
        if (!this.productsService.getById(id))
          throw new NotFoundException('Product not found');
        this.productsService.deleteById(id);
        return { success: true };
    }
    @Post('/')
    create(@Body() productData: CreateProductDTO) {
        return this.productsService.create(productData);
    }
    @Put('/:id')
    update(
      @Param('id', new ParseUUIDPipe()) id: string,
      @Body() productData: UpdateProductDTO,
    ) {
      if (!this.productsService.getById(id))
        throw new NotFoundException('Product not found');
  
      this.productsService.modifyById(id, productData);
      return { success: true };
    }
}
