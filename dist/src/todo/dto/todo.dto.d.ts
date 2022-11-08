export interface IUser {
    req: {
        user: {
            sub: string;
            username: string;
            iat: number;
        };
    };
}
export declare class TodoDTO {
    id: number;
    todo: string;
    status: boolean;
    user: string;
}
