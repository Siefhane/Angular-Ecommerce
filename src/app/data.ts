export interface product_Data {
    quantity?: any;
    id: number;
    brand:string;
    title: string;
    description: string;
    category: string;
    released?: string | Date;
    createdAt:string | Date;
    rating: number;
    price: number;
    stock: number;
    discountPercentage: number;
    thumbnail:string
    images: Array<string>;
}
