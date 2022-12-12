// import { Authenticated } from "../middleware/Authenticated";
import { MyContext } from "src/types";
import {
  Resolver,
  Query,
  Arg,
  Mutation,
  InputType,
  Field,
  Ctx,
  // UseMiddleware,
  Int,
} from "type-graphql";
import { HotelBrand } from "../entity/HotelBrand";
// import { Hotel } from "../entities/Hotel";

@InputType()
class BrandInput {
  @Field()
  name: string;

  @Field()
  authorId: number;
}

@Resolver(HotelBrand)
export class HotelBrandResolver {
  @Query(() => [HotelBrand])
  async brands(): Promise<HotelBrand[]> {
    return HotelBrand.find({});
  }

  //Get single brand
  @Query(() => HotelBrand, { nullable: true })
  brand(@Arg("id", () => Int) id: number): Promise<HotelBrand | null> {
    return HotelBrand.findOne({ where: { id } });
  }

  //Create HotelBrand
  @Mutation(() => HotelBrand)
  async createBrand(
    @Arg("input") input: BrandInput,
    @Ctx() { req }: MyContext
  ): Promise<HotelBrand> {
    let authorUserId = req.session.userId;
    if (!authorUserId || authorUserId === undefined || authorUserId === null) {
      authorUserId = input.authorId;
    }
    return HotelBrand.create({
      ...input,
      authorId: authorUserId,
    }).save();
  }

  //Update Brand
  @Mutation(() => HotelBrand, { nullable: true })
  // @UseMiddleware(Authenticated)
  async updateBrand(
    @Arg("id", () => Int) id: number,
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
  // @UseMiddleware(Authenticated)
  async deleteBrand(@Arg("id", () => Int) id: number): Promise<boolean> {
    await HotelBrand.delete(id);
    return true;
  }
}
