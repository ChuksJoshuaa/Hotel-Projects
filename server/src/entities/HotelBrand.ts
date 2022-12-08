import { ObjectType, Field } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  // Any,
} from "typeorm";
import { Hotel } from "./Hotel";
import { User } from "./User";

@ObjectType()
@Entity()
export class HotelBrand extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  authorId!: number;

  @OneToMany(() => Hotel, (item) => item.brand)
  brands: Hotel[];

  @Field(() => User)
  @ManyToOne(() => User, (item) => item.hotelbrands)
  author!: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt = new Date();

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt = new Date();
}
