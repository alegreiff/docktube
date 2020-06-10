import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './products.model';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'Almacen',
    schema: ProductSchema,
  }], 'products'),
  PassportModule
],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
