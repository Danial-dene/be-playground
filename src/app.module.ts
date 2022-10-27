import { Module } from '@nestjs/common';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { Todo } from './todo/entities/todo.entity';
import { User } from './user/entities/user.entity';
import { TodoModule } from './todo/todo.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { Products } from './products/entities/product.entity';
import { ProductVariation } from './products-variation/entities/productVariation.entity';
import { ProductVariationModule } from './products-variation/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Todo, Products, ProductVariation],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({}),
    UserModule,
    TodoModule,
    AuthModule,
    ProductsModule,
    ProductVariationModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
