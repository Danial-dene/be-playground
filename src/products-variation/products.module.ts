import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

import { AtGuard } from 'src/guards/auth-at.guard';
import { User } from 'src/user/entities/user.entity';
import { ProductVariation } from './entities/productVariation.entity';
import { ProductVariationDTO } from './dto/productVariation.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductVariation]),
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductVariation])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          DTOClass: ProductVariationDTO,
          EntityClass: ProductVariation,
          guards: [AtGuard],
        },
      ],
    }),
  ],
})
export class ProductVariationModule {}
