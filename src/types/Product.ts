export interface Product {
    id: number;
    name: string;
    type: string;
    description: string;
    interestRate?: number;
    createdAt: string;
    active: boolean;
    limit: number;
    spent: number;
}
