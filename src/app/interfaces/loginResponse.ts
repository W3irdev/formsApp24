export interface LoginResponse {
    user: User;
    token: string;
}

export interface User {
    login:  string;
    name:   string;
    email:  string;
    role:   string;
    active: boolean;
    uid:    string;
}
