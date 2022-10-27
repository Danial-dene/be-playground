import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([User])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          DTOClass: UserDTO,
          EntityClass: User,
          update: { disabled: true },
          delete: { disabled: true },
        },
      ],
    }),
  ],
  exports: [UserService],
  providers: [UserService],
})
export class UserModule {}
