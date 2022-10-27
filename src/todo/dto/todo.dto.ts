import {
  BeforeCreateOne,
  CreateOneInputType,
  FilterableField,
  Relation,
} from '@nestjs-query/query-graphql';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserDTO } from 'src/user/dto/user.dto';

export interface IUser {
  req: {
    user: {
      sub: string;
      username: string;
      iat: number;
    };
  };
}

@ObjectType('Todo')
@BeforeCreateOne((input: CreateOneInputType<TodoDTO>, req: any) => {
  console.log(req.req.user.sub);
  input.input.user = req.req.user.sub;
  // console.log(req.user.sub);
  return input;
})
@Relation('user', () => UserDTO, { disableRemove: true })
export class TodoDTO {
  @FilterableField(() => Int)
  id: number;

  @FilterableField()
  todo: string;

  @FilterableField()
  status: boolean;

  @Field()
  user: string;
}
