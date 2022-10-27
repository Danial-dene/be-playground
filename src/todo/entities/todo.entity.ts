import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('todos')
@ObjectType()
export class Todo {
  // constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  todo: string;

  @Column()
  @Field()
  status: boolean;

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime)
  dateSubmitted: Date;

  @ManyToOne(() => User, (user) => user.todo)
  user: User;
}
