import { ObjectType, Field } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
  UpdateDateColumn,
} from "typeorm";
import { Hotel } from "./Hotel";
import { HotelBrand } from "./HotelBrand";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => String)
  @ObjectIdColumn()
  _id!: ObjectID;

  @Field()
  @Column({ unique: true })
  username!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Hotel, (hotel) => hotel.author)
  hotels: Hotel[];

  @OneToMany(() => HotelBrand, (hotel) => hotel.author)
  hotelbrands: HotelBrand[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt = Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt = Date;
}
