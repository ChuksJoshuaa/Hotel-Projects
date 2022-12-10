"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelResolver = void 0;
const Authenticated_1 = require("../middleware/Authenticated");
const type_graphql_1 = require("type-graphql");
const Hotel_1 = require("../entities/Hotel");
const HotelBrand_1 = require("../entities/HotelBrand");
let HotelInput = class HotelInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], HotelInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], HotelInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], HotelInput.prototype, "price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], HotelInput.prototype, "address", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], HotelInput.prototype, "brandName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], HotelInput.prototype, "city", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], HotelInput.prototype, "country", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], HotelInput.prototype, "image", void 0);
HotelInput = __decorate([
    (0, type_graphql_1.InputType)()
], HotelInput);
let HotelResolver = class HotelResolver {
    descriptionSnippet(root) {
        return root.description.slice(0, 100);
    }
    hotels() {
        return __awaiter(this, void 0, void 0, function* () {
            return Hotel_1.Hotel.find({});
        });
    }
    filterHotels(brandName) {
        return __awaiter(this, void 0, void 0, function* () {
            return Hotel_1.Hotel.find({ where: { brandName } });
        });
    }
    hotel(id) {
        return Hotel_1.Hotel.findOne({ where: { id } });
    }
    createHotel(input, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            let authorUserId = req.session.userId;
            const brandHotel = yield HotelBrand_1.HotelBrand.findOne({
                where: { name: input.brandName },
            });
            const brandHotelId = brandHotel === null || brandHotel === void 0 ? void 0 : brandHotel.id;
            return Hotel_1.Hotel.create(Object.assign(Object.assign({}, input), { authorId: authorUserId, brandId: brandHotelId })).save();
        });
    }
    updateHotel(id, name, image, city, country, address, description, price, brandName) {
        return __awaiter(this, void 0, void 0, function* () {
            const hotel = yield Hotel_1.Hotel.findOne({ where: { id } });
            if (!hotel) {
                return null;
            }
            if (typeof name !== "undefined" ||
                typeof description !== "undefined" ||
                typeof city !== "undefined" ||
                typeof country !== "undefined" ||
                typeof address !== "undefined" ||
                typeof price !== "undefined" ||
                typeof image !== "undefined" ||
                typeof brandName !== "undefined") {
                const brandHotel = yield HotelBrand_1.HotelBrand.findOne({
                    where: { name: brandName },
                });
                const brandHotelId = brandHotel === null || brandHotel === void 0 ? void 0 : brandHotel.id;
                yield Hotel_1.Hotel.update({ id }, {
                    name,
                    city,
                    country,
                    image,
                    description,
                    price,
                    address,
                    brandName,
                    brandId: brandHotelId,
                });
            }
            return hotel;
        });
    }
    deleteHotel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Hotel_1.Hotel.delete(id);
            return true;
        });
    }
};
__decorate([
    (0, type_graphql_1.FieldResolver)(() => String),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Hotel_1.Hotel]),
    __metadata("design:returntype", void 0)
], HotelResolver.prototype, "descriptionSnippet", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Hotel_1.Hotel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HotelResolver.prototype, "hotels", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => [Hotel_1.Hotel]),
    __param(0, (0, type_graphql_1.Arg)("brandName", () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HotelResolver.prototype, "filterHotels", null);
__decorate([
    (0, type_graphql_1.Query)(() => Hotel_1.Hotel, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HotelResolver.prototype, "hotel", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Hotel_1.Hotel),
    (0, type_graphql_1.UseMiddleware)(Authenticated_1.Authenticated),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HotelInput, Object]),
    __metadata("design:returntype", Promise)
], HotelResolver.prototype, "createHotel", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Hotel_1.Hotel, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("name", () => String, { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("image", () => String, { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)("city", () => String, { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)("country", () => String, { nullable: true })),
    __param(5, (0, type_graphql_1.Arg)("address", () => String, { nullable: true })),
    __param(6, (0, type_graphql_1.Arg)("description", () => String, { nullable: true })),
    __param(7, (0, type_graphql_1.Arg)("price", () => type_graphql_1.Int, { nullable: true })),
    __param(8, (0, type_graphql_1.Arg)("brandName", () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, String, Number, String]),
    __metadata("design:returntype", Promise)
], HotelResolver.prototype, "updateHotel", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HotelResolver.prototype, "deleteHotel", null);
HotelResolver = __decorate([
    (0, type_graphql_1.Resolver)(Hotel_1.Hotel)
], HotelResolver);
exports.HotelResolver = HotelResolver;
//# sourceMappingURL=hotel.js.map