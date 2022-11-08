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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVariation = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_entity_1 = require("../../products/entities/product.entity");
const typeorm_1 = require("typeorm");
let ProductVariation = class ProductVariation {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ProductVariation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ProductVariation.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ProductVariation.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Products, (product) => product.items),
    __metadata("design:type", product_entity_1.Products)
], ProductVariation.prototype, "productVariation", void 0);
ProductVariation = __decorate([
    (0, typeorm_1.Entity)('product_variation'),
    (0, graphql_1.ObjectType)()
], ProductVariation);
exports.ProductVariation = ProductVariation;
//# sourceMappingURL=productVariation.entity.js.map