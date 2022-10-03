import { ObjectType, Field } from '@nestjs/graphql';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import 'dotenv/config';
import { Todo } from 'src/todo/entities/todo.entity';

@Entity('users')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ unique: true })
  @Field()
  username: string;

  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  rt: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  todo: Todo[];

  @BeforeInsert()
  async hashPass() {
    if (this.password) {
      this.password = await bcrypt.hash(
        this.password,
        Number(process.env.SALT_ROUNDS),
      );
    }
  }
}
