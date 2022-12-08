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
  FieldResolver,
  Root,
  ObjectType,
} from "type-graphql";
import { Hotel } from "../entities/Hotel";
import { dataSource } from "../appDataSource";
import { HotelBrand } from "../entities/HotelBrand";

@InputType()
class HotelInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;

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

@ObjectType()
class PaginatedHotels {
  @Field(() => [Hotel])
  hotels: Hotel[];
  @Field()
  hasMore: boolean;
}

@Resolver(Hotel)
export class HotelResolver {
  @FieldResolver(() => String)
  descriptionSnippet(@Root() root: Hotel) {
    return root.description.slice(0, 100);
  }

  @Query(() => PaginatedHotels)
  async hotels(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null
  ): Promise<PaginatedHotels> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;

    const replacements: any[] = [realLimitPlusOne];

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }

    const hotels = await dataSource.query(
      `
        select p.*, 
        json_build_object(
          'id', u.id,
          'username', u.username,
          'email', u.email,
          'createdAt', u."createdAt",
          'updatedAt', u."updatedAt"
          ) author
        from hotel p
        inner join public.user u on u.id = p."authorId"
        ${cursor ? `where p."createdAt" < $2` : ""}
        order by p."createdAt" DESC
        limit $1    
    `,
      replacements
    );

    console.log(hotels);
    return {
      hotels: hotels.slice(0, realLimit),
      hasMore: hotels.length === realLimitPlusOne,
    };
  }

  //Get single hotel by id
  @Query(() => Hotel, { nullable: true })
  hotel(@Arg("id", () => Int) id: number): Promise<Hotel | null> {
    return Hotel.findOne({ where: { id } });
  }

  //Create Hotel
  @Mutation(() => Hotel)
  @UseMiddleware(Authenticated)
  async createHotel(
    @Arg("input") input: HotelInput,
    @Ctx() { req }: MyContext
  ): Promise<Hotel> {
    let authorUserId = req.session.userId;
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
    @Arg("id") id: number,
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
  async deleteHotel(@Arg("id") id: number): Promise<boolean> {
    await Hotel.delete(id);
    return true;
  }
}
