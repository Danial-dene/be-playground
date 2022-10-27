import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { AtGuard } from 'src/guards/auth-at.guard';
import { Products } from './entities/product.entity';
import { ProductsDTO } from './dto/product.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature([Products]),
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([Products])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          DTOClass: ProductsDTO,
          EntityClass: Products,
          guards: [AtGuard],
        },
      ],
    }),
  ],
})
export class ProductsModule {}
