import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

//Filter by what you desire
@ObjectType('Products')
export class ProductsDTO {
  @IDField(() => String)
  @FilterableField()
  id: string;

  @FilterableField()
  name: string;

  @FilterableField()
  price: number;
}
