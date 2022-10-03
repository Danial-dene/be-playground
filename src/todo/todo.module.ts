import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Todo } from './entities/todo.entity';
import { TodoDTO } from './dto/todo.dto';
import { AtGuard } from 'src/guards/auth-at.guard';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Todo, User]),
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([Todo])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          DTOClass: TodoDTO,
          EntityClass: Todo,
          guards: [AtGuard],
        },
      ],
    }),
  ],
})
export class TodoModule {}
