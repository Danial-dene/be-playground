"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVariationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const query_graphql_1 = require("@nestjs-query/query-graphql");
const query_typeorm_1 = require("@nestjs-query/query-typeorm");
const auth_at_guard_1 = require("../guards/auth-at.guard");
const productVariation_entity_1 = require("./entities/productVariation.entity");
const productVariation_dto_1 = require("./dto/productVariation.dto");
let ProductVariationModule = class ProductVariationModule {
};
ProductVariationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([productVariation_entity_1.ProductVariation]),
            query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([productVariation_entity_1.ProductVariation])],
                resolvers: [
                    {
                        DTOClass: productVariation_dto_1.ProductVariationDTO,
                        EntityClass: productVariation_entity_1.ProductVariation,
                        guards: [auth_at_guard_1.AtGuard],
                    },
                ],
            }),
        ],
    })
], ProductVariationModule);
exports.ProductVariationModule = ProductVariationModule;
//# sourceMappingURL=products.module.js.map