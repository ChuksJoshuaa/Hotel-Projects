import { MyContext } from "src/types";
import {
  Resolver,
  Query,
  Arg,
  Mutation,
  InputType,
  Field,
  Ctx,
  Int,
  FieldResolver,
  Root,
} from "type-graphql";
import { Hotel } from "../entities/Hotel.entity";
import { HotelBrand } from "../entities/HotelBrand.entity";

@InputType()
class HotelInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  authorId: number;

  @Field()
  address: string;

  @Field()
  brandName: string;

  @Field()
  city: string;

  @Field()
  country: string;

  @Field()
  image: string;
}

@Resolver(Hotel)
export class HotelResolver {
  @FieldResolver(() => String)
  descriptionSnippet(@Root() root: Hotel) {
    return root.description.slice(0, 70);
  }

  @Query(() => [Hotel])
  async hotels(): Promise<Hotel[]> {
    return Hotel.find({});
  }

  @Query(() => [Hotel])
  async filterHotels(
    @Arg("brandId", () => Int, { nullable: true }) brandId: number
  ): Promise<Hotel[]> {
    return Hotel.find({ where: { brandId } });
  }

  //Get single hotel by id
  @Query(() => Hotel, { nullable: true })
  hotel(@Arg("id", () => Int) id: number): Promise<Hotel | null> {
    return Hotel.findOne({ where: { id } });
  }

  //Create Hotel
  @Mutation(() => Hotel)
  async createHotel(
    @Arg("input") input: HotelInput,
    @Ctx() { req }: MyContext
  ): Promise<Hotel> {
    let authorUserId = req.session.userId;
    if (!authorUserId || authorUserId === undefined || authorUserId === null) {
      authorUserId = input.authorId;
    }
    const brandHotel = await HotelBrand.findOne({
      where: { name: input.brandName },
    });
    const brandHotelId = brandHotel?.id;

    return Hotel.create({
      ...input,
      authorId: authorUserId as any,
      brandId: brandHotelId,
    }).save();
  }

  //Update Hotel
  @Mutation(() => Hotel, { nullable: true })
  async updateHotel(
    @Arg("id", () => Int) id: number,
    @Arg("name", () => String, { nullable: true }) name: string,
    @Arg("image", () => String, { nullable: true }) image: string,
    @Arg("city", () => String, { nullable: true }) city: string,
    @Arg("country", () => String, { nullable: true }) country: string,
    @Arg("address", () => String, { nullable: true }) address: string,
    @Arg("description", () => String, { nullable: true }) description: string,
    @Arg("price", () => Int, { nullable: true }) price: number,
    @Arg("brandName", () => String, { nullable: true }) brandName: string
  ): Promise<Hotel | null> {
    const hotel = await Hotel.findOne({ where: { id } });

    if (!hotel) {
      return null;
    }
    if (
      typeof name !== "undefined" ||
      typeof description !== "undefined" ||
      typeof city !== "undefined" ||
      typeof country !== "undefined" ||
      typeof address !== "undefined" ||
      typeof price !== "undefined" ||
      typeof image !== "undefined" ||
      typeof brandName !== "undefined"
    ) {
      const brandHotel = await HotelBrand.findOne({
        where: { name: brandName },
      });
      const brandHotelId = brandHotel?.id;
      await Hotel.update(
        { id },
        {
          name,
          city,
          country,
          image,
          description,
          price,
          address,
          brandName,
          brandId: brandHotelId,
        }
      );
    }

    return hotel;
  }

  //Delete Hotel
  @Mutation(() => Boolean)
  async deleteHotel(@Arg("id", () => Int) id: number): Promise<boolean> {
    await Hotel.delete(id);
    return true;
  }
}
