import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { ProductVariation } from 'src/products-variation/entities/productVariation.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

//Table for db
@Entity('products')
@ObjectType()
export class Products {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  price: number;

  //   @CreateDateColumn()
  //   @Field(() => GraphQLISODateTime);
  //   dateSubmitted: Date;

  @OneToMany(
    () => ProductVariation,
    (productVariation) => productVariation.productVariation,
  )
  items: ProductVariation[];
}
