import { ObjectType, Field } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
  ManyToOne,
  ObjectID,
  Any,
} from "typeorm";
import { HotelBrand } from "./HotelBrand";

import { User } from "./User";

@ObjectType()
@Entity()
export class Hotel extends BaseEntity {
  @Field(() => String)
  @ObjectIdColumn()
  id!: ObjectID;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column()
  image!: string;

  @Field()
  @Column()
  city!: string;

  @Field()
  @Column()
  country!: string;

  @Field()
  @Column()
  address!: string;

  @Field()
  @Column()
  authorId: string;

  @Field(() => Any)
  @ManyToOne(() => User, (user) => user.hotels)
  author!: User;

  @Field()
  @Column()
  brandId: string;

  @Field(() => Any)
  @ManyToOne(() => HotelBrand, (item) => item.brands)
  brand!: HotelBrand;

  @Field(() => String)
  @CreateDateColumn()
  createdAt = new Date();

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt = new Date();
}
