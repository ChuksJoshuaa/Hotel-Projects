import { ObjectType, Field } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  UpdateDateColumn,
} from "typeorm";
import { Hotel } from "./Hotel.entity";
import { HotelBrand } from "./HotelBrand.entity";

@ObjectType()
@Entity("user")
export class User extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn()
  id!: number;

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
