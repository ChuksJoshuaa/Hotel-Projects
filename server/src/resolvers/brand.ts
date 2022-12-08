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
      .getRepository(HotelBrand)
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
  brand(@Arg("id") id: number): Promise<HotelBrand | null> {
    return HotelBrand.findOne({ where: { id } });
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
      authorId: authorUserId,
    }).save();
  }

  //Update Brand
  @Mutation(() => HotelBrand, { nullable: true })
  @UseMiddleware(Authenticated)
  async updateBrand(
    @Arg("id") id: number,
    @Arg("name", () => String, { nullable: true }) name: string
  ): Promise<HotelBrand | null> {
    const brand = await HotelBrand.findOne({ where: { id } });
    if (!brand) {
      return null;
    }
    if (typeof name !== "undefined") {
      await HotelBrand.update({ id }, { name });
    }

    return brand;
  }

  //Delete Brand
  @Mutation(() => Boolean)
  async deleteBrand(@Arg("id") id: number): Promise<boolean> {
    await HotelBrand.delete(id);
    return true;
  }
}
