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
exports.HotelBrandResolver = void 0;
const Authenticated_1 = require("../middleware/Authenticated");
const type_graphql_1 = require("type-graphql");
const HotelBrand_1 = require("../entities/HotelBrand");
const appDataSource_1 = require("../appDataSource");
let BrandInput = class BrandInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BrandInput.prototype, "name", void 0);
BrandInput = __decorate([
    (0, type_graphql_1.InputType)()
], BrandInput);
let HotelBrandResolver = class HotelBrandResolver {
    brands(limit, cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const realLimit = Math.min(50, limit);
            const qb = appDataSource_1.dataSource
                .getMongoRepository(HotelBrand_1.HotelBrand)
                .createQueryBuilder("p")
                .orderBy('"createdAt"', "DESC")
                .take(realLimit);
            if (cursor) {
                qb.where('"createdAt < :cursor"', { cursor: new Date(parseInt(cursor)) });
            }
            return qb.getMany();
        });
    }
    brand(id) {
        return HotelBrand_1.HotelBrand.findOne({ where: { _id: id } });
    }
    createBrand(input, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            let authorUserId = req.session.userId;
            return HotelBrand_1.HotelBrand.create(Object.assign(Object.assign({}, input), { authorId: authorUserId })).save();
        });
    }
    updateBrand(_id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const brand = yield HotelBrand_1.HotelBrand.findOne({ where: { _id } });
            if (!brand) {
                return null;
            }
            if (typeof name !== "undefined") {
                yield HotelBrand_1.HotelBrand.update(_id, { name });
            }
            return brand;
        });
    }
    deleteBrand(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield HotelBrand_1.HotelBrand.delete(_id);
            return true;
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [HotelBrand_1.HotelBrand]),
    __param(0, (0, type_graphql_1.Arg)("limit", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("cursor", () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], HotelBrandResolver.prototype, "brands", null);
__decorate([
    (0, type_graphql_1.Query)(() => HotelBrand_1.HotelBrand, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HotelBrandResolver.prototype, "brand", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => HotelBrand_1.HotelBrand),
    (0, type_graphql_1.UseMiddleware)(Authenticated_1.Authenticated),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BrandInput, Object]),
    __metadata("design:returntype", Promise)
], HotelBrandResolver.prototype, "createBrand", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => HotelBrand_1.HotelBrand, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(Authenticated_1.Authenticated),
    __param(0, (0, type_graphql_1.Arg)("_id", () => String)),
    __param(1, (0, type_graphql_1.Arg)("name", () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], HotelBrandResolver.prototype, "updateBrand", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("_id", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HotelBrandResolver.prototype, "deleteBrand", null);
HotelBrandResolver = __decorate([
    (0, type_graphql_1.Resolver)(HotelBrand_1.HotelBrand)
], HotelBrandResolver);
exports.HotelBrandResolver = HotelBrandResolver;
//# sourceMappingURL=brand.js.map