import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('ProductVariation')
export class ProductVariationDTO {
  @IDField(() => String)
  @FilterableField()
  id: string;

  @FilterableField()
  name: string;

  @FilterableField()
  color: string;
}
