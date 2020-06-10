import { Controller, Post, Get, Res, Body, HttpStatus, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDTO } from './products.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
export class ProductsController {
    constructor(private readonly _ps: ProductsService){}
    
    @UseGuards(AuthGuard('jwt'))  
    @Post('/almacen')
    private async createProduct(@Res() res: any, @Body() DTO: ProductDTO) {
      const product = await this._ps.createProducts(DTO);
      return res.status(HttpStatus.OK).json(product);
    }
  
    @UseGuards(AuthGuard('jwt'))  
    @Get('/almacen')
    private async getProducts(@Res() res: any) {
      const products = await this._ps.getProducts();
      return res.status(HttpStatus.OK).json({
        mensaje: 'SISAS',
        products
      });
    }
}
