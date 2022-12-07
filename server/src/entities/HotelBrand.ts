import { ObjectType, Field } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
  ObjectID,
  OneToMany,
} from "typeorm";
import { Hotel } from "./Hotel";

@ObjectType()
@Entity()
export class HotelBrand extends BaseEntity {
  @Field()
  @ObjectIdColumn()
  id!: ObjectID;

  @Field()
  @Column()
  name!: string;

  @OneToMany(() => Hotel, (item) => item.brand)
  brands: Hotel[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt = new Date();

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt = new Date();
}
