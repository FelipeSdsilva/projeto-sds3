import { Seller }from './seller';
export type Sale = {
    id: number,
    visited: number,
    deals: number,
    amount: number,
    date: string,
    saller: Seller
}

export type SalePage = {
    content?: Sale[];
    last: boolean,
    totalElements:number,
    totalPages: number,
    size?: number
    number: number,
    first: boolean,
    numberOfElements?: number,
    empty?: boolean
}

export type SaleSum = {
    sallerName: string;
    sum: number
}

export type SaleSuccess = {
    sallerName: string;
    visited: number;
    deals: number
}