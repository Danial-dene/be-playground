import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { Products } from 'src/products/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('product_variation')
@ObjectType()
export class ProductVariation {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  color: string;

  //   @CreateDateColumn()
  //   @Field(() => GraphQLISODateTime);
  //   dateSubmitted: Date;

  @ManyToOne(() => Products, (product) => product.items)
  productVariation: Products;
}
