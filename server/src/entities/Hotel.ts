import { ObjectType, Field } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { HotelBrand } from "./HotelBrand";

import { User } from "./User";

@ObjectType()
@Entity()
export class Hotel extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

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

  @Field(() => String)
  @ManyToOne(() => User, (user) => user.hotels)
  author!: User;

  @Field()
  @Column()
  brandId: number;

  @Field(() => String)
  @ManyToOne(() => HotelBrand, (item) => item.brands)
  brand!: HotelBrand;

  @Field(() => String)
  @CreateDateColumn()
  createdAt = new Date();

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt = new Date();
}
