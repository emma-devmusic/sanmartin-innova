export interface ResponseApiDing {
    status: string
    message: string;
}

export interface DataErrorResponse {
    code: string;
    message: string;
}

export type FetchMethod = 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH' | 'OPTIONS'