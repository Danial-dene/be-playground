import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserDTO {
  @IDField(() => String)
  @FilterableField()
  id: string;

  @FilterableField()
  username: string;

  @FilterableField()
  password: string;
}
