export interface IAuthPayload {
    userId: string;
    email: string;
}
export interface IAuth extends IAuthPayload {
    accessToken: string;
}
