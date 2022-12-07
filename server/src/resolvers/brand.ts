import { Authenticated } from "../middleware/Authenticated";
import { MyContext } from "src/types";
import {
  Resolver,
  Query,
  Arg,
  Mutation,
  InputType,
  Field,
  Ctx,
  UseMiddleware,
  Int,
} from "type-graphql";
import { HotelBrand } from "../entities/HotelBrand";
import { dataSource } from "../appDataSource";
import { ObjectID } from "typeorm";

@InputType()
class BrandInput {
  @Field()
  name: string;
}

@Resolver(HotelBrand)
export class HotelBrandResolver {
  @Query(() => [HotelBrand])
  async brands(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null
  ): Promise<HotelBrand[]> {
    const realLimit = Math.min(50, limit);
    const qb = dataSource
      .getMongoRepository(HotelBrand)
      .createQueryBuilder("p")
      .orderBy('"createdAt"', "DESC")
      .take(realLimit);
    if (cursor) {
      qb.where('"createdAt < :cursor"', { cursor: new Date(parseInt(cursor)) });
    }
    return qb.getMany();
  }

  //Get single brand
  @Query(() => HotelBrand, { nullable: true })
  post(@Arg("id", () => String) id: ObjectID): Promise<HotelBrand | null> {
    return HotelBrand.findOne({ where: { _id: id } });
  }

  //Create HotelBrand
  @Mutation(() => HotelBrand)
  @UseMiddleware(Authenticated)
  async createBrand(
    @Arg("input") input: BrandInput,
    @Ctx() { req }: MyContext
  ): Promise<HotelBrand> {
    let authorUserId = req.session.userId;
    return HotelBrand.create({
      ...input,
      authorId: authorUserId as any,
    }).save();
  }

  //Update Brand
  @Mutation(() => HotelBrand, { nullable: true })
  @UseMiddleware(Authenticated)
  async updateBrand(
    @Arg("id", () => String) id: string,
    @Arg("name", () => String, { nullable: true }) name: string
  ): Promise<HotelBrand | null> {
    const brand = await HotelBrand.findOne({ where: { _id: id as any } });
    if (!brand) {
      return null;
    }
    if (typeof name !== "undefined") {
      await HotelBrand.update({ _id: id as any }, { name });
    }

    return brand;
  }

  //Delete Brand
  @Mutation(() => Boolean)
  async deleteBrand(@Arg("_id", () => String) _id: string): Promise<boolean> {
    await HotelBrand.delete(_id);
    return true;
  }
}
