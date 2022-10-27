import { ExecutionContext } from '@nestjs/common';
import { Strategy } from 'passport-jwt';
declare const AtJwtStrategy_base: new (...args: any[]) => Strategy;
export declare class AtJwtStrategy extends AtJwtStrategy_base {
    constructor();
    validate(payload: any, context: ExecutionContext): Promise<any>;
}
export {};
