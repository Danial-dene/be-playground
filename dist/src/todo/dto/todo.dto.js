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
exports.TodoDTO = void 0;
const query_graphql_1 = require("@nestjs-query/query-graphql");
const graphql_1 = require("@nestjs/graphql");
const user_dto_1 = require("../../user/dto/user.dto");
let TodoDTO = class TodoDTO {
};
__decorate([
    (0, query_graphql_1.FilterableField)(() => graphql_1.Int),
    __metadata("design:type", Number)
], TodoDTO.prototype, "id", void 0);
__decorate([
    (0, query_graphql_1.FilterableField)(),
    __metadata("design:type", String)
], TodoDTO.prototype, "todo", void 0);
__decorate([
    (0, query_graphql_1.FilterableField)(),
    __metadata("design:type", Boolean)
], TodoDTO.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], TodoDTO.prototype, "user", void 0);
TodoDTO = __decorate([
    (0, graphql_1.ObjectType)('Todo'),
    (0, query_graphql_1.BeforeCreateOne)((input, req) => {
        console.log(req.req.user.sub);
        input.input.user = req.req.user.sub;
        return input;
    }),
    (0, query_graphql_1.Relation)('user', () => user_dto_1.UserDTO, { disableRemove: true })
], TodoDTO);
exports.TodoDTO = TodoDTO;
//# sourceMappingURL=todo.dto.js.map