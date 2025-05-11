export interface User {
    id?: number | string;
    username: string;
    password: string;
    email: string;
    role: 'a' | 'u' | 'g';
    status:string;
}