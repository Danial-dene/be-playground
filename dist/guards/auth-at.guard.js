"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtGuard = void 0;
const graphql_1 = require("@nestjs/graphql");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const JWT = require("jsonwebtoken");
class AtGuard extends (0, passport_1.AuthGuard)('at-jwt') {
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        const req = ctx.getContext().req;
        const jwt = passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken()(req);
        const decodedJwt = JWT.decode(jwt);
        req['user'] = decodedJwt;
        return ctx.getContext().req;
    }
}
exports.AtGuard = AtGuard;
//# sourceMappingURL=auth-at.guard.js.map